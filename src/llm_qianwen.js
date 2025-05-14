/**
 * 千问 LLM 自动化主流程
 * 完全重构版本，解决了多个问题：
 * 1. 模块化设计，分离关注点
 * 2. 统一错误处理和日志记录
 * 3. 多种内容获取策略（网络响应、复制按钮、DOM提取）
 * 4. 改进的超时和重试机制
 * 5. 自动处理剪贴板权限请求
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');

// 常量定义
const TIMEOUT = {
  PAGE_LOAD: 60000,      // 页面加载超时：60秒
  INPUT_WAIT: 20000,     // 等待输入框出现：20秒
  RESPONSE_WAIT: 600000, // 等待响应：10分钟
  COPY_BUTTON_WAIT: 30000, // 等待复制按钮：30秒
  CLIPBOARD_WAIT: 1000,  // 等待剪贴板操作完成：1秒
  PREVIEW_WAIT: 30000,   // 等待预览区域出现：30秒
  RETRY_DELAY: 5000      // 重试延迟：5秒
};

// 主函数：处理单个问题
async function processQuestion(item, accountName, output) {
  // 构建提示词
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions}\n\n请根据以下要求作答：\n1. 给出你的答题过程，可适当简略，但保留关键步骤，保证逻辑完整,所有数学公式均使用latex格式。\n2. 将最终答案单独列出，格式清晰。\n3. 请不要思考太长时间\n请在全部问题回答完毕后输出：“回答完毕”\n示例输出结构如下：\n答题过程：\n（在这里说明推理过程和关键步骤）\n最终答案：\n（清晰列出结果）\n回答完毕`;
  
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
      
      // 初始化浏览器和页面
      ({ browser, page } = await initBrowser(accountName, item.question_number));
      
      // 导航到千问页面
      await page.goto('https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.16af7b08ALF9pt&tab=model#/efm/model_experience_center/text?modelId=qwq-32b', { 
        waitUntil: 'domcontentloaded', 
        timeout: TIMEOUT.PAGE_LOAD
      });
      
      // 注入时间显示
      await utils.injectTimeDisplay(page);

      // 等待输入框可用
      const inputSelector = 'textarea.efm_ant-input';
      await page.waitForSelector(inputSelector, { timeout: TIMEOUT.INPUT_WAIT });
      
      // 注入SSE监听脚本
      await injectSSEMonitor(page);
      
      // 创建响应处理函数
      const responsePromise = createResponsePromise(page, item.question_number, screenshotPath);
      
      // 发送问题
      await page.fill(inputSelector, prompt);
      await page.focus(inputSelector);
      await page.waitForTimeout(2000); // 等待聚焦生效
      await page.keyboard.press('Enter');
      console.log(`[INFO] 题号 ${item.question_number}: 问题已发送，等待回复...`);
      
      // 等待响应处理
      try {
        extractedAnswer = await Promise.race([
          responsePromise,
          new Promise((_, reject) => setTimeout(() => reject(new Error('等待响应超时')), TIMEOUT.RESPONSE_WAIT))
        ]);
        
        console.log(`[INFO] 题号 ${item.question_number}: 成功获取回答`);
      } catch (e) {
        console.warn(`[WARN] 题号 ${item.question_number}: 等待响应时出错: ${e.message}`);
      }
      
      // 如果成功提取到回答
      if (extractedAnswer) {
        // 检查是否是超时结果
        if (extractedAnswer === "已超时") {
          console.warn(`[WARN] 题号 ${item.question_number}: 检测到超时结果，将重试`);
          
          // 关闭浏览器
          await safeCloseBrowser(browser);
          
          // 重置提取到的回答，让重试机制生效
          extractedAnswer = null;
          
          // 增加重试计数
          retryCount++;
          
          // 检查是否达到最大重试次数
          if (retryCount > maxRetry) {
            console.warn(`[WARN] 题号 ${item.question_number}: 超时重试次数已达上限，保存超时结果并跳到下一题`);
            // 保存超时结果并继续
            saveResult(resultPath, prompt, "已超时", item, true);
            console.log(`⚠️ 题号 ${item.question_number}: 多次超时，已保存超时结果。结果: ${resultPath}`);
            return; // 跳到下一题
          }
          
          // 等待一段时间后重试
          console.log(`[INFO] 题号 ${item.question_number}: 超时后准备重试，等待片刻...`);
          await new Promise(resolve => setTimeout(resolve, TIMEOUT.RETRY_DELAY));
          continue; // 继续循环，重新尝试
        }
        
        // 非超时结果，正常保存
        saveResult(resultPath, prompt, extractedAnswer, item);
        
        // 尝试截图（如果页面仍然打开）
        if (page && !page.isClosed()) {
          try {
            // 等待内容显示在页面上
            await page.waitForTimeout(2000);
            
            // 滚动到底部并截图
            const chatContainerSelector = '[class^="scrollWrapper--"]';
            await utils.scrollToElementBottom(page, chatContainerSelector);
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`[INFO] 题号 ${item.question_number}: 截图已保存到: ${screenshotPath}`);
          } catch (screenshotErr) {
            console.warn(`[WARN] 题号 ${item.question_number}: 保存截图时出错: ${screenshotErr.message}`);
          }
        }
        
        console.log(`✅ 题号 ${item.question_number}: 已成功处理。结果: ${resultPath}`);
      } else {
        console.warn(`[WARN] 题号 ${item.question_number}: 未能提取到回答，将重试`);
      }
      
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
      
      // 增加重试计数
      retryCount++;
      
      // 检查是否达到最大重试次数
      if (retryCount > maxRetry) {
        console.error(`[FATAL] 题号 ${item.question_number} 在 ${maxRetry + 1} 次尝试后彻底失败。`);
        
        // 保存空结果，标记为失败
        saveResult(resultPath, prompt, "处理失败", item, true);
        return; // 彻底失败
      }
      
      // 等待一段时间后重试
      console.log(`[INFO] 题号 ${item.question_number}: 准备重试，等待片刻...`);
      await new Promise(resolve => setTimeout(resolve, TIMEOUT.RETRY_DELAY));
    }
  }
}

/**
 * 初始化浏览器和页面
 * @param {string} accountName - 账号名称
 * @param {string} questionNumber - 问题编号（用于日志）
 * @returns {Promise<{browser: Browser, page: Page}>} - 浏览器和页面对象
 */
