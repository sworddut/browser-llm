const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 命令行参数处理
const argv = require('minimist')(process.argv.slice(2), {
  string: ['account', 'llm', 'input', 'output'],
  boolean: ['help'],
  alias: {
    a: 'account',
    l: 'llm',
    i: 'input',
    o: 'output',
    h: 'help'
  },
  default: {
    account: process.env.ACCOUNT_NAME || 'default',
    llm: process.env.LLM_TYPE || 'deepseek',
    input: './files/extracted_questions.json',
    output: null
  }
});

// 显示帮助信息
if (argv.help) {
  console.log(`
使用说明：
  node src/index.js [选项]

选项：
  -a, --account <账号名>    指定要使用的账号 (默认: "default" 或 ACCOUNT_NAME 环境变量)
  -l, --llm <平台名>        指定要使用的LLM平台 (deepseek|doubao|qianwen, 默认: "deepseek" 或 LLM_TYPE 环境变量)
  -i, --input <文件路径>    指定输入问题文件路径 (默认: "./files/extracted_questions.json")
  -o, --output <目录路径>   指定输出目录 (默认: "./outputs")
  -h, --help               显示帮助信息

环境变量：
  ACCOUNT_NAME            账号名称
  LLM_TYPE                LLM平台类型
  OUTPUT_DIR              输出目录
  `);
  process.exit(0);
}

// 设置环境变量，这样LLM脚本可以使用这些值
process.env.ACCOUNT_NAME = argv.account;
process.env.LLM_TYPE = argv.llm;
if (argv.output) {
  process.env.OUTPUT_DIR = argv.output;
}

// 检查账号是否存在
const accountDir = path.join('cookies', argv.account);
if (!fs.existsSync(accountDir)) {
  console.warn(`[警告] 账号目录不存在: ${accountDir}`);
  console.log(`[信息] 将尝试使用默认cookie路径`);
}

// 适配不同llm的处理器
const llmHandlers = {
  deepseek: require('./llm_deepseek'),
  doubao: require('./llm_doubao'),
  qianwen: require('./llm_qianwen'),
};

// 检查LLM类型是否有效
if (!llmHandlers[argv.llm]) {
  console.error(`[错误] 不支持的LLM类型: ${argv.llm}`);
  console.error(`[错误] 支持的类型: ${Object.keys(llmHandlers).join(', ')}`);
  process.exit(1);
}

const handler = llmHandlers[argv.llm];

// 加载输入数据
let input;
try {
  const inputPath = path.resolve(argv.input);
  console.log(`[信息] 从 ${inputPath} 加载问题数据`);
  input = require(inputPath);
  console.log(`[信息] 成功加载 ${input.length} 个问题`);
} catch (err) {
  console.error(`[错误] 无法加载输入文件: ${err.message}`);
  process.exit(1);
}

// 主函数
(async () => {
  console.log(`
========================================`);
  console.log(`🚀 开始处理 - 使用账号: ${argv.account} | LLM平台: ${argv.llm}`);
  console.log(`========================================\n`);
  
  let completed = 0;
  const total = input.length;
  const startTime = Date.now();
  
  for (const [index, item] of input.entries()) {
    const questionNumber = item.question_number || index + 1;
    console.log(`\n[进度] 问题 ${questionNumber} (${index + 1}/${total}) - ${Math.round((index/total)*100)}% 完成`);
    
    try {
      await handler.processQuestion(item, argv.account,argv.output);
      completed++;
      
      // 计算预计剩余时间
      const elapsed = Date.now() - startTime;
      const avgTimePerQuestion = elapsed / (index + 1);
      const remaining = avgTimePerQuestion * (total - index - 1);
      const remainingMinutes = Math.round(remaining / 60000);
      
      console.log(`[进度] 已完成 ${completed}/${total} | 预计剩余时间: 约 ${remainingMinutes} 分钟`);
    } catch (err) {
      console.error(`[错误] 处理问题 ${questionNumber} 时出错: ${err.message}`);
    }
  }
  
  const totalTime = Math.round((Date.now() - startTime) / 60000);
  console.log(`\n========================================`);
  console.log(`✅ 全部处理完成 - 共 ${completed}/${total} 个问题 | 耗时: ${totalTime} 分钟`);
  console.log(`========================================\n`);
})();
