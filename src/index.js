const input = require('./files/extracted_questions.json'); // 四元组 JSON 数据

// 适配不同llm的处理器
const llmHandlers = {
  deepseek: require('./llm_deepseek'),
  doubao: require('./llm_doubao'),
  qianwen: require('./llm_qianwen'),
};

const llmType = process.env.LLM_TYPE || 'deepseek'; // 通过环境变量切换llm，默认deepseek
const handler = llmHandlers[llmType];

(async () => {
  for (const item of input) {
    await handler.processQuestion(item);
  }
})();
