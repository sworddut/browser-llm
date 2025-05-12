/**
 * 豆包 LLM 自动化脚本
 * 基于 Playwright 实现对豆包平台的自动化操作
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');
const sseInterceptor = require('./utils/sseInterceptor.js');

/**
 * 豆包 LLM 自动化主流程
 * @param {Object} item - 问题项，包含问题编号、条件和具体问题
 * @param {string} accountName - 账号名称，用于加载对应的cookie
 * @param {string} output - 输出目录路径
 * @returns {Promise<void>}
 */
async function processQuestion(item, accountName, output) {
  // 构建提示词
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}，给一个最后答案的总结，思考不用太久。`;
  const answerSelector = 'div[theme-mode][dir="ltr"].flow-markdown-body'; // 豆包的回答容器选择器
  
  // 使用自定义输出路径或默认路径
  const outputBasePath = output || path.join(__dirname, 'outputs');
  const doubaoDir = path.join(outputBasePath, 'doubao');
  if (!fs.existsSync(doubaoDir)) {
    fs.mkdirSync(doubaoDir, { recursive: true });
  }
  console.log(`[INFO] 输出目录: ${doubaoDir}`);
  
  // 设置结果文件路径
  const resultPath = path.join(doubaoDir, `doubao_output_${item.question_number}.json`);
  const screenshotPath = path.join(doubaoDir, `doubao_screenshot_${item.question_number}.png`);

  // 如果结果已存在，跳过处理
  if (fs.existsSync(resultPath)) {
    console.log(`[INFO] 题号 ${item.question_number} 已有结果，跳过...`);
    return;
  }

  // 重试机制
  let retryCount = 0;
  const maxRetry = 2; // 总共尝试 maxRetry + 1 次

  while (retryCount <= maxRetry) {
    let browser = null;
    let context = null;
    let page = null;
    let allMessages = [];

    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      
      // 启动浏览器
      browser = await chromium.launch({ headless: false }); // 根据需要设置 headless
      
      // 构建cookie文件路径
      const cookiePath = path.join('cookies', accountName, 'doubao-state.json');
      
      // 检查cookie文件是否存在
      if (!fs.existsSync(cookiePath)) {
        console.warn(`[WARN] Cookie文件不存在: ${cookiePath}，尝试使用默认路径`);
        context = await browser.newContext(); // 无Cookie继续尝试
      } else {
        console.log(`[INFO] 使用Cookie文件: ${cookiePath}`);
        context = await browser.newContext({
          storageState: cookiePath
        });
      }
      
      // 创建页面
      page = await context.newPage();
      await page.setViewportSize({ width: 1280, height: 860 }); // 设置一致的视口大小
      
      // 注入 SSE 拦截脚本
      await sseInterceptor.injectSSEInterceptor(page, 'PullExperienceMessage', { 
        log: true, 
        logPrefix: `[INFO 题号 ${item.question_number}] ` 
      });
      
      // 导航到豆包页面
      await page.goto('https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat', { 
        waitUntil: 'domcontentloaded', 
        timeout: 60000 
      });
      
      // 注入时间显示
      await utils.injectTimeDisplay(page);
      
      // 等待页面加载完成
      await page.waitForSelector('body', { timeout: 30000 });
      
      // 输入问题并发送
      const inputSelector = 'textarea.arco-textarea';
      await page.waitForSelector(inputSelector, { timeout: 20000 });
      
      await page.focus(inputSelector);
      await page.waitForTimeout(1000); // 等待聚焦生效
      await page.fill(inputSelector, prompt);
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');
      
      console.log(`[INFO] 题号 ${item.question_number}: 初始问题已发送，等待回复...`);
      
      // 等待 SSE 完成
      try {
        await utils.waitForSSECompletion_SimpleText(
          page,
          'https://ml-platform-api.console.volcengine.com/ark/bff/api/cn-beijing/2024/PullExperienceMessage',
          '[DONE]',
          10 * 60 * 1000, // 10分钟超时
          { log: true, logPrefix: `[INFO 题号 ${item.question_number}] ` }
        );
        console.log(`[INFO] 题号 ${item.question_number}: SSE处理完成 - 成功`);
        
        // 等待一下确保所有数据都被收集
        await page.waitForTimeout(2000);
        
        // 从浏览器中提取所有收集到的 SSE 消息
        const sseMessages = await sseInterceptor.getSSEMessages(page, { 
          log: true,
          logPrefix: `[INFO 题号 ${item.question_number}] ` 
        });
        console.log(`[INFO] 题号 ${item.question_number}: 收集到 ${sseMessages.length} 条 SSE 消息`);
        
        // 提取所有内容字段
        const content = sseInterceptor.extractContentFromSSE(sseMessages, { 
          log: true,
          logPrefix: `[INFO 题号 ${item.question_number}] ` 
        });
        
        if (content) {
          console.log(`[INFO] 题号 ${item.question_number}: 成功提取内容，长度: ${content.length}`);
          allMessages = [content];
        } else {
          // 如果无法从 SSE 提取，尝试从 DOM 获取
          console.log(`[INFO] 题号 ${item.question_number}: 从 SSE 提取内容失败，尝试从 DOM 获取`);
          allMessages = await page.evaluate((selector) => {
            return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
          }, answerSelector);
        }
      } catch (error) {
        console.warn(`[WARN] 题号 ${item.question_number}: SSE处理出错: ${error.message}`);
        
        // 尝试从 DOM 获取内容
        allMessages = await page.evaluate((selector) => {
          return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
        }, answerSelector);
      }
      
      // 处理"继续"功能
      let continueTried = false;
      let continueCount = 0;
      const maxContinue = 2; // 最多尝试继续的次数
      
      // 如果有"继续"按钮且内容不足，尝试点击"继续"
      while (continueCount < maxContinue) {
        // 检查是否有"继续"按钮
        const hasContinueButton = await page.evaluate(() => {
          const button = document.querySelector('#flow-end-msg-send');
          return button && button.innerText.includes('继续') && button.offsetParent !== null;
        });
        
        if (!hasContinueButton) {
          console.log(`[INFO] 题号 ${item.question_number}: 没有找到"继续"按钮或按钮不可见，不再尝试继续`);
          break;
        }
        
        continueCount++;
        continueTried = true;
        console.log(`[INFO] 题号 ${item.question_number}: 尝试点击"继续"按钮 (${continueCount}/${maxContinue})`);
        
        // 重置 SSE 消息数组
        await sseInterceptor.resetSSEMessages(page, { 
          log: true,
          logPrefix: `[INFO 题号 ${item.question_number} 继续${continueCount}] ` 
        });
        
        // 点击"继续"按钮
        await page.click('#flow-end-msg-send');
        console.log(`[INFO] 题号 ${item.question_number}: "继续"已发送，等待回复...`);
        
        // 等待 SSE 完成
        try {
          await utils.waitForSSECompletion_SimpleText(
            page,
            'https://ml-platform-api.console.volcengine.com/ark/bff/api/cn-beijing/2024/PullExperienceMessage',
            '[DONE]',
            3 * 60 * 1000, // 3分钟超时
            { log: true, logPrefix: `[INFO 题号 ${item.question_number} 继续${continueCount}] ` }
          );
          console.log(`[INFO] 题号 ${item.question_number}: "继续" #${continueCount} SSE处理完成 - 成功`);
          
          // 等待一下确保所有数据都被收集
          await page.waitForTimeout(2000);
          
          // 从浏览器中提取所有收集到的 SSE 消息
          const sseMessages = await sseInterceptor.getSSEMessages(page, { 
            log: true,
            logPrefix: `[INFO 题号 ${item.question_number} 继续${continueCount}] ` 
          });
          console.log(`[INFO] 题号 ${item.question_number} 继续${continueCount}: 收集到 ${sseMessages.length} 条 SSE 消息`);
          
          // 提取所有内容字段
          const content = sseInterceptor.extractContentFromSSE(sseMessages, { 
            log: true,
            logPrefix: `[INFO 题号 ${item.question_number} 继续${continueCount}] ` 
          });
          
          if (content) {
            console.log(`[INFO] 题号 ${item.question_number} 继续${continueCount}: 成功提取内容，长度: ${content.length}`);
            // 将新内容添加到现有内容中
            allMessages.push(content);
          } else {
            // 如果无法从 SSE 提取，尝试从 DOM 获取
            console.log(`[INFO] 题号 ${item.question_number} 继续${continueCount}: 从 SSE 提取内容失败，尝试从 DOM 获取`);
            const domMessages = await page.evaluate((selector) => {
              return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
            }, answerSelector);
            
            if (domMessages.length > 0) {
              allMessages = domMessages; // 使用 DOM 中的完整内容替换
            }
          }
        } catch (error) {
          console.warn(`[WARN] 题号 ${item.question_number}: "继续" #${continueCount} SSE处理出错: ${error.message}`);
          
          // 尝试从 DOM 获取内容
          const domMessages = await page.evaluate((selector) => {
            return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
          }, answerSelector);
          
          if (domMessages.length > 0) {
            allMessages = domMessages; // 使用 DOM 中的完整内容替换
          }
        }
      }
      
      if (continueTried && allMessages.length === 0) {
        console.warn(`[WARN] 题号 ${item.question_number}: 即使在 "继续" 操作后，回复仍未标记为完成。`);
      }
      
      // 最后一次尝试获取消息
      if (allMessages.length === 0) {
        allMessages = await page.evaluate((selector) => {
          return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
        }, answerSelector);
      }
      
      if (allMessages.length === 0) {
        console.warn(`[WARN] 题号 ${item.question_number}: 未获取到任何回答内容。`);
        // 可以选择抛出错误以触发重试
        throw new Error(`未获取到题号 ${item.question_number} 的回答内容`);
      }
      
      // 保存结果到文件
      fs.writeFileSync(resultPath, JSON.stringify({ 
        prompt, 
        messages: allMessages 
      }, null, 2), 'utf-8');
      
      // 滚动到底部并截图
      const chatContainerSelector = '[data-testid="message-list"]';
      await utils.scrollToElementBottom(page, chatContainerSelector);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      
      console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}, 截图: ${screenshotPath}`);
      
      // 关闭浏览器
      if (browser && browser.isConnected()) {
        await browser.close();
      }
      
      return; // 成功，退出函数
      
    } catch (err) {
      console.error(`[ERROR] 题号 ${item.question_number} (尝试 ${retryCount + 1}) 发生错误: ${err.message}`);
      retryCount++;
      
      // 保存错误截图
      if (page && !page.isClosed() && browser && browser.isConnected()) {
        try {
          const errorScreenshotPath = path.join(doubaoDir, `doubao_ERROR_${item.question_number}_attempt_${retryCount}.png`);
          await page.screenshot({ path: errorScreenshotPath, fullPage: true });
          console.log(`[INFO] 已保存错误截图: ${errorScreenshotPath}`);
        } catch (e) { 
          console.error(`[ERROR] 保存错误截图失败: ${e.message}`); 
        }
      }
      
      // 关闭浏览器
      if (browser && browser.isConnected()) {
        await browser.close(); // 在每次重试前关闭浏览器，确保下一次是全新的开始
      }
      
      if (retryCount > maxRetry) {
        console.error(`[FATAL] 题号 ${item.question_number} 在 ${maxRetry + 1} 次尝试后彻底失败。`);
        return; // 彻底失败
      }
      
      console.log(`[INFO] 题号 ${item.question_number}: 准备重试，等待片刻...`);
      await new Promise(resolve => setTimeout(resolve, 5000)); // 重试前等待5秒
    }
  } // end while
}

module.exports = {
  processQuestion
};
