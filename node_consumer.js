#!/usr/bin/env node

/**
 * 题目处理消费者 - 多账号并行处理
 * 
 * 功能:
 * 1. 从Redis队列获取题目批次
 * 2. 多账号并行处理题目
 * 3. 动态分配账号，避免重复使用
 */

const Redis = require('ioredis');
const { exec, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// 配置
const config = {
  redis: {
    host: 'localhost',
    port: 6379
  },
  queueName: 'question_batch_queue',
  maxConcurrentJobs: 3, // 最大并发处理数
  minTimeBetweenJobs: 2000, // 最小任务间隔(ms)
  accountCooldown: 30000, // 账号冷却时间(ms)
};

// 账号池
const accounts = [
  { name: 'default', busy: false, lastUsed: 0, type: ['deepseek', 'doubao', 'qianwen'] },
  { name: 'zhaojian', busy: false, lastUsed: 0, type: ['deepseek', 'doubao', 'qianwen'] },
  { name: 'zhaojp', busy: false, lastUsed: 0, type: ['deepseek', 'doubao', 'qianwen'] },
  // { name: 'acc3', busy: false, lastUsed: 0, type: ['qianwen'] },
  // 可以添加更多账号
];

// 活跃任务
const activeJobs = new Map();

// Redis客户端
const redis = new Redis(config.redis);

/**
 * 查找可用账号
 * @param {string} llmType LLM类型
 * @returns {object|null} 可用账号或null
 */
function findAvailableAccount(llmType) {
  const now = Date.now();
  
  // 按上次使用时间排序，优先使用最久未用的账号
  const sortedAccounts = [...accounts]
    .filter(acc => !acc.busy && acc.type.includes(llmType))
    .sort((a, b) => a.lastUsed - b.lastUsed);
    
  if (sortedAccounts.length === 0) return null;
  
  // 检查是否有账号已经冷却完毕
  const readyAccount = sortedAccounts.find(acc => 
    now - acc.lastUsed > config.accountCooldown
  );
  
  // 如果有冷却完毕的账号，返回它；否则返回最久未用的账号
  return readyAccount || sortedAccounts[0];
}

/**
 * 处理单个题目，确保每题都由所有LLM平台处理
 * @param {object} question 题目对象
 * @returns {Promise<void>}
 */
async function processQuestion(question) {
  // 定义所有需要处理的LLM平台
  const llmPlatforms = ['deepseek', 'doubao', 'qianwen'];
  
  // 创建一个数组，存放所有平台的处理承诺
  const processingPromises = [];
  
  // 创建临时题目文件
  const tempQuestionFile = path.join(process.cwd(), 'temp', `question_${question.question_id}.json`);
  
  // 确保temp目录存在
  const tempDir = path.join(process.cwd(), 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  // 写入题目内容
  fs.writeFileSync(tempQuestionFile, JSON.stringify([question.content], null, 2), 'utf8');
  
  // 为每个平台创建一个处理任务
  for (const platform of llmPlatforms) {
    processingPromises.push(
      new Promise(async (resolve, reject) => {
        try {
          // 为当前平台找到可用账号
          const account = findAvailableAccount(platform);
          
          if (!account) {
            console.log(`⚠️ 没有可用于处理 ${platform} 类型题目的账号，稍后重试`);
            return reject(new Error(`No available account for ${platform}`));
          }
          
          // 标记账号为忙碌状态
          account.busy = true;
          
          // 构建命令
          const args = [
            'src/index.js',
            '-l', platform, // 使用当前平台，而不是题目的target
            '-i', tempQuestionFile
          ];
          
          if (account.name !== 'default') {
            args.push('-a', account.name);
          }
          
          // 添加输出路径
          const outputDir = path.join(process.cwd(), 'output', platform);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          args.push('-o', path.join(outputDir, `output_${question.question_id}`));
          
          console.log(`🚀 启动处理: 题目 ${question.question_id} → ${platform} (账号: ${account.name})`);
          
          // 使用spawn而不是exec，以便实时获取输出
          const proc = spawn('node', args, {
            cwd: process.cwd(),
            stdio: ['ignore', 'pipe', 'pipe']
          });
          
          let output = '';
          
          proc.stdout.on('data', (data) => {
            const text = data.toString();
            output += text;
            console.log(`[题目 ${question.question_id}|${platform}] ${text.trim()}`);
          });
          
          proc.stderr.on('data', (data) => {
            const text = data.toString();
            output += text;
            console.error(`[题目 ${question.question_id}|${platform} 错误] ${text.trim()}`);
          });
          
          // 存储活跃任务
          const jobId = `${question.question_id}_${platform}`;
          activeJobs.set(jobId, {
            process: proc,
            account: account.name,
            platform: platform,
            startTime: Date.now()
          });
          
          // 等待进程完成
          const exitCode = await new Promise((resolveProc) => {
            proc.on('close', (code) => resolveProc(code));
          });
          
          // 更新账号状态
          account.busy = false;
          account.lastUsed = Date.now();
          
          // 记录处理结果
          const result = {
            question_id: question.question_id,
            platform: platform,
            account: account.name,
            success: exitCode === 0,
            output: output,
            timestamp: new Date().toISOString()
          };
          
          // 可以将结果写入日志文件或数据库
          const logDir = path.join(process.cwd(), 'logs');
          if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
          }
          
          fs.appendFileSync(
            path.join(logDir, 'processing.log'),
            JSON.stringify(result) + '\n',
            'utf8'
          );
          
          // 移除活跃任务
          activeJobs.delete(jobId);
          
          if (exitCode === 0) {
            console.log(`✅ 完成处理: 题目 ${question.question_id} → ${platform} (账号: ${account.name})`);
            resolve();
          } else {
            console.error(`❌ 处理失败: 题目 ${question.question_id} → ${platform} (账号: ${account.name}), 退出码: ${exitCode}`);
            reject(new Error(`Process exited with code ${exitCode}`));
          }
        } catch (err) {
          console.error(`❌ 处理错误: 题目 ${question.question_id} → ${platform}: ${err.message}`);
          reject(err);
        }
      })
    );
  }
  
  // 等待所有平台处理完成（即使某些失败也继续）
  const results = await Promise.allSettled(processingPromises);
  
  // 检查结果
  const failedPlatforms = results
    .map((result, index) => result.status === 'rejected' ? llmPlatforms[index] : null)
    .filter(Boolean);
  
  if (failedPlatforms.length > 0) {
    console.warn(`⚠️ 题目 ${question.question_id} 在以下平台处理失败: ${failedPlatforms.join(', ')}`);
    // 如果所有平台都失败，抛出异常
    if (failedPlatforms.length === llmPlatforms.length) {
      throw new Error(`题目 ${question.question_id} 在所有平台处理失败`);
    }
  }
  
  // 清理临时文件
  try {
    fs.unlinkSync(tempQuestionFile);
  } catch (err) {
    console.warn(`无法删除临时文件 ${tempQuestionFile}: ${err.message}`);
  }
  
  console.log(`💯 题目 ${question.question_id} 处理完成 (成功: ${llmPlatforms.length - failedPlatforms.length}/${llmPlatforms.length})`);
}

/**
 * 处理一批题目
 * @param {Array} batch 题目批次
 */
async function processBatch(batch) {
  console.log(`📦 收到批次: ${batch.length} 道题目`);
  
  // 并发处理题目，但限制最大并发数
  // 注意：每题会处理三个平台，所以实际并发数是 maxConcurrentJobs / 3
  const queue = [...batch];
  const running = new Set();
  
  while (queue.length > 0 || running.size > 0) {
    // 填充运行队列直到达到最大并发数
    // 每题会生成三个并发任务，所以这里限制题目数量而不是任务数量
    while (queue.length > 0 && running.size < Math.max(1, Math.floor(config.maxConcurrentJobs / 3))) {
      const question = queue.shift();
      
      // 为每题创建一个处理任务，该任务将处理所有三个平台
      const promise = processQuestion(question)
        .catch(err => console.error(`处理题目 ${question.question_id} 出错:`, err.message))
        .finally(() => {
          running.delete(promise);
        });
      
      running.add(promise);
      
      // 短暂等待，避免同时启动多个浏览器
      if (queue.length > 0) {
        await new Promise(r => setTimeout(r, config.minTimeBetweenJobs));
      }
    }
    
    // 等待任意一个任务完成
    if (running.size > 0) {
      await Promise.race(running);
    }
  }
}

/**
 * 主消费循环
 */
async function consumeQuestions() {
  console.log('🔄 启动题目消费者，等待题目...');
  
  while (true) {
    try {
      // 阻塞式获取下一批题目
      const res = await redis.blpop(config.queueName, 0);
      const batch = JSON.parse(res[1]);
      
      await processBatch(batch);
      
    } catch (err) {
      console.error('❌ 消费题目出错:', err.message);
      // 短暂等待后继续
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

// 处理退出信号
process.on('SIGINT', () => {
  console.log('正在关闭消费者...');
  
  // 关闭所有活跃任务
  for (const [id, job] of activeJobs.entries()) {
    console.log(`终止题目 ${id} 的处理`);
    job.process.kill();
  }
  
  // 关闭Redis连接
  redis.quit();
  
  process.exit(0);
});

// 启动消费者
consumeQuestions();
