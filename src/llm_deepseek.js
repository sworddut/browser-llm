const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 获取账号名称，默认为default
const accountName = process.env.ACCOUNT_NAME || 'default';
console.log(`[INFO] 使用账号: ${accountName}`);

// 从 utils/index.js 导入函数
const { waitForSSECompletion_SimpleText, scrollToElementBottom,injectTimeDisplay } = require('./utils/index');

// DeepSeek/元宝自动化主流程
async function processQuestion(item) {
  const originalPromptForSaving = item.prompt || item.specific_questions;
  const questionNumber = item.question_number;
  const logPrefix = `[deepseek Q${questionNumber}] `;

  const constructedPrompt = `${logPrefix}问题编号：${questionNumber}\n条件：${item.condition}\n\n问题：${item.specific_questions}\n\n请根据以下要求作答：\n1. 给出你的答题过程，可适当简略，但保留关键步骤，保证逻辑完整。\n2. 将最终答案单独列出，格式清晰。\n3. 请不要思考太长时间\n请在全部问题回答完毕后输出：“回答完毕”\n示例输出结构如下：\n答题过程：\n（在这里说明推理过程和关键步骤）\n最终答案：\n（清晰列出结果）\n回答完毕`;
  const answerSelector = '.hyc-component-reasoner__text';
  const scrollContainerSelector = '.agent-chat__list__content-wrapper';
  const inputSelector = '.ql-editor[contenteditable="true"]';

  const sseUrlPattern = 'https://yuanbao.tencent.com/api/chat/';
  const sseDoneSignal = '[DONE]';
  const sseTimeoutMs = 15 * 60 * 1000; //设置单次最大输出时间

  const yuanbaoDir = path.join(__dirname, 'outputs', 'deepseek');
  if (!fs.existsSync(yuanbaoDir)) {
    fs.mkdirSync(yuanbaoDir, { recursive: true });
  }
  const resultPath = path.join(yuanbaoDir, `deepseek_output_${questionNumber}.json`);
  const screenshotPath = path.join(yuanbaoDir, `deepseek_output_${questionNumber}.png`);

  if (fs.existsSync(resultPath)) {
    console.log(`${logPrefix}已有结果，跳过...`);
    return;
  }

  let retryCount = 0;
  const maxRetry = 2;
  let allMessages = [];
  let browser; 

  try {
    browser = await chromium.launch({ headless: false }); // Consider headless: true for production
    
    while (retryCount <= maxRetry) {
      console.log(`${logPrefix}开始处理，尝试 #${retryCount + 1}/${maxRetry + 1}`);
      allMessages = [];
      let currentContinueCount = 0;
      const maxContinuePerAttempt = 3;
      let context; 
      let page;    

      try {
        // 构建cookie文件路径
        const cookiePath = path.join('cookies', accountName, 'deepseek-state.json');
        
        // 检查cookie文件是否存在
        if (!fs.existsSync(cookiePath)) {
          console.warn(`[WARN] Cookie文件不存在: ${cookiePath}，尝试使用默认路径`);
          console.error(`[ERROR] 无法找到有效的Cookie文件`);
          context = await browser.newContext(); // 无Cookie继续尝试
        } else {
          console.log(`[INFO] 使用Cookie文件: ${cookiePath}`);
          context = await browser.newContext({
            storageState: cookiePath
          });
        }
        page = await context.newPage();
        await page.setViewportSize({ width: 1280, height: 900 }); // Set a consistent viewport

        await page.goto('https://yuanbao.tencent.com', { waitUntil: 'domcontentloaded', timeout: 60000 });

        // *** INJECT TIME DISPLAY HERE ***
        await injectTimeDisplay(page); // Call it after page load

        try {
          const adCloseButton = page.locator('[class^="index_close_"]');
          await adCloseButton.waitFor({ state: 'visible', timeout: 10000 });
          await adCloseButton.click({ timeout: 3000 });
          console.log(`${logPrefix}已关闭广告弹窗`);
        } catch (e) {
          console.log(`${logPrefix}未检测到广告弹窗或关闭超时，或弹窗不存在。`);
        }

        await page.waitForSelector(inputSelector, { state: 'visible', timeout: 30000 });
        console.log(`${logPrefix}输入框可见`);

        async function sendTextAndWaitForCompletion(textToSend, isContinuation = false) {
          const inputElement = page.locator(inputSelector);
          await inputElement.waitFor({ state: 'visible', timeout: 15000 });
          
          // Clear and type
          await inputElement.fill(''); 
          // For complex inputs, sometimes programmatic paste is more reliable if direct fill/type has issues
          // await page.evaluate(({ selector, text }) => {
          //   const el = document.querySelector(selector);
          //   if (el) el.innerHTML = text.split('\n').map(line => `<p>${line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`).join('');
          // }, { selector: inputSelector, text: textToSend });
          // await inputElement.pressSequentially(textToSend, { delay: 30 }); // Slower typing
          await inputElement.fill(textToSend); // Simpler fill, often works if text doesn't need HTML formatting.

          await inputElement.focus();

          const ssePromise = waitForSSECompletion_SimpleText(page, sseUrlPattern, sseDoneSignal, sseTimeoutMs, { log: true, logPrefix });

          await page.keyboard.press('Enter');
          console.log(`${logPrefix}"${isContinuation ? '继续' : 'Prompt'}" 已发送, 等待 SSE [DONE]...`);
          
          await ssePromise; 
          console.log(`${logPrefix}SSE [DONE] 已收到 for "${isContinuation ? '继续' : 'Prompt'}".`);
          
          await page.waitForTimeout(700); // Increased delay after SSE for rendering

          await scrollToElementBottom(page, scrollContainerSelector, 700, { log: true, logPrefix });

          const currentMessagesOnPage = await page.locator(answerSelector).allInnerTexts();
          
          if (currentMessagesOnPage.length > 0) {
              allMessages = currentMessagesOnPage.map(msg => msg.trim());
          } else if (!isContinuation) {
              console.warn(`${logPrefix}Initial prompt did not yield any messages with selector "${answerSelector}"`);
          }
        }

        await sendTextAndWaitForCompletion(constructedPrompt);

        const stopContinuingKeywords = ["总结完毕", "回答完毕", "没有更多内容", "已经全部", "上述总结", "希望以上回复对您有所帮助"];
        let lastMessageText = allMessages.length > 0 ? allMessages[allMessages.length - 1].toLowerCase() : "";
        
        // Initial check if the first response itself contains stop keywords
        if (stopContinuingKeywords.some(keyword => lastMessageText.includes(keyword))) {
             console.log(`${logPrefix}初始回答已包含停止关键词，不发送“继续”。`);
        } else {
            while (
                currentContinueCount < maxContinuePerAttempt &&
                allMessages.length > 0 && 
                !stopContinuingKeywords.some(keyword => lastMessageText.includes(keyword))
            ) {
            
                await page.waitForTimeout(2000 + Math.random() * 1500); 

                currentContinueCount++;
                console.log(`${logPrefix}尝试发送 "继续" (${currentContinueCount}/${maxContinuePerAttempt})...`);
                await sendTextAndWaitForCompletion("继续", true);
                if (allMessages.length > 0) {
                    lastMessageText = allMessages[allMessages.length - 1].toLowerCase();
                } else {
                    console.warn(`${logPrefix}"继续" 后未获取到消息。停止“继续”。`);
                    break; 
                }

                if (stopContinuingKeywords.some(keyword => lastMessageText.includes(keyword))) {
                    console.log(`${logPrefix}检测到停止关键词，停止“继续”。`);
                    break;
                }
            }
        }

        if (allMessages.length === 0) {
            console.warn(`${logPrefix}最终未获取到任何消息。将保存空消息数组。`);
        }

        console.log(`${logPrefix}内容获取完毕，准备保存结果...`);
        fs.writeFileSync(resultPath, JSON.stringify({ prompt: originalPromptForSaving, messages: allMessages }, null, 2), 'utf-8');
        console.log(`${logPrefix}结果已保存至 ${resultPath}`);

        await scrollToElementBottom(page, scrollContainerSelector, 500, { log: true, logPrefix });
        
        // const scrollLocator = page.locator(scrollContainerSelector);
        // const boundingBox = await scrollLocator.boundingBox();
        //截完整的图
        await page.screenshot({ path: screenshotPath, fullPage: true, timeout: 15000 });
        console.log(`${logPrefix}截图已保存至 ${screenshotPath}`);

        // Attempt successful, 不关闭 context，不关闭 browser，直接 goto 主页等待下一个问题
        console.log(`${logPrefix}尝试 #${retryCount + 1}成功，准备重新载入主页。`);
        await page.goto('https://yuanbao.tencent.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
        break; // Exit the while loop for retries

      } catch (err) { // Catch for single attempt
        console.error(`${logPrefix}在尝试 #${retryCount + 1} 时发生错误: ${err.message}`);
        if (err.stack) console.error(err.stack.split('\n').slice(0, 5).join('\n')); // Shorter stack

        // Screenshot on error for this attempt
        if (page && !page.isClosed()) {
            const errorScreenshotPath = path.join(yuanbaoDir, `deepseek_error_${questionNumber}_attempt_${retryCount + 1}.png`);
            try {
                await page.screenshot({ path: errorScreenshotPath, fullPage: true, timeout: 10000 });
                console.log(`${logPrefix}错误截图已保存: ${errorScreenshotPath}`);
            } catch (scError) {
                console.error(`${logPrefix}保存错误截图失败: ${scError.message}`);
            }
        }
        
        retryCount++;
        // 不关闭 context，保留 browser 和 context 以便下次复用
        if (retryCount > maxRetry) {
          console.error(`${logPrefix}达到最大重试次数 (${maxRetry + 1}) 后仍失败.`);
          fs.writeFileSync(resultPath, JSON.stringify({
            prompt: originalPromptForSaving,
            error: `Failed after ${maxRetry + 1} attempts. Last error: ${err.message}`,
            messages: allMessages // Save whatever messages were collected in the last failed attempt
          }, null, 2), 'utf-8');
          // No need to break here, loop condition will handle it
        } else {
           console.log(`${logPrefix}准备重试... 等待几秒钟...`);
           await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5s before retrying
        }
      }
    } // End of while (retryCount <= maxRetry)

  } catch (browserError) { // Catch for browser launch or other top-level errors
    console.error(`${logPrefix}发生严重的浏览器级别错误: ${browserError.message}`);
    if (browserError.stack) console.error(browserError.stack);
    // Ensure result file indicates a catastrophic failure if it hasn't been written to yet
    if (!fs.existsSync(resultPath)) {
        fs.writeFileSync(resultPath, JSON.stringify({
            prompt: originalPromptForSaving,
            error: `Catastrophic browser error: ${browserError.message}`,
            messages: []
        }, null, 2), 'utf-8');
    }
  } finally {
    if (browser && browser.isConnected()) {
      await browser.close();
      console.log(`${logPrefix}浏览器已关闭。`);
    }
  }
}

module.exports = {
  processQuestion
};