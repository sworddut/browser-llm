const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const input = require('./files/extracted_questions.json'); // 四元组 JSON 数据

// 配置参数
const MAX_CONCURRENT = 3; // 最大并行处理数量
const WAIT_TIMEOUT = 10 * 60 * 1000; // 最长等待时间（毫秒）
const STABLE_CHECK_INTERVAL = 2000; // 检查内容稳定的间隔（毫秒）
const REQUIRED_STABLE_COUNT = 2; // 需要多少次检测到内容稳定才认为完成

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: 'deepseek-state.json' // 必须先手动登录一次 DeepSeek 并保存
  });

  // 将输入数组分成多个批次处理
  const batches = [];
  for (let i = 0; i < input.length; i += MAX_CONCURRENT) {
    batches.push(input.slice(i, i + MAX_CONCURRENT));
  }

  console.log(`总共 ${input.length} 个问题，分成 ${batches.length} 批处理，每批最多 ${MAX_CONCURRENT} 个问题`);

  // 按批次处理问题
  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`\n开始处理第 ${batchIndex + 1}/${batches.length} 批问题`);

    // 为每个问题创建一个页面并开始处理
    const pagePromises = batch.map(async (item, index) => {
      const page = await context.newPage();
      console.log(`[问题 ${item.question_number}] 创建新页面`);

      try {
        await processQuestion(page, item);
        console.log(`[问题 ${item.question_number}] 处理完成`);
      } catch (error) {
        console.error(`[问题 ${item.question_number}] 处理失败:`, error);
      } finally {
        await page.close();
      }
    });

    // 等待当前批次的所有问题处理完成
    await Promise.all(pagePromises);
    console.log(`第 ${batchIndex + 1}/${batches.length} 批问题处理完成`);
  }

  await browser.close();
  console.log('所有问题处理完成，浏览器已关闭');
})();

// 处理单个问题的函数
async function processQuestion(page, item) {
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions.join('\n')}，思考不用特别久`;

  await page.goto('https://chat.deepseek.com', { waitUntil: 'domcontentloaded' });

  // 先查找并点击"深度思考 (R1)"按钮（如存在）
  try {
    // 等待包含"深度思考"文本的 span 出现
    await page.waitForSelector('span:text("深度思考")', { timeout: 5000 });
    console.log(`[问题 ${item.question_number}] 找到深度思考按钮span`);
    await page.evaluate(() => {
      const label = Array.from(document.querySelectorAll('span')).find(e => e.innerText.includes('深度思考'));
      if (label) {
        let btn = label.closest('div[role=button]');
        if (btn) btn.click();
      }
    });
    // 可选：等待按钮点击后页面刷新
    await page.waitForTimeout(1500);
  } catch (e) {
    // 没找到按钮可忽略
    console.log(`[问题 ${item.question_number}] 未找到"深度思考"按钮:`, e?.message || e);
  }

  // 等待 textarea 可用（DeepSeek 有 debounce 延迟）
  await page.waitForSelector('textarea', { timeout: 15000 });

  // 填入 prompt
  await page.fill('textarea', prompt);
  await page.keyboard.press('Enter');

  // 等待回答加载并监听对话结束
  // 1. 监听最后一条消息内容是否稳定
  let lastContent = '';
  let stableCount = 0;
  let answerSelector = '.ds-markdown.ds-markdown--block'; // 需根据实际页面结构调整
  let answerText = '';

  const startTime = Date.now();
  while (Date.now() - startTime < WAIT_TIMEOUT) {
    // 获取最后一条回答内容
    answerText = await page.evaluate((selector) => {
      const nodes = Array.from(document.querySelectorAll(selector));
      if (nodes.length === 0) return '';
      return nodes[nodes.length - 1].innerText.trim();
    }, answerSelector);
    
    if (answerText && answerText === lastContent) {
      stableCount++;
    } else {
      stableCount = 0;
      lastContent = answerText;
    }
    
    if (stableCount >= REQUIRED_STABLE_COUNT) break; // 内容稳定，判定为完成
    await page.waitForTimeout(STABLE_CHECK_INTERVAL);
  }

  // 确保 deepseek 目录存在
  const deepseekDir = path.join(__dirname, 'deepseek');
  if (!fs.existsSync(deepseekDir)) {
    fs.mkdirSync(deepseekDir, { recursive: true });
  }

  // 2. 获取全部对话内容并保存
  const allMessages = await page.evaluate((selector) => {
    return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
  }, answerSelector);
  
  const resultPath = path.join(deepseekDir, `deepseek_output_${item.question_number}.json`);
  fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages }, null, 2), 'utf-8');

  // 3. 截图
  const screenshotPath = path.join(deepseekDir, `deepseek_output_${item.question_number}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`[问题 ${item.question_number}] ✅ 已保存截图：${screenshotPath}，对话内容：${resultPath}`);
}