async function initBrowser(accountName, questionNumber) {
  // 启动浏览器
  const browser = await chromium.launch({ headless: false });
  
  // 构建cookie文件路径并加载
  const cookiePath = path.join('cookies', accountName, 'qianwen-state.json');
  let context;
  
  if (!fs.existsSync(cookiePath)) {
    console.warn(`[WARN] Cookie文件不存在: ${cookiePath}，尝试使用默认路径`);
    context = await browser.newContext({
      // 预先授予剪贴板权限
      permissions: ['clipboard-read', 'clipboard-write']
    }); 
  } else {
    console.log(`[INFO] 使用Cookie文件: ${cookiePath}`);
    context = await browser.newContext({
      storageState: cookiePath,
      // 预先授予剪贴板权限
      permissions: ['clipboard-read', 'clipboard-write']
    });
  }
  
  const page = await context.newPage();
  await page.setViewportSize({ width: 1200, height: 860 });
  
  // 监听权限请求并自动接受
  page.context().on('page', async newPage => {
    newPage.on('dialog', async dialog => {
      console.log(`[INFO] 题号 ${questionNumber}: 检测到对话框: ${dialog.message()}`);
      if (dialog.message().includes('剪贴板') || 
          dialog.message().includes('clipboard') || 
          dialog.message().includes('想要查看复制到剪贴板')) {
        console.log(`[INFO] 题号 ${questionNumber}: 自动接受剪贴板权限请求`);
        await dialog.accept();
      } else {
        console.log(`[INFO] 题号 ${questionNumber}: 自动关闭对话框`);
        await dialog.dismiss();
      }
    });
  });
  
  return { browser, page };
}

/**
 * 注入SSE监听脚本
 * @param {import('playwright').Page} page - Playwright页面对象
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
 * 创建响应处理Promise
 * @param {import('playwright').Page} page - Playwright页面对象
 * @param {string} questionNumber - 问题编号（用于日志）
 * @param {string} screenshotPath - 截图保存路径
 * @returns {Promise<string>} - 提取到的回答内容
 */
