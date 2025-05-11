const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');

// 获取账号名称，默认为default
const accountName = process.env.ACCOUNT_NAME || 'default';
console.log(`[INFO] 使用账号: ${accountName}`);

// 千问 LLM 自动化主流程
async function processQuestion(item) {
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}，给一个最后答案的总结，思考不用太久。`;
  const qianwenDir = path.join(__dirname, 'outputs', 'qianwen'); 
  if (!fs.existsSync(qianwenDir)) {
    fs.mkdirSync(qianwenDir, { recursive: true });
  }
  const resultPath = path.join(qianwenDir, `qianwen_output_${item.question_number}.json`);

  if (fs.existsSync(resultPath)) {
    console.log(`[INFO] 题号 ${item.question_number} 已有结果，跳过...`);
    return;
  }

  let retryCount = 0;
  const maxRetry = 2; // 总共尝试 maxRetry + 1 次

  while (retryCount <= maxRetry) {
    let browser; // 在循环内部声明
    let page;
    let allMessages = [];
    let continueCount = 0;
    const maxContinue = 2; // 最多发送两次"继续"

    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      browser = await chromium.launch({ headless: false }); // 或者根据需要设置 headless: true
      
      // 构建cookie文件路径
      const cookiePath = path.join('cookies', accountName, 'qianwen-state.json');
      
      // 检查cookie文件是否存在
      if (!fs.existsSync(cookiePath)) {
        console.warn(`[WARN] Cookie文件不存在: ${cookiePath}，尝试使用默认路径`);
        const context = await browser.newContext(); // 无Cookie继续尝试
        page = await context.newPage();        
      } else {
        console.log(`[INFO] 使用Cookie文件: ${cookiePath}`);
        const context = await browser.newContext({
          storageState: cookiePath
        });
        page = await context.newPage();
      }

      await page.goto('https://www.tongyi.com/qianwen/', { waitUntil: 'domcontentloaded', timeout: 60000 });
      await utils.injectTimeDisplay(page);

      // 等待输入框可用
      await page.waitForSelector('[class^="chatTextarea--"] textarea', { timeout: 20000 });
      
      // 确保开启"深度思考"
      try {
        const deepThinkButtonSelector = '[class^="tagBtn--"]';
        const buttonExists = await page.isVisible(deepThinkButtonSelector);
        
        if (buttonExists) {
          const result = await utils.ensureButtonIsActive(page, deepThinkButtonSelector, 'active', true);
          if (result) {
            console.log(`[INFO] 题号 ${item.question_number}: 深度思考按钮已成功处理`);
          }
        }
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: 深度思考按钮操作失败: ${e.message}`);
      }

      // 输入问题
      await page.fill('[class^="chatTextarea--"] textarea', prompt);
      await page.press('[class^="chatTextarea--"] textarea', 'Enter');
      console.log(`[INFO] 题号 ${item.question_number}: 初始问题已发送，等待回复...`);

      // 等待回复完成 - 使用简单版本的SSE监控
      try {
        await utils.waitForSSECompletion_SimpleText(
          page,
          new RegExp('api\\.tongyi\\.com.*conversation'),
          '[DONE]',
          5 * 60 * 1000, // 5分钟超时
          { log: true, logPrefix: `[INFO 题号 ${item.question_number}] ` }
        );
        console.log(`[INFO] 题号 ${item.question_number}: 初始回复处理完成`);
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: SSE监控超时或错误: ${e.message}`);
      }

      // 等待一段时间确保内容加载完成
      await page.waitForTimeout(2000);
      const answerSelector = '[class^="contentBox--"]>.tongyi-markdown';

      // 提取回答内容 - 专门使用.tongyi-markdown选择器
      allMessages = await page.evaluate((selector) => {
        return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
      }, answerSelector);

      console.log(`[INFO] 题号 ${item.question_number}: 找到 ${allMessages.length} 个markdown元素`);
      
      
      // 如果已经有markdown内容，直接保存结果，不发送"继续"
      if (allMessages.length > 0) {
        console.log(`[INFO] 题号 ${item.question_number}: 已获取到完整回答，无需发送"继续"`);
      } 
      // 只有在没有足够内容时才发送"继续"
      else {
        continueCount++;
        console.log(`[INFO] 题号 ${item.question_number}: 尝试发送 "继续" (${continueCount}/${maxContinue})...`);
        
        await page.waitForSelector('[class^="chatTextarea--"] textarea', { timeout: 15000 });
        await page.fill('[class^="chatTextarea--"] textarea', '继续');
        await page.press('[class^="chatTextarea--"] textarea', 'Enter');
        console.log(`[INFO] 题号 ${item.question_number}: "继续"已发送，等待回复...`);

        try {
          await utils.waitForSSECompletion_SimpleText(
            page,
            new RegExp('api\\.tongyi\\.com.*conversation'),
            '[DONE]',
            3 * 60 * 1000, // 3分钟超时
            { log: true, logPrefix: `[INFO 题号 ${item.question_number} 继续${continueCount}] ` }
          );
          console.log(`[INFO] 题号 ${item.question_number}: "继续" #${continueCount} 处理完成`);
          
          // 等待内容更新
          await page.waitForTimeout(2000);
          
          // 重新获取内容

          allMessages = await page.evaluate((selector) => {
            return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
          }, answerSelector);

        } catch (e) {
          console.warn(`[WARN] 题号 ${item.question_number}: "继续" SSE监控超时或错误: ${e.message}`);
        }
      }

      if (allMessages.length === 0) {
        console.warn(`[WARN] 题号 ${item.question_number}: 未获取到任何回答内容。`);
      }

      // 保存结果
      fs.writeFileSync(resultPath, JSON.stringify({ prompt, allMessages, question_info: item }, null, 2), 'utf-8');

      // 滚动到底部并截图
      const chatContainerSelector = '[class^="scrollWrapper--"]';
      await utils.scrollToElementBottom(page, chatContainerSelector);

      const screenshotPath = path.join(qianwenDir, `qianwen_screenshot_${item.question_number}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });

      console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}, 截图: ${screenshotPath}`);
      
      if (browser && browser.isConnected()) await browser.close();
      return; // 成功，退出函数

    } catch (err) {
      console.error(`[ERROR] 题号 ${item.question_number} (尝试 ${retryCount + 1}) 发生错误: ${err.message}`);
      retryCount++;
      if (page && !page.isClosed() && browser && browser.isConnected()) {
        try {
          const errorScreenshotPath = path.join(qianwenDir, `qianwen_ERROR_${item.question_number}_attempt_${retryCount}.png`);
          await page.screenshot({ path: errorScreenshotPath, fullPage: true });
          console.log(`[INFO] 已保存错误截图: ${errorScreenshotPath}`);
        } catch (e) { console.error(`[ERROR] 保存错误截图失败: ${e.message}`); }
      }

      if (browser && browser.isConnected()) {
        await browser.close();
      }

      if (retryCount > maxRetry) {
        console.error(`[FATAL] 题号 ${item.question_number} 在 ${maxRetry + 1} 次尝试后彻底失败。`);
        return; // 彻底失败
      }
      console.log(`[INFO] 题号 ${item.question_number}: 准备重试，等待片刻...`);
      await new Promise(resolve => setTimeout(resolve, 5000)); // 重试前等待5秒
    }
  }
}

module.exports = {
  processQuestion
};
