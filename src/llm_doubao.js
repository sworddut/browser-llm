const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js'); // 确保 utils.js 包含 waitForSSECompletion 和 ensureButtonIsActive


// --- 定义特定于豆包 API 的完成检查器 ---
const doubaoCompletionChecker = (eventDataWrapper, eventData) => {
  if (!eventDataWrapper) {
    return false;
  }

  // 主要判断条件：(来自新日志 event_id: 459 和旧日志 event_id: 141)
  // 当 event_type 为 2001，并且内嵌的 message 对象表明 is_finish: true
  if (eventDataWrapper.event_type === 2001 &&
      eventData &&
      eventData.message &&
      eventData.message.is_finish === true) {
    return true;
  }

  // 补充判断条件 (来自新日志 event_id: 460 和旧日志 event_id: 145)
  // 当 event_type 为 2003，并且其 event_data 字段的值是字符串 "{}"
  if (eventDataWrapper.event_type === 2003 &&
      typeof eventDataWrapper.event_data === 'string' &&
      eventDataWrapper.event_data.trim() === "{}") {
    // console.log('[Checker] Doubao: Detected alternate/final completion (event_type 2003, event_data is "{}").');
    return true;
  }

  // 如果以上条件都不满足，则认为未完成
  return false;
};

// 豆包 LLM 自动化主流程
async function processQuestion(item) {
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}，给一个最后答案的总结，思考不用太久。`;
  const answerSelector = '[data-testid="message_text_content"]'; // 豆包的回答容器选择器
  const doubaoDir = path.join(__dirname, 'outputs','doubao'); 
  if (!fs.existsSync(doubaoDir)) {
    fs.mkdirSync(doubaoDir, { recursive: true });
  }
  const resultPath = path.join(doubaoDir, `doubao_output_${item.question_number}.json`);

  if (fs.existsSync(resultPath)) {
    console.log(`[INFO] 题号 ${item.question_number} 已有结果，跳过...`);
    return;
  }

  let retryCount = 0;
  const maxRetry = 2; // 总共尝试 maxRetry + 1 次

  while (retryCount <= maxRetry) {
    let browser; // 在循环内部声明
    let context;
    let page;
    let allMessages = [];
    let continueCount = 0; // 每次重试时重置 continueCount
    const maxContinue = 2; // 调整“继续”的最大次数

    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      browser = await chromium.launch({ headless: false }); //或者根据需要设置 headless true
      context = await browser.newContext({
        storageState: 'doubao-state.json',
        // userAgent: 'Mozilla/5.0 ...' // 可以考虑固定 User-Agent
      });
      page = await context.newPage();

      await page.goto('https://www.doubao.com/chat/', { waitUntil: 'domcontentloaded', timeout: 60000 });

      // *** INJECT TIME DISPLAY HERE ***
      await utils.injectTimeDisplay(page); // Call it after page load

      await page.waitForSelector('textarea[data-testid="chat_input_input"]', { timeout: 20000 });

      // 确保开启“深度思考”
      const deepThinkButtonSelector = 'button[title="深度思考"]';
      const activeButtonClassPrefix = 'active-'; // 使用前缀匹配，因为哈希会变
      const buttonHandled = await utils.ensureButtonIsActive(page, deepThinkButtonSelector, activeButtonClassPrefix, true);

      if (!buttonHandled) {
        console.warn(`[WARN] 题号 ${item.question_number}: "深度思考"按钮未能成功激活或未找到。将按默认模式继续。`);
        // 如果深度思考是必须的，可以抛出错误触发重试或中止
        // throw new Error(`Critical button "${deepThinkButtonSelector}" could not be set to active state.`);
      }

      await page.fill('textarea[data-testid="chat_input_input"]', prompt);
      await page.click('#flow-end-msg-send');
      console.log(`[INFO] 题号 ${item.question_number}: 初始问题已发送，等待回复...`);

      let sseResult = await utils.waitForSSECompletion(
        page,
        '/samantha/chat/completion',
        doubaoCompletionChecker,
        10 * 60 * 1000 // 10分钟超时
      );
      console.log(`[INFO] 题号 ${item.question_number}: 初始回复SSE处理完成 - completed: ${sseResult.completed}, errorOccurred: ${sseResult.errorOccurred}`);

      // 循环处理“继续”
      while (!sseResult.completed && !sseResult.errorOccurred && continueCount < maxContinue) {
        continueCount++;
        console.log(`[INFO] 题号 ${item.question_number}: 回复未完成，发送 "继续" (${continueCount}/${maxContinue})...`);
        
        // 重新获取显示的消息，因为之前的可能不完整
        allMessages = await page.evaluate((selector) => {
            return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
        }, answerSelector);
        // console.log(`[DEBUG] Messages before "继续" #${continueCount}:`, allMessages.length);

        await page.waitForSelector('textarea[data-testid="chat_input_input"]', { timeout: 15000 }); // 确保输入框可交互
        await page.fill('textarea[data-testid="chat_input_input"]', '继续');
        await page.click('#flow-end-msg-send');
        console.log(`[INFO] 题号 ${item.question_number}: "继续"已发送，等待回复...`);

        sseResult = await utils.waitForSSECompletion(
          page,
          '/samantha/chat/completion',
          doubaoCompletionChecker,
          3 * 60 * 1000 // “继续”的超时可以短一些
        );
        console.log(`[INFO] 题号 ${item.question_number}: "继续" #${continueCount} SSE处理完成 - completed: ${sseResult.completed}, errorOccurred: ${sseResult.errorOccurred}`);
      }

      if (sseResult.errorOccurred) {
        throw new Error(`SSE stream 错误或超时，题号 ${item.question_number}`);
      }
      if (!sseResult.completed) {
        console.warn(`[WARN] 题号 ${item.question_number}: 即使在 "继续" 操作后，回复仍未标记为完成。`);
      }

      allMessages = await page.evaluate((selector) => {
        return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
      }, answerSelector);

      if (allMessages.length === 0) {
        console.warn(`[WARN] 题号 ${item.question_number}: 未获取到任何回答内容。`);
         // throw new Error(`No messages retrieved for question ${item.question_number}`); // 可以选择抛出错误以重试
      }

      fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages, question_info: item }, null, 2), 'utf-8');

      const chatContainerSelector = '[data-testid="message-list"]';
      //scroll到底部
      await utils.scrollToElementBottom(page, chatContainerSelector);

      const screenshotPath = path.join(doubaoDir, `doubao_screenshot_${item.question_number}.png`); // 统一命名
      await page.screenshot({ path: screenshotPath, fullPage: true });

      console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}, 截图: ${screenshotPath}`);
      
      if (browser && browser.isConnected()) await browser.close();
      return; // 成功，退出函数

    } catch (err) {
      console.error(`[ERROR] 题号 ${item.question_number} (尝试 ${retryCount + 1}) 发生错误: ${err.message}`);
      retryCount++;
      if (page && !page.isClosed() && browser && browser.isConnected()) {
        try {
            const errorScreenshotPath = path.join(doubaoDir, `doubao_ERROR_${item.question_number}_attempt_${retryCount}.png`);
            await page.screenshot({ path: errorScreenshotPath, fullPage: true });
            console.log(`[INFO] 已保存错误截图: ${errorScreenshotPath}`);
        } catch (e) { console.error(`[ERROR] 保存错误截图失败: ${e.message}`); }
      }

      if (browser && browser.isConnected()) {
        await browser.close(); // 在每次重试前关闭浏览器，确保下一次是全新的开始
      }

      if (retryCount > maxRetry) {
        console.error(`[FATAL] 题号 ${item.question_number} 在 ${maxRetry + 1} 次尝试后彻底失败。`);
        // 如果有需要，可以在这里记录最终失败状态
        return; // 彻底失败
      }
      console.log(`[INFO] 题号 ${item.question_number}: 准备重试，等待片刻...`);
      await new Promise(resolve => setTimeout(resolve, 5000)); // 重试前等待5秒
      // continue; // while 循环会自动继续
    }
  } // end while
}

module.exports = {
  processQuestion
};