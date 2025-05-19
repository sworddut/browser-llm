/**
 * 豆包 LLM 自动化脚本
 * 基于 Playwright 实现对豆包平台的自动化操作
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');
const sseInterceptor = require('./utils/sseInterceptor.js');

// 导入浏览器缓存配置
const cacheConfig = require('./browser_cache_config');

// 全局浏览器实例缓存
// 格式: { accountName: { browser, context } }
const browserCache = new Map();

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
    let needToCloseBrowser = false; // 标记是否需要关闭浏览器

    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      
      // 检查是否有缓存的浏览器实例
      let cachedSession = browserCache.get(accountName);
      
      if (cachedSession && cachedSession.browser && cachedSession.browser.isConnected()) {
        console.log(`[INFO] 使用缓存的浏览器实例处理题号 ${item.question_number}`);
        browser = cachedSession.browser;
        context = cachedSession.context;
      } else {
        // 无缓存或缓存失效，创建新浏览器
        console.log(`[INFO] 创建新浏览器实例处理题号 ${item.question_number}`);
        needToCloseBrowser = true; // 标记需要关闭浏览器
        
        // 启动浏览器，使用持久化缓存配置
        const cacheOptions = await cacheConfig.getPersistentCacheConfig(chromium, accountName);
        browser = await chromium.launch({ 
          headless: false,
          ...cacheOptions
        }); // 根据需要设置 headless
        
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
        
        // 将新创建的浏览器实例添加到缓存
        browserCache.set(accountName, { browser, context });
        needToCloseBrowser = false; // 已缓存，不需要关闭
        
        // 更新缓存会话引用
        cachedSession = browserCache.get(accountName);
      }
      if (cachedSession && cachedSession.page && !cachedSession.page.isClosed()) {
        // 直接使用缓存的页面
        console.log(`[INFO] 使用缓存的页面实例处理题号 ${item.question_number}`);
        page = cachedSession.page;
        
        // 清理上一题的内容，准备发送新题目
        try {
          // 点击新建对话按钮，或者直接清空输入框
          const newChatButton = await page.$('button.new-chat-button');
          if (newChatButton) {
            await newChatButton.click();
            console.log(`[INFO] 点击了新建对话按钮`);
            // 等待页面加载
            await page.waitForSelector('textarea[placeholder]', { timeout: 10000 });
          }
        } catch (e) {
          console.warn(`[WARN] 点击新建对话按钮失败: ${e.message}`);
        }
        
        // 重新注入 SSE 拦截脚本
        await sseInterceptor.injectSSEInterceptor(page, 'PullExperienceMessage', { 
          log: true, 
          logPrefix: `[INFO 题号 ${item.question_number}] ` 
        });
      } else {
        // 创建新页面
        console.log(`[INFO] 创建新页面实例处理题号 ${item.question_number}`);
        page = await context.newPage();
        await page.setViewportSize({ width: 1280, height: 860 }); // 设置一致的视口大小
        
        // 注入 SSE 拦截脚本
        await sseInterceptor.injectSSEInterceptor(page, 'PullExperienceMessage', { 
          log: true, 
          logPrefix: `[INFO 题号 ${item.question_number}] ` 
        });
        
        // 导航到豆包页面 - 使用更精确的等待策略
        console.log(`[INFO] 正在打开豆包页面...`);
        
        // 设置更精确的网络策略，允许缓存
        await page.route('**/*', route => {
          // 允许缓存静态资源
          const request = route.request();
          if (['image', 'stylesheet', 'script', 'font'].includes(request.resourceType())) {
            route.continue({
              headers: {
                ...request.headers(),
                'Cache-Control': 'max-age=3600',
              }
            });
          } else {
            route.continue();
          }
        });
        
        // 使用更精确的等待策略
        await page.goto('https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat', { 
          waitUntil: 'networkidle', // 等待网络基本空闲
          timeout: 2*60000 
        });
      }
      
      // 注入时间显示
      await utils.injectTimeDisplay(page);
      
      console.log(`[INFO] 豆包页面已加载完成`);
      
      // 尝试点击“清除上下文”按钮
      try {
        // 尝试点击清除上下文按钮
        const clearContextSelector = 'button.btn-ffa1c5, button:has-text("清除上下文"), button:has(svg.force-icon-clean)';
        const clearContextButton = await page.$(clearContextSelector);
        
        if (clearContextButton) {
          await clearContextButton.click();
          console.log(`[INFO] 题号 ${item.question_number}: 成功点击清除上下文按钮`);
          // 等待清除操作完成
          await page.waitForTimeout(1000);
        } else {
          console.warn(`[WARN] 题号 ${item.question_number}: 未找到清除上下文按钮，继续处理`);
        }
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: 点击清除上下文按钮失败: ${e.message}，继续处理`);
      }
      
      // 输入问题并发送
      const inputSelector = 'textarea.arco-textarea';
      await page.waitForSelector(inputSelector, { timeout: 30000 });
      
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
              allMessages = domMessages.at(-1); // 使用 DOM 中的完整内容替换
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
        messages: allMessages ,
        question_info: item
      }, null, 2), 'utf-8');
      
      // 滚动到底部并截图
      const chatContainerSelector = '[data-testid="message-list"]';
      await utils.scrollToElementBottom(page, chatContainerSelector);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      
      console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}, 截图: ${screenshotPath}`);
      
      // 成功时保留浏览器和页面实例，直接在同一页面处理下一题
      // 注意：页面已经打开，下一题将直接重用这个页面
      // 将页面和上下文保存到缓存中
      if (page && !page.isClosed()) {
        // 将页面对象也添加到缓存中
        const cachedSession = browserCache.get(accountName);
        if (cachedSession) {
          cachedSession.page = page;
          console.log(`[INFO] 成功保存页面实例供下一题使用，无需重新加载`);
        }
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
      
      // 如果需要关闭浏览器或遇到严重错误，才关闭浏览器
      if ((needToCloseBrowser || retryCount >= maxRetry) && browser && browser.isConnected()) {
        console.log(`[INFO] 关闭浏览器实例，原因: ${needToCloseBrowser ? '非缓存实例' : '重试次数过多'}`);
        await browser.close();
        // 从缓存中移除
        browserCache.delete(accountName);
      } else {
        console.log(`[INFO] 保留浏览器实例供下一题使用`);
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