function createResponsePromise(page, questionNumber, screenshotPath) {
  return new Promise((resolve, reject) => {
    // 响应监听器
    const responseListener = async response => {
      const url = response.url();
      if (!url.includes('efm-ws.aliyuncs.com/sse')) return;
      
      try {
        console.log(`[INFO 题号 ${questionNumber}] 捕获到 SSE 响应: ${url}`);
        
        // 优先尝试从网络响应获取
        let responseText = '';
        try {
          responseText = await response.text();
          console.log(`[INFO 题号 ${questionNumber}] 成功获取网络响应内容，长度: ${responseText.length}`);
          
          // 保存响应内容到文件（调试用）
          saveResponseToFile(responseText, questionNumber);
          
          // 尝试提取回答
          const answer = extractAnswerFromResponse(responseText, questionNumber);
          if (answer) {
            console.log(`[INFO 题号 ${questionNumber}] 从网络响应成功提取回答`);
            page.removeListener('response', responseListener);
            resolve(answer);
            return;
          }
        } catch (networkErr) {
          console.warn(`[WARN 题号 ${questionNumber}] 从网络获取响应失败: ${networkErr.message}`);
          
          // 网络获取失败，尝试使用复制按钮
          const clipboardContent = await tryGetContentFromClipboard(page, questionNumber, screenshotPath);
          if (clipboardContent) {
            page.removeListener('response', responseListener);
            resolve(clipboardContent);
            return;
          }
          
          // 如果复制按钮方法失败，尝试从DOM中获取
          const domContent = await tryGetContentFromDOM(page, questionNumber);
          if (domContent) {
            page.removeListener('response', responseListener);
            resolve(domContent);
            return;
          }
          
          // 所有方法都失败，截图并返回"已超时"
          console.warn(`[WARN 题号 ${questionNumber}] 所有获取内容的方法都失败，设置为"已超时"`);
          try {
            // 截图
            const timeoutErrorScreenshotPath = path.join(
              path.dirname(screenshotPath),
              `qianwen_output_${questionNumber}_error_timeout.png`
            );
            await page.screenshot({ path: timeoutErrorScreenshotPath, fullPage: true });
            console.log(`[INFO 题号 ${questionNumber}] 超时错误截图已保存到: ${timeoutErrorScreenshotPath}`);
          } catch (screenshotErr) {
            console.error(`[ERROR 题号 ${questionNumber}] 保存超时错误截图失败: ${screenshotErr.message}`);
          }
          
          // 返回超时结果
          page.removeListener('response', responseListener);
          resolve("已超时");
          return;
        }
      } catch (err) {
        console.error(`[ERROR 题号 ${questionNumber}] 处理响应时出错:`, err.message);
        
        // 错误情况下也截图并返回"已超时"
        try {
          // 截图
          const timeoutErrorScreenshotPath = path.join(
            path.dirname(screenshotPath),
            `qianwen_output_${questionNumber}_error_timeout.png`
          );
          await page.screenshot({ path: timeoutErrorScreenshotPath, fullPage: true });
          console.log(`[INFO 题号 ${questionNumber}] 超时错误截图已保存到: ${timeoutErrorScreenshotPath}`);
        } catch (screenshotErr) {
          console.error(`[ERROR 题号 ${questionNumber}] 保存超时错误截图失败: ${screenshotErr.message}`);
        }
        
        // 返回超时结果
        page.removeListener('response', responseListener);
        resolve("已超时");
        return;
      }
    };
    
    // 添加响应监听器
    page.on('response', responseListener);
  });
}

/**
 * 尝试使用复制按钮获取内容
 * @param {import('playwright').Page} page - Playwright页面对象
 * @param {string} questionNumber - 问题编号（用于日志）
 * @param {string} screenshotPath - 截图保存路径
 * @returns {Promise<string|null>} - 提取到的内容或null
 */
