const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');

/**
 * 千问 LLM 自动化主流程
 * 重构版本，解决了多个问题：
 * 1. 统一了结果保存逻辑
 * 2. 改进了浏览器关闭时机
 * 3. 优化了错误处理和重试逻辑
 * 4. 修复了JSON解析问题
 * 5. 完善了页面状态检查
 */
async function processQuestion(item, accountName, output) {
  // 构建提示词
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}，给一个最后答案的总结，思考不用太久。`;
  
  // 准备输出目录和文件路径
  const outputBasePath = output || path.join(__dirname, 'outputs');
  const qianwenDir = path.join(outputBasePath, 'qianwen');
  if (!fs.existsSync(qianwenDir)) {
    fs.mkdirSync(qianwenDir, { recursive: true });
  }
  console.log(`[INFO] 输出目录: ${qianwenDir}`);
  
  const resultPath = path.join(qianwenDir, `qianwen_output_${item.question_number}.json`);
  const screenshotPath = path.join(qianwenDir, `qianwen_screenshot_${item.question_number}.png`);

  // 检查是否已有结果
  if (fs.existsSync(resultPath)) {
    console.log(`[INFO] 题号 ${item.question_number} 已有结果，跳过...`);
    return; // 已有结果，直接返回
  }

  // 重试相关变量
  let retryCount = 0;
  const maxRetry = 2; // 总共尝试 maxRetry + 1 次
  let extractedAnswer = null; // 提取到的回答内容
  
  // 重试循环
  while (retryCount <= maxRetry && !extractedAnswer) {
    let browser = null;
    let page = null;
    
    try {
      console.log(`[INFO] 开始处理题号 ${item.question_number}, 尝试次数: ${retryCount + 1}/${maxRetry + 1}`);
      
      // 启动浏览器
      browser = await chromium.launch({ headless: false });
      
      // 构建cookie文件路径并加载
      const cookiePath = path.join('cookies', accountName, 'qianwen-state.json');
      let context;
      
      if (!fs.existsSync(cookiePath)) {
        console.warn(`[WARN] Cookie文件不存在: ${cookiePath}，尝试使用默认路径`);
        context = await browser.newContext({
          // 预先授予剪贴板权限
          permissions: ['clipboard-read', 'clipboard-write']
        }); 
        page = await context.newPage();
      } else {
        console.log(`[INFO] 使用Cookie文件: ${cookiePath}`);
        context = await browser.newContext({
          storageState: cookiePath,
          // 预先授予剪贴板权限
          permissions: ['clipboard-read', 'clipboard-write']
        });
        page = await context.newPage();
        await page.setViewportSize({ width: 1200, height: 860 }); // Set a consistent viewport
      }
      
      // 监听权限请求并自动接受
      page.context().on('page', async newPage => {
        newPage.on('dialog', async dialog => {
          console.log(`[INFO] 题号 ${item.question_number}: 检测到对话框: ${dialog.message()}`);
          if (dialog.message().includes('剪贴板') || 
              dialog.message().includes('clipboard') || 
              dialog.message().includes('想要查看复制到剪贴板')) {
            console.log(`[INFO] 题号 ${item.question_number}: 自动接受剪贴板权限请求`);
            await dialog.accept();
          } else {
            console.log(`[INFO] 题号 ${item.question_number}: 自动关闭对话框`);
            await dialog.dismiss();
          }
        });
      });

      // 导航到千问页面
      await page.goto('https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.16af7b08ALF9pt&tab=model#/efm/model_experience_center/text?modelId=qwq-32b', { 
        waitUntil: 'domcontentloaded', 
        timeout: 60000 
      });
      
      // 注入时间显示
      await utils.injectTimeDisplay(page);

      // 等待输入框可用
      const inputSelector = 'textarea.efm_ant-input';
      await page.waitForSelector(inputSelector, { timeout: 20000 });
      
      // 注入SSE监听脚本
      await injectSSEMonitor(page);
      
      // 创建响应处理函数
      const responsePromise = new Promise((resolve, reject) => {
        // 超时处理
        const timeoutId = setTimeout(() => {
          reject(new Error('等待响应超时'));
        }, 10*60000); // 60秒超时
        
        // 响应监听器
        const responseListener = async response => {
          const url = response.url();
          if (!url.includes('efm-ws.aliyuncs.com/sse')) return;
          
          try {
            console.log(`[INFO 题号 ${item.question_number}] 捕获到 SSE 响应: ${url}`);
            
            // 优先尝试从网络响应获取
            let responseText = '';
            try {
              responseText = await response.text();
              console.log(`[INFO 题号 ${item.question_number}] 成功获取网络响应内容，长度: ${responseText.length}`);
              
              // 保存响应内容到文件（调试用）
              saveResponseToFile(responseText, item.question_number);
              
              // 尝试提取回答
              const answer = extractAnswerFromResponse(responseText, item.question_number);
              if (answer) {
                console.log(`[INFO 题号 ${item.question_number}] 从网络响应成功提取回答`);
                clearTimeout(timeoutId); // 清除超时
                resolve(answer);
                return;
              }
            } catch (networkErr) {
              console.warn(`[WARN 题号 ${item.question_number}] 从网络获取响应失败: ${networkErr.message}`);
              
              // 网络获取失败，尝试使用复制按钮
              console.log(`[INFO 题号 ${item.question_number}] 尝试使用复制按钮获取回答`);
              try {
                // 尝试定位复制按钮
                const copyButtonSelector = 'button[data-bailian-c1="模型体验-文本对话"][data-bailian-c3="内容复制按钮"]';
                let copyButton = null;
                try {
                  // 等待复制按钮出现，设置超时
                  await page.waitForSelector(copyButtonSelector, { timeout: 30000 });
                  copyButton = await page.$(copyButtonSelector);
                } catch (timeoutErr) {
                  console.warn(`[WARN 题号 ${item.question_number}] 等待复制按钮超时`);
                  // 超时处理，直接设置内容为"已超时"
                  console.log(`[INFO 题号 ${item.question_number}] 设置回答为"已超时"`);
                  
                  // 截图
                  await page.screenshot({ path: screenshotPath, fullPage: true });
                  console.log(`[INFO 题号 ${item.question_number}] 超时截图已保存到: ${screenshotPath}`);
                  
                  // 返回超时结果
                  clearTimeout(timeoutId); // 清除超时
                  resolve("已超时");
                  return;
                }
                
                if (copyButton) {
                  console.log(`[INFO 题号 ${item.question_number}] 找到复制按钮，尝试点击...`);
                  
                  // 清空剪贴板
                  await page.evaluate(() => navigator.clipboard.writeText(''));
                  
                  // 点击复制按钮
                  await copyButton.click();
                  
                  // 等待一下确保复制操作完成
                  await page.waitForTimeout(1000);
                  
                  // 获取剪贴板内容
                  const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
                  
                  if (clipboardContent && clipboardContent.trim()) {
                    console.log(`[INFO 题号 ${item.question_number}] 成功从剪贴板获取内容，长度: ${clipboardContent.length}`);
                    clearTimeout(timeoutId); // 清除超时
                    resolve(clipboardContent.trim());
                    return;
                  } else {
                    console.warn(`[WARN 题号 ${item.question_number}] 剪贴板内容为空。`);
                  }
                } else {
                  console.warn(`[WARN 题号 ${item.question_number}] 未找到复制按钮，尝试更简单的选择器...`);
                  
                  // 尝试使用更简单的选择器
                  const simpleCopyButtonSelector = 'button.efm_ant-btn i.bl-icon-copy-line';
                  const simpleCopyButton = await page.$(simpleCopyButtonSelector);
                  
                  if (simpleCopyButton) {
                    console.log(`[INFO 题号 ${item.question_number}] 找到复制图标，尝试点击...`);
                    
                    // 清空剪贴板
                    await page.evaluate(() => navigator.clipboard.writeText(''));
                    
                    // 点击复制图标的父元素（按钮）
                    await page.evaluate(() => {
                      const iconElement = document.querySelector('button.efm_ant-btn i.bl-icon-copy-line');
                      if (iconElement && iconElement.closest('button')) {
                        iconElement.closest('button').click();
                        return true;
                      }
                      return false;
                    });
                    
                    // 等待一下确保复制操作完成
                    await page.waitForTimeout(1000);
                    
                    // 获取剪贴板内容
                    const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
                    
                    if (clipboardContent && clipboardContent.trim()) {
                      console.log(`[INFO 题号 ${item.question_number}] 成功从剪贴板获取内容，长度: ${clipboardContent.length}`);
                      clearTimeout(timeoutId); // 清除超时
                      resolve(clipboardContent.trim());
                      return;
                    } else {
                      console.warn(`[WARN 题号 ${item.question_number}] 剪贴板内容为空。`);
                    }
                  } else {
                    console.warn(`[WARN 题号 ${item.question_number}] 也未找到复制图标。`);
                  }
                }
              } catch (clipboardErr) {
                console.error(`[ERROR 题号 ${item.question_number}] 使用复制按钮时出错: ${clipboardErr.message}`);
              }
              
              // 如果复制按钮方法失败，尝试从DOM中获取
              console.log(`[INFO 题号 ${item.question_number}] 尝试从DOM中获取回答`);
              try {
                // 等待预览区域出现
                await page.waitForSelector('#preview', { timeout: 30000 });
                
                // 从DOM中获取回答
                const domContent = await page.evaluate(() => {
                  const nodeList = document.querySelectorAll('#preview')
                  const previewElement = nodeList[nodeList.length - 1];
                  return previewElement ? previewElement.innerText : '';
                });
                
                // 尝试处理DOM中的内容
                const processedDomContent = processDomContent(domContent, item.question_number);
                
                if (domContent && domContent.trim().length > 0) {
                  console.log(`[INFO 题号 ${item.question_number}] 从DOM成功获取内容，长度: ${domContent.length}`);
                  
                  // 保存DOM内容到文件（调试用）
                  try {
                    saveResponseToFile(domContent, `${item.question_number}_dom`);
                  } catch (saveErr) {
                    console.warn(`[WARN 题号 ${item.question_number}] 保存DOM内容失败: ${saveErr.message}`);
                  }
                  
                  // 使用处理后的DOM内容作为回答
                  const finalAnswer = processedDomContent || domContent.trim();
                  console.log(`[INFO 题号 ${item.question_number}] 最终回答: ${finalAnswer.substring(0, 50)}...`);
                  clearTimeout(timeoutId); // 清除超时
                  resolve(finalAnswer);
                  return;
                } else {
                  console.warn(`[WARN 题号 ${item.question_number}] DOM内容为空`);
                }
              } catch (domErr) {
                console.error(`[ERROR 题号 ${item.question_number}] 从DOM获取内容失败: ${domErr.message}`);
              }
            }
          } catch (err) {
            console.error(`[ERROR 题号 ${item.question_number}] 处理响应时出错:`, err.message);
          }
        };
        
        // 添加响应监听器
        page.on('response', responseListener);
        
        // 返回清理函数
        return () => {
          clearTimeout(timeoutId);
          if (page && !page.isClosed()) {
            page.removeListener('response', responseListener);
          }
        };
      });
      
      // 发送问题
      await page.fill(inputSelector, prompt);
      await page.focus(inputSelector);
      await page.waitForTimeout(2000); // 等待聚焦生效
      await page.keyboard.press('Enter');
      console.log(`[INFO] 题号 ${item.question_number}: 问题已发送，等待回复...`);
      
      // 等待响应处理
      try {
        const cleanupListener = await Promise.race([
          responsePromise.then(answer => {
            extractedAnswer = answer;
            return () => {}; // 空清理函数
          }),
          new Promise(resolve => setTimeout(() => resolve(() => {}), 10*60000)) // 60秒后返回空清理函数
        ]);
        
        // 执行清理
        cleanupListener();
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: 等待响应时出错: ${e.message}`);
      }
      
      // 如果成功提取到回答
      if (extractedAnswer) {
        console.log(`[INFO] 题号 ${item.question_number}: 成功提取回答，准备保存结果`);
        
        // 尝试截图（如果页面仍然打开）
        if (page && !page.isClosed()) {
          try {
            // 等待内容显示在页面上
            await page.waitForTimeout(2000);
            
            // 滚动到底部并截图
            const chatContainerSelector = '[class^="scrollWrapper--"]';
            await utils.scrollToElementBottom(page, chatContainerSelector);
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`[INFO 题号 ${item.question_number}] 截图已保存到: ${screenshotPath}`);
          } catch (screenshotErr) {
            console.warn(`[WARN] 题号 ${item.question_number}: 保存截图时出错: ${screenshotErr.message}`);
          }
        }
        
        // 关闭浏览器
        await safeCloseBrowser(browser);
        
        // 保存结果
        saveResult(resultPath, prompt, extractedAnswer, item);
        console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}`);
        return; // 成功处理，退出函数
      }
      
      // 如果没有提取到回答
      console.warn(`[WARN] 题号 ${item.question_number}: 未能提取到回答，将重试`);
      
      // 关闭浏览器
      await safeCloseBrowser(browser);
      
    } catch (err) {
      console.error(`[ERROR] 题号 ${item.question_number} (尝试 ${retryCount + 1}) 发生错误: ${err.message}`);
      
      // 尝试保存错误截图
      if (page && !page.isClosed() && browser && browser.isConnected()) {
        try {
          const errorScreenshotPath = path.join(qianwenDir, `qianwen_ERROR_${item.question_number}_attempt_${retryCount + 1}.png`);
          await page.screenshot({ path: errorScreenshotPath, fullPage: true });
          console.log(`[INFO] 已保存错误截图: ${errorScreenshotPath}`);
        } catch (e) { 
          console.error(`[ERROR] 保存错误截图失败: ${e.message}`); 
        }
      }
      
      // 关闭浏览器
      await safeCloseBrowser(browser);
    }
    
    // 增加重试计数
    retryCount++;
    
    // 检查是否达到最大重试次数
    if (retryCount > maxRetry) {
      console.error(`[FATAL] 题号 ${item.question_number} 在 ${maxRetry + 1} 次尝试后彻底失败。`);
      
      // 保存空结果
      saveResult(resultPath, prompt, null, item);
      console.log(`[INFO] 题号 ${item.question_number}: 已保存空结果`);
      return; // 彻底失败，退出函数
    }
    
    // 等待一段时间后重试
    console.log(`[INFO] 题号 ${item.question_number}: 准备重试，等待片刻...`);
    await new Promise(resolve => setTimeout(resolve, 5000)); // 重试前等待5秒
  }
}

/**
 * 注入SSE监听脚本
 * @param {Page} page Playwright页面对象
 */
async function injectSSEMonitor(page) {
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
}

/**
 * 从响应中提取回答
 * @param {string} responseText SSE响应文本
 * @param {string} questionNumber 问题编号（用于日志）
 * @returns {string|null} 提取的回答或null
 */
function extractAnswerFromResponse(responseText, questionNumber) {
  try {
    // 分行处理响应
    const lines = responseText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      console.log(`[WARN 题号 ${questionNumber}] SSE 响应为空`);
      return null;
    }
    
    // 获取最后一行（完整回答）
    const lastLine = lines[lines.length - 1];
    if (!lastLine.startsWith('data:')) {
      console.log(`[WARN 题号 ${questionNumber}] 最后一行不是 data: 格式`);
      return null;
    }
    
    // 提取JSON字符串
    const jsonStr = lastLine.substring(5); // 移除 'data:' 前缀
    console.log(`[INFO 题号 ${questionNumber}] 原始JSON字符串: ${jsonStr.substring(0, 100)}...`);
    
    try {
      // 第一次解析JSON
      //这里就是要parse两次，不然会有bug
      const jsonObj = JSON.parse(JSON.parse(jsonStr));
      console.log(`[INFO 题号 ${questionNumber}] 第一层JSON解析成功`);
      
      // 检查data数组
      if (!jsonObj.data || !Array.isArray(jsonObj.data) || jsonObj.data.length === 0) {
        console.log(`[WARN 题号 ${questionNumber}] 未找到data数组`);
        return jsonStr;
      }
      
      // 获取第一个数据项
      const firstItem = jsonObj.data[0];
      if (!firstItem || firstItem.type !== "JSON_TEXT" || !firstItem.value) {
        console.log(`[WARN 题号 ${questionNumber}] 第一个元素不符合预期`);
        return jsonStr;
      }
      
      try {
        // 第二次解析JSON（嵌套的JSON）
        const valueObj = JSON.parse(firstItem.value);
        console.log(`[INFO 题号 ${questionNumber}] 嵌套JSON解析成功`);
        
        // 提取文本内容
        if (valueObj.data && 
            valueObj.data.responseCard && 
            valueObj.data.responseCard.sentenceList && 
            valueObj.data.responseCard.sentenceList.length > 0 && 
            valueObj.data.responseCard.sentenceList[0].content) {
          
          const content = valueObj.data.responseCard.sentenceList[0].content;
          console.log(`[INFO 题号 ${questionNumber}] 成功提取文本内容: ${content.substring(0, 100)}...`);
          return content;
        } else {
          console.log(`[WARN 题号 ${questionNumber}] 未找到文本内容`);
          return jsonStr;
        }
      } catch (valueErr) {
        console.log(`[WARN 题号 ${questionNumber}] 嵌套JSON解析失败: ${valueErr.message}`);
        return jsonStr;
      }
    } catch (jsonErr) {
      console.log(`[WARN 题号 ${questionNumber}] JSON解析失败: ${jsonErr.message}`);
      return jsonStr;
    }
  } catch (err) {
    console.error(`[ERROR 题号 ${questionNumber}] 提取回答时出错: ${err.message}`);
    return jsonStr;
  }
}

/**
 * 保存响应内容到文件（调试用）
 * @param {string} responseText 响应文本
 * @param {string} questionNumber 问题编号
 */
function saveResponseToFile(responseText, questionNumber) {
  try {
    const debugDir = path.join(process.cwd(), 'debug');
    if (!fs.existsSync(debugDir)) {
      fs.mkdirSync(debugDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(debugDir, `qianwen_sse_${questionNumber}_${timestamp}.json`);
    fs.writeFileSync(filename, responseText, 'utf8');
    console.log(`[INFO 题号 ${questionNumber}] SSE 响应内容已保存到文件: ${filename}`);
  } catch (err) {
    console.error(`[ERROR] 保存响应内容到文件时出错: ${err.message}`);
  }
}

/**
 * 安全关闭浏览器
 * @param {Browser} browser Playwright浏览器对象
 */
async function safeCloseBrowser(browser) {
  if (browser && browser.isConnected()) {
    try {
      await browser.close();
    } catch (err) {
      console.error(`[ERROR] 关闭浏览器时出错: ${err.message}`);
    }
  }
}

/**
 * 保存结果到文件
 * @param {string} resultPath 结果文件路径
 * @param {string} prompt 提示词
 * @param {string|null} answer 提取的回答
 * @param {Object} item 问题项
 */
function saveResult(resultPath, prompt, answer, item) {
  try {
    const result = {
      prompt,
      messages: answer ? [answer] : [],
      question_info: item
    };
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`[INFO] 结果已保存到: ${resultPath}`);
  } catch (err) {
    console.error(`[ERROR] 保存结果时出错: ${err.message}`);
  }
}

/**
 * 处理从DOM获取的内容
 * @param {string} domContent DOM中获取的内容
 * @param {string} questionNumber 问题编号（用于日志）
 * @returns {string|null} 处理后的内容或null
 */
function processDomContent(domContent, questionNumber) {
  try {
    if (!domContent || domContent.trim().length === 0) {
      console.log(`[WARN 题号 ${questionNumber}] DOM内容为空`);
      return null;
    }
    
    console.log(`[INFO 题号 ${questionNumber}] 处理DOM内容: ${domContent.substring(0, 100)}...`);
    
    // 尝试判断是否为JSON格式
    if (domContent.trim().startsWith('{') && domContent.trim().endsWith('}')) {
      try {
        // 尝试解析JSON
        const jsonObj = JSON.parse(domContent);
        console.log(`[INFO 题号 ${questionNumber}] DOM内容JSON解析成功`);
        
        // 如果符合千问平台的响应格式，尝试提取内容
        if (jsonObj.data && 
            jsonObj.data.responseCard && 
            jsonObj.data.responseCard.sentenceList && 
            jsonObj.data.responseCard.sentenceList.length > 0 && 
            jsonObj.data.responseCard.sentenceList[0].content) {
          
          const content = jsonObj.data.responseCard.sentenceList[0].content;
          console.log(`[INFO 题号 ${questionNumber}] 从DOM JSON中成功提取内容: ${content.substring(0, 100)}...`);
          return content;
        }
      } catch (jsonErr) {
        console.log(`[INFO 题号 ${questionNumber}] DOM内容不是有效的JSON: ${jsonErr.message}`);
        // 不是JSON，继续使用原始内容
      }
    }
    
    // 如果不是JSON或者JSON解析失败，直接返回原始内容
    return domContent.trim();
  } catch (err) {
    console.error(`[ERROR 题号 ${questionNumber}] 处理DOM内容时出错: ${err.message}`);
    return domContent ? domContent.trim() : null;
  }
}

module.exports = {
  processQuestion
};
