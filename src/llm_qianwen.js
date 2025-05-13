const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');

// 导入浏览器缓存配置
const cacheConfig = require('./browser_cache_config');

// 千问 LLM 自动化主流程
async function processQuestion(item, accountName, output) {
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}，给一个最后答案的总结，思考不用太久。`;
  // 使用自定义输出路径或默认路径
  const outputBasePath = output || path.join(__dirname, 'outputs');
  const qianwenDir = path.join(outputBasePath, 'qianwen');
  if (!fs.existsSync(qianwenDir)) {
    fs.mkdirSync(qianwenDir, { recursive: true });
  }
  console.log(`[INFO] 输出目录: ${qianwenDir}`);
  const resultPath = path.join(qianwenDir, `qianwen_output_${item.question_number}.json`);
  const screenshotPath = path.join(qianwenDir, `qianwen_screenshot_${item.question_number}.png`);

  if (fs.existsSync(resultPath)) {
    console.log(`[INFO] 题号 ${item.question_number} 已有结果，跳过...`);
    return; // 已有结果，直接返回
  }

  let retryCount = 0;
  const maxRetry = 2; // 总共尝试 maxRetry + 1 次
  let success = false; // 标记是否成功处理

  while (retryCount <= maxRetry && !success) {
    let browser; // 在循环内部声明
    let page;
    let allMessages = [];
    let continueCount = 0;
    const maxContinue = 2; // 最多发送两次"继续"
    const inputSelector = 'textarea.efm_ant-input';

    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      // 使用持久化缓存配置启动浏览器
      const cacheOptions = await cacheConfig.getPersistentCacheConfig(chromium, accountName);
      browser = await chromium.launch({ 
        headless: false,
        ...cacheOptions
      }); // 或者根据需要设置 headless: true
      
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
        await page.setViewportSize({ width: 1200, height: 860 }); // Set a consistent viewport
      }

      // 设置页面缓存策略
      await cacheConfig.setupPageCaching(page);
      
      // 使用优化的页面加载策略
      console.log(`[INFO] 正在打开千问页面...`);
      await cacheConfig.optimizedGoto(page, 'https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.16af7b08ALF9pt&tab=model#/efm/model_experience_center/text?modelId=qwq-32b', { timeout: 60000 });
      console.log(`[INFO] 千问页面已加载完成`);
      
      await utils.injectTimeDisplay(page);

      // 等待输入框可用
      await page.waitForSelector(inputSelector, { timeout: 20000 });
      
      // 注入脚本来监听 EventSource
      await page.addInitScript(() => {
        console.log('注入 EventSource 监听脚本...');
        window.__sse_messages = [];
        window.__sse_completed = false;
        
        // 保存原始的 EventSource
        if (!window.__originalEventSource) {
          window.__originalEventSource = window.EventSource;
        }
        
        // 重写 EventSource
        window.EventSource = function(url, options) {
          console.log('创建 EventSource:', url);
          const es = new window.__originalEventSource(url, options);
          
          es.addEventListener('open', function(e) {
            console.log('EventSource 已打开连接:', url);
          });
          
          es.addEventListener('message', function(e) {
            window.__sse_messages.push({
              timestamp: new Date().toISOString(),
              data: e.data
            });
            
            // 检查是否包含完成信号
            if (e.data.includes('"streamEnd":true') || e.data.includes('"streamEnd": true')) {
              window.__sse_completed = true;
              console.log('EventSource 检测到完成信号');
            }
          });
          
          es.addEventListener('error', function(e) {
            console.error('EventSource 错误');
          });
          
          return es;
        };
      });
      
      // 监听网络响应，查找 SSE 响应
      const responseListener = async response => {
        const url = response.url();
        if (url.includes('efm-ws.aliyuncs.com/sse')) {
          console.log(`[INFO 题号 ${item.question_number}] 捕获到 SSE 响应: ${url}`);
          try {
            const responseText = await response.text();
            
            // 保存响应内容到文件
            const debugDir = path.join(process.cwd(), 'debug');
            if (!fs.existsSync(debugDir)) {
              fs.mkdirSync(debugDir, { recursive: true });
            }
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = path.join(debugDir, `qianwen_sse_${item.question_number}_${timestamp}.json`);
            fs.writeFileSync(filename, responseText, 'utf8');
            console.log(`[INFO 题号 ${item.question_number}] SSE 响应内容已保存到文件: ${filename}`);
            
            // 直接从响应中提取回答
            try {
              // 尝试解析响应行
              const lines = responseText.split('\n').filter(line => line.trim());
              if (lines.length > 0) {
                // 获取最后一行（完整回答）
                const lastLine = lines[lines.length - 1];
                if (lastLine.startsWith('data:')) {
                  const jsonStr = lastLine.substring(5); // 移除 'data:' 前缀
                  const data = JSON.parse(jsonStr);
                  if (data.data && data.data[0] && data.data[0].type === "JSON_TEXT" && data.data[0].value) {
                    const jsonValue = JSON.parse(data.data[0].value);
                    if (jsonValue.data && jsonValue.data.responseCard && jsonValue.data.responseCard.sentenceList) {
                      const content = jsonValue.data.responseCard.sentenceList[0].content;
                      allMessages = [content]; // 直接设置为最终回答
                      console.log(`[INFO 题号 ${item.question_number}] 成功提取最终回答`);
                      
                      // 移除响应监听器
                      page.removeListener('response', responseListener);
                      
                      // 直接保存结果
                      fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages,question_info: item}, null, 2), 'utf-8');
                      console.log(`[INFO 题号 ${item.question_number}] 结果已保存到: ${resultPath}`);
                      
                      // 等待内容显示在页面上
                      await page.waitForTimeout(2000);
                      
                      // 滚动到底部并截图
                      const chatContainerSelector = '[class^="scrollWrapper--"]';
                      await utils.scrollToElementBottom(page, chatContainerSelector);
                      await page.screenshot({ path: screenshotPath, fullPage: true });
                      console.log(`[INFO 题号 ${item.question_number}] 截图已保存到: ${screenshotPath}`);
                      
                      console.log(`✅ 题号 ${item.question_number}: 已成功处理。`);
                      
                      if (browser && browser.isConnected()) await browser.close();
                      success = true; // 标记成功处理
                      return; // 成功，退出函数
                    }
                  }
                }
              }
            } catch (parseErr) {
              console.error(`[ERROR 题号 ${item.question_number}] 解析响应内容时出错:`, parseErr.message);
            }
          } catch (err) {
            console.error(`[INFO 题号 ${item.question_number}] 读取响应内容时出错:`, err.message);
          }
        }
      };
      page.on('response', responseListener);
      
      await page.fill(inputSelector, prompt);
      await page.focus(inputSelector);
      await page.waitForTimeout(2000); // 等待聚焦生效
      await page.keyboard.press('Enter');
      console.log(`[INFO] 题号 ${item.question_number}: 初始问题已发送，等待回复...`);

      // 等待一定时间，确保有足够时间捕获响应
      try {
        console.log(`[INFO] 题号 ${item.question_number}: 等待响应...`);
        await page.waitForTimeout(30000); // 等待 30 秒
        
        // 移除响应监听器
        page.removeListener('response', responseListener);
        console.log(`[INFO] 题号 ${item.question_number}: 初始回复处理完成`);
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: 等待响应时出错: ${e.message}`);
      }

      // 如果没有成功提取到回答，尝试发送"继续"
      if (allMessages.length === 0 && continueCount < maxContinue) {
        continueCount++;
        console.log(`[INFO] 题号 ${item.question_number}: 尝试发送 "继续" (${continueCount}/${maxContinue})...`);
        
        try {
          await page.waitForSelector(inputSelector, { timeout: 15000 });
          
          // 监听网络响应，查找 SSE 响应
          const continueResponseListener = async response => {
            const url = response.url();
            if (url.includes('efm-ws.aliyuncs.com/sse')) {
              console.log(`[INFO 题号 ${item.question_number} 继续${continueCount}] 捕获到 SSE 响应: ${url}`);
              try {
                const responseText = await response.text();
                
                // 保存响应内容到文件
                const debugDir = path.join(process.cwd(), 'debug');
                if (!fs.existsSync(debugDir)) {
                  fs.mkdirSync(debugDir, { recursive: true });
                }
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const filename = path.join(debugDir, `qianwen_sse_${item.question_number}_continue${continueCount}_${timestamp}.json`);
                fs.writeFileSync(filename, responseText, 'utf8');
                console.log(`[INFO 题号 ${item.question_number} 继续${continueCount}] SSE 响应内容已保存到文件: ${filename}`);
                
                // 直接从响应中提取回答
                try {
                  // 尝试解析响应行
                  const lines = responseText.split('\n').filter(line => line.trim());
                  if (lines.length > 0) {
                    // 获取最后一行（完整回答）
                    const lastLine = lines[lines.length - 1];
                    if (lastLine.startsWith('data:')) {
                      const jsonStr = lastLine.substring(5); // 移除 'data:' 前缀
                      const data = JSON.parse(jsonStr);
                      if (data.data && data.data[0] && data.data[0].type === "JSON_TEXT" && data.data[0].value) {
                        const jsonValue = JSON.parse(data.data[0].value);
                        if (jsonValue.data && jsonValue.data.responseCard && jsonValue.data.responseCard.sentenceList) {
                          const content = jsonValue.data.responseCard.sentenceList[0].content;
                          allMessages = [content]; // 直接设置为最终回答
                          console.log(`[INFO 题号 ${item.question_number} 继续${continueCount}] 成功提取最终回答`);
                          
                          // 移除响应监听器
                          page.removeListener('response', continueResponseListener);
                          
                          // 直接保存结果
                          fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages,question_info: item}, null, 2), 'utf-8');
                          console.log(`[INFO 题号 ${item.question_number}] 结果已保存到: ${resultPath}`);
                          
                          // 等待内容显示在页面上
                          await page.waitForTimeout(2000);
                          
                          // 滚动到底部并截图
                          const chatContainerSelector = '[class*="custom-scroll-to-bottom_"] > div[class^="react-scroll-to-bottom"]';
                          await utils.scrollToElementBottom(page, chatContainerSelector);
                          await page.screenshot({ path: screenshotPath, fullPage: true });
                          console.log(`[INFO 题号 ${item.question_number}] 截图已保存到: ${screenshotPath}`);
                          
                          console.log(`✅ 题号 ${item.question_number}: 已成功处理。`);
                          
                          if (browser && browser.isConnected()) await browser.close();
                          success = true; // 标记成功处理
                          return; // 成功，退出函数
                        }
                      }
                    }
                  }
                } catch (parseErr) {
                  console.error(`[ERROR 题号 ${item.question_number} 继续${continueCount}] 解析响应内容时出错:`, parseErr.message);
                }
              } catch (err) {
                console.error(`[INFO 题号 ${item.question_number} 继续${continueCount}] 读取响应内容时出错:`, err.message);
              }
            }
          };
          page.on('response', continueResponseListener);
          
          // 发送继续指令
          await page.fill(inputSelector, '继续');
          await page.focus(inputSelector);
          await page.waitForTimeout(2000); // 等待聚焦生效
          await page.keyboard.press('Enter');
          console.log(`[INFO] 题号 ${item.question_number}: "继续"已发送，等待回复...`);
          
          // 等待一定时间，确保有足够时间捕获响应
          await page.waitForTimeout(30000); // 等待 30 秒
          
          // 移除响应监听器
          page.removeListener('response', continueResponseListener);
          console.log(`[INFO] 题号 ${item.question_number}: "继续" #${continueCount} 处理完成`);
          
        } catch (e) {
          console.warn(`[WARN] 题号 ${item.question_number}: "继续"处理时出错: ${e.message}`);
        }
      }
      
      // 如果仍然没有获取到回答，记录警告
      if (allMessages.length === 0) {
        console.warn(`[WARN] 题号 ${item.question_number}: 未获取到任何回答内容。`);
      }

      // 保存结果（即使为空）
      fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages,question_info: item}, null, 2), 'utf-8');

      // 滚动到底部并截图
      const chatContainerSelector = '[class^="scrollWrapper--"]';
      await utils.scrollToElementBottom(page, chatContainerSelector);

      await page.screenshot({ path: screenshotPath, fullPage: true });

      console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}, 截图: ${screenshotPath}`);
      
      if (browser && browser.isConnected()) await browser.close();
      success = true; // 标记成功处理
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