async function tryGetContentFromClipboard(page, questionNumber, screenshotPath) {
  console.log(`[INFO 题号 ${questionNumber}] 尝试使用复制按钮获取回答`);
  try {
    // 尝试定位复制按钮
    const copyButtonSelector = 'button[data-bailian-c1="模型体验-文本对话"][data-bailian-c3="内容复制按钮"]';
    let copyButton = null;
    
    try {
      // 等待复制按钮出现，设置超时
      await page.waitForSelector(copyButtonSelector, { timeout: TIMEOUT.COPY_BUTTON_WAIT });
      copyButton = await page.$(copyButtonSelector);
    } catch (timeoutErr) {
      console.warn(`[WARN 题号 ${questionNumber}] 等待复制按钮超时`);
      // 超时处理，直接设置内容为"已超时"
      console.log(`[INFO 题号 ${questionNumber}] 设置回答为"已超时"`);
      
      // 截图
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`[INFO 题号 ${questionNumber}] 超时截图已保存到: ${screenshotPath}`);
      
      // 返回超时结果
      return "已超时";
    }
    
    if (copyButton) {
      console.log(`[INFO 题号 ${questionNumber}] 找到复制按钮，尝试点击...`);
      
      // 清空剪贴板
      await page.evaluate(() => navigator.clipboard.writeText(''));
      
      // 点击复制按钮
      await copyButton.click();
      
      // 等待一下确保复制操作完成
      await page.waitForTimeout(TIMEOUT.CLIPBOARD_WAIT);
      
      // 获取剪贴板内容
      const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
      
      if (clipboardContent && clipboardContent.trim()) {
        console.log(`[INFO 题号 ${questionNumber}] 成功从剪贴板获取内容，长度: ${clipboardContent.length}`);
        return clipboardContent.trim();
      } else {
        console.warn(`[WARN 题号 ${questionNumber}] 剪贴板内容为空。`);
      }
    } else {
      console.warn(`[WARN 题号 ${questionNumber}] 未找到复制按钮，尝试更简单的选择器...`);
      
      // 尝试使用更简单的选择器
      const simpleCopyButtonSelector = 'button.efm_ant-btn i.bl-icon-copy-line';
      const simpleCopyButton = await page.$(simpleCopyButtonSelector);
      
      if (simpleCopyButton) {
        console.log(`[INFO 题号 ${questionNumber}] 找到复制图标，尝试点击...`);
        
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
        await page.waitForTimeout(TIMEOUT.CLIPBOARD_WAIT);
        
        // 获取剪贴板内容
        const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
        
        if (clipboardContent && clipboardContent.trim()) {
          console.log(`[INFO 题号 ${questionNumber}] 成功从剪贴板获取内容，长度: ${clipboardContent.length}`);
          return clipboardContent.trim();
        } else {
          console.warn(`[WARN 题号 ${questionNumber}] 剪贴板内容为空。`);
        }
      } else {
        console.warn(`[WARN 题号 ${questionNumber}] 也未找到复制图标。`);
      }
    }
  } catch (clipboardErr) {
    console.error(`[ERROR 题号 ${questionNumber}] 使用复制按钮时出错: ${clipboardErr.message}`);
  }
  
  return null; // 未能获取内容
}

/**
 * 尝试从DOM中获取内容
 * @param {import('playwright').Page} page - Playwright页面对象
 * @param {string} questionNumber - 问题编号（用于日志）
 * @returns {Promise<string|null>} - 提取到的内容或null
 */
async function tryGetContentFromDOM(page, questionNumber) {
  console.log(`[INFO 题号 ${questionNumber}] 尝试从DOM中获取回答`);
  try {
    // 等待预览区域出现
    await page.waitForSelector('#preview', { timeout: TIMEOUT.PREVIEW_WAIT });
    
    // 从DOM中获取回答
    const domContent = await page.evaluate(() => {
      const nodeList = document.querySelectorAll('#preview')
      const previewElement = nodeList[nodeList.length - 1];
      return previewElement ? previewElement.innerText : '';
    });
    
    // 尝试处理DOM中的内容
    const processedDomContent = processDomContent(domContent, questionNumber);
    
    if (domContent && domContent.trim().length > 0) {
      console.log(`[INFO 题号 ${questionNumber}] 从DOM成功获取内容，长度: ${domContent.length}`);
      
      // 保存DOM内容到文件（调试用）
      try {
        saveResponseToFile(domContent, `${questionNumber}_dom`);
      } catch (saveErr) {
        console.warn(`[WARN 题号 ${questionNumber}] 保存DOM内容失败: ${saveErr.message}`);
      }
      
      // 使用处理后的DOM内容作为回答
      const finalAnswer = processedDomContent || domContent.trim();
      console.log(`[INFO 题号 ${questionNumber}] 最终回答: ${finalAnswer.substring(0, 50)}...`);
      return finalAnswer;
    } else {
      console.warn(`[WARN 题号 ${questionNumber}] DOM内容为空`);
    }
  } catch (domErr) {
    console.error(`[ERROR 题号 ${questionNumber}] 从DOM获取内容失败: ${domErr.message}`);
  }
  
  return null; // 未能获取内容
}

/**
 * 从网络响应中提取回答
 * @param {string} responseText - 响应文本
 * @param {string} questionNumber - 问题编号（用于日志）
 * @returns {string|null} - 提取到的回答或null
 */
