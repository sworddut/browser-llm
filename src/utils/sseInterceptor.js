/**
 * SSE 拦截器工具函数
 * 用于拦截和收集 Server-Sent Events (SSE) 消息
 */

/**
 * 注入脚本来拦截 SSE 请求并收集响应
 * @param {import('playwright').Page} page - Playwright 页面对象
 * @param {string} urlPattern - 要拦截的 URL 模式（例如 'PullExperienceMessage'）
 * @param {object} options - 配置选项
 * @param {boolean} [options.log=false] - 是否输出日志
 * @param {string} [options.logPrefix='[SSE_Interceptor]'] - 日志前缀
 * @returns {Promise<void>}
 */
async function injectSSEInterceptor(page, urlPattern, options = {}) {
  const { log = false, logPrefix = '[SSE_Interceptor]' } = options;
  
  if (log) console.log(`${logPrefix} 注入 fetch 拦截脚本...`);
  
  await page.addInitScript(({ urlPattern, log }) => {
    console.log('注入 fetch 拦截脚本...');
    window.__sse_messages = [];
    
    // 保存原始的 fetch 函数
    const originalFetch = window.fetch;
    
    // 重写 fetch 函数
    window.fetch = async function(...args) {
      const response = await originalFetch.apply(this, args);
      
      // 如果是 SSE 请求
      if (args[0] && typeof args[0] === 'string' && args[0].includes(urlPattern)) {
        console.log('拦截到 SSE 请求:', args[0]);
        const clonedResponse = response.clone();
        const reader = clonedResponse.body.getReader();
        
        // 异步读取流
        (async () => {
          try {
            let buffer = '';
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              
              // 将 Uint8Array 转换为文本
              const text = new TextDecoder().decode(value);
              buffer += text;
              
              // 只在日志中显示前100个字符，避免控制台混乱
              if (text.length > 0) {
                console.log(`收到 SSE 数据 (${text.length} 字节): ${text.substring(0, 50)}...`);
              }
              
              // 将完整的数据片段添加到消息数组
              window.__sse_messages.push(text);
              
              // 检查是否包含完成信号
              if (text.includes('[DONE]')) {
                console.log('检测到 [DONE] 完成信号！');
              }
            }
          } catch (e) {
            console.error('读取 SSE 流时出错:', e);
          }
        })();
      }
      
      return response;
    };
  }, { urlPattern, log });
  
  if (log) console.log(`${logPrefix} 脚本注入完成`);
}

/**
 * 重置 SSE 消息数组
 * @param {import('playwright').Page} page - Playwright 页面对象
 * @param {object} options - 配置选项
 * @param {boolean} [options.log=false] - 是否输出日志
 * @param {string} [options.logPrefix='[SSE_Interceptor]'] - 日志前缀
 * @returns {Promise<void>}
 */
async function resetSSEMessages(page, options = {}) {
  const { log = false, logPrefix = '[SSE_Interceptor]' } = options;
  
  if (log) console.log(`${logPrefix} 重置 SSE 消息数组...`);
  
  await page.addInitScript(() => {
    console.log('重置 SSE 消息数组...');
    window.__sse_messages = [];
  });
  
  if (log) console.log(`${logPrefix} SSE 消息数组已重置`);
}

/**
 * 获取收集到的 SSE 消息
 * @param {import('playwright').Page} page - Playwright 页面对象
 * @param {object} options - 配置选项
 * @param {boolean} [options.log=false] - 是否输出日志
 * @param {string} [options.logPrefix='[SSE_Interceptor]'] - 日志前缀
 * @returns {Promise<string[]>} 收集到的 SSE 消息数组
 */
async function getSSEMessages(page, options = {}) {
  const { log = false, logPrefix = '[SSE_Interceptor]' } = options;
  
  if (log) console.log(`${logPrefix} 获取 SSE 消息...`);
  
  const messages = await page.evaluate(() => window.__sse_messages || []);
  
  if (log) console.log(`${logPrefix} 收集到 ${messages.length} 条 SSE 消息`);
  
  return messages;
}

/**
 * 从 SSE 消息中提取内容
 * @param {string[]} messages - SSE 消息数组
 * @param {object} options - 配置选项
 * @param {boolean} [options.log=false] - 是否输出日志
 * @param {string} [options.logPrefix='[SSE_Interceptor]'] - 日志前缀
 * @returns {string} 提取出的内容
 */
function extractContentFromSSE(messages, options = {}) {
  const { log = false, logPrefix = '[SSE_Interceptor]' } = options;
  
  if (log) console.log(`${logPrefix} 从 SSE 消息中提取内容...`);
  
  let content = '';
  let totalLines = 0;
  let validLines = 0;
  let errorLines = 0;
  
  for (const message of messages) {
    const lines = message.split('\n');
    for (const line of lines) {
      totalLines++;
      if (line.startsWith('data:')) {
        try {
          const jsonStr = line.substring(5).trim();
          if (!jsonStr || jsonStr === '{}') continue;
          
          const data = JSON.parse(jsonStr);
          if (data.choices && data.choices[0] && data.choices[0].delta && data.choices[0].delta.content) {
            content += data.choices[0].delta.content;
            validLines++;
          }
        } catch (e) {
          // 忽略解析错误
          errorLines++;
          if (log && errorLines < 5) { // 只记录前几个错误，避免日志过多
            console.warn(`${logPrefix} 解析 JSON 时出错: ${e.message}`);
            console.warn(`${logPrefix} 问题数据: ${line.substring(0, 100)}...`);
          }
        }
      }
    }
  }
  
  if (log) {
    console.log(`${logPrefix} 处理统计: 总行数=${totalLines}, 有效内容行=${validLines}, 解析错误=${errorLines}`);
    console.log(`${logPrefix} 成功提取内容，长度: ${content.length}`);
    if (content.length > 0) {
      console.log(`${logPrefix} 内容预览: ${content.substring(0, 100)}...`);
    }
  }
  
  return content;
}

module.exports = {
  injectSSEInterceptor,
  resetSSEMessages,
  getSSEMessages,
  extractContentFromSSE
};