function extractAnswerFromResponse(responseText, questionNumber) {
  try {
    // 尝试解析响应行
    const lines = responseText.split('\n').filter(line => line.trim());
    if (lines.length === 0) return null;
    
    console.log(`[DEBUG] 响应行数: ${lines.length}`);
    for (let i = 0; i < Math.min(lines.length, 3); i++) {
      console.log(`[DEBUG] 行 ${i}: ${lines[i].substring(0, 100)}${lines[i].length > 100 ? '...' : ''}`);
    }
    
    // 尝试从所有行中提取内容
    let content = '';
    
    for (const line of lines) {
      if (line.startsWith('data:')) {
        try {
          const jsonStr = line.substring(5).trim(); // 移除 'data:' 前缀
          if (!jsonStr || jsonStr === '[DONE]') continue;
          
          const data = JSON.parse(jsonStr);
          
          // 尝试不同的数据格式
          if (data.content) {
            content += data.content;
          } else if (data.data && Array.isArray(data.data)) {
            for (const item of data.data) {
              if (item.type === "JSON_TEXT" && item.value) {
                try {
                  const jsonValue = JSON.parse(item.value);
                  
                  if (jsonValue.data && jsonValue.data.responseCard && jsonValue.data.responseCard.sentenceList) {
                    const sentenceContent = jsonValue.data.responseCard.sentenceList[0].content;
                    if (sentenceContent) {
                      console.log(`[INFO 题号 ${questionNumber}] 成功提取JSON_TEXT内容`);
                      return sentenceContent;
                    }
                  }
                } catch (jsonErr) {
                  // 忽略JSON解析错误
                }
              }
            }
          }
        } catch (e) {
          // 忽略解析错误
        }
      }
    }
    
    if (content) {
      console.log(`[INFO 题号 ${questionNumber}] 成功提取内容，长度: ${content.length}`);
      return content;
    }
  } catch (err) {
    console.error(`[ERROR 题号 ${questionNumber}] 提取回答时出错: ${err.message}`);
  }
  
  return null; // 未能提取到回答
}

/**
 * 处理从DOM中提取的内容
 * @param {string} domContent - DOM内容
 * @param {string} questionNumber - 问题编号（用于日志）
 * @returns {string|null} - 处理后的内容或null
 */
function processDomContent(domContent, questionNumber) {
  if (!domContent) return null;
  
  try {
    // 移除不必要的空白字符
    let processed = domContent.trim()
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n');
    
    // 如果内容过长，可以进行截断
    if (processed.length > 10000) {
      console.warn(`[WARN 题号 ${questionNumber}] DOM内容过长 (${processed.length} 字符)，将截断`);
      processed = processed.substring(0, 10000) + '...（内容已截断）';
    }
    
    return processed;
  } catch (err) {
    console.error(`[ERROR 题号 ${questionNumber}] 处理DOM内容时出错: ${err.message}`);
    return domContent; // 返回原始内容
  }
}

/**
 * 保存响应内容到文件（调试用）
 * @param {string} responseText - 响应文本
 * @param {string} questionNumber - 问题编号
 */
function saveResponseToFile(responseText, questionNumber) {
  try {
    const debugDir = path.join(process.cwd(), 'debug');
    if (!fs.existsSync(debugDir)) {
      fs.mkdirSync(debugDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(debugDir, `qianwen_response_${questionNumber}_${timestamp}.json`);
    fs.writeFileSync(filename, responseText, 'utf8');
    console.log(`[INFO 题号 ${questionNumber}] 响应内容已保存到文件: ${filename}`);
  } catch (err) {
    console.warn(`[WARN 题号 ${questionNumber}] 保存响应内容失败: ${err.message}`);
  }
}

/**
 * 保存结果到文件
 * @param {string} resultPath - 结果文件路径
 * @param {string} prompt - 提示词
 * @param {string} answer - 回答内容
 * @param {object} item - 问题项
 * @param {boolean} [isFailed=false] - 是否为失败结果
 */
function saveResult(resultPath, prompt, answer, item, isFailed = false) {
  try {
    const result = {
      prompt,
      messages: [answer],
      question_info: item,
      timestamp: new Date().toISOString(),
      status: isFailed ? 'failed' : 'success'
    };
    
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`[INFO] 题号 ${item.question_number}: 结果已保存到: ${resultPath}`);
  } catch (err) {
    console.error(`[ERROR] 题号 ${item.question_number}: 保存结果失败: ${err.message}`);
  }
}

/**
 * 安全关闭浏览器
 * @param {import('playwright').Browser} browser - Playwright浏览器对象
 */
async function safeCloseBrowser(browser) {
  if (browser && browser.isConnected()) {
    try {
      await browser.close();
      console.log(`[INFO] 浏览器已安全关闭`);
    } catch (err) {
      console.warn(`[WARN] 关闭浏览器时出错: ${err.message}`);
    }
  }
}

module.exports = {
  processQuestion
};
