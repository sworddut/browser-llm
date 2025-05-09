const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const input = require('./files/extracted_questions.json'); // 四元组 JSON 数据
const { log } = require('console');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: 'deepseek-state.json' // 必须先手动登录一次 DeepSeek 并保存
  });

  const page = await context.newPage();

  for (const item of input) {
    const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions.join('\n')}，思考不用特别久`;

    await page.goto('https://chat.deepseek.com', { waitUntil: 'domcontentloaded' });

    // 先查找并点击"深度思考 (R1)"按钮（如存在）
    try {
      // 等待包含"深度思考"文本的 span 出现
      await page.waitForSelector('span:text("深度思考")', { timeout: 5000 });
      console.log(`[问题 ${item.question_number}] 找到深度思考按钮span`);
      await page.evaluate(() => {
        const label = Array.from(document.querySelectorAll('span')).find(e => e.innerText.includes('深度思考'));
        if (label) {
          let btn = label.closest('div[role=button]');
          if (btn) btn.click();
        }
      });
      // 可选：等待按钮点击后页面刷新
      await page.waitForTimeout(1500);
    } catch (e) {
      // 没找到按钮可忽略
      console.log(`[问题 ${item.question_number}] 未找到"深度思考"按钮:`, e?.message || e);
    }

    // 等待 textarea 可用（DeepSeek 有 debounce 延迟）
    await page.waitForSelector('textarea', { timeout: 15000 });

    // 填入 prompt
    await page.fill('textarea', prompt);
    await page.keyboard.press('Enter');

    // 等待回答加载并监听对话结束
    // 1. 监听最后一条消息内容是否稳定
    let lastContent = '';
    let stableCount = 0;
    let answerSelector = '.ds-markdown.ds-markdown--block'; // 需根据实际页面结构调整
    let answerText = '';
    let maxRetries = 2; // 最大重试次数
    let retryCount = 0;

    async function waitForResponse() {
      for (let i = 0; i < 5*60; i++) { // 最多等待 5*60*2=10 min
        // 获取最后一条回答内容
        answerText = await page.evaluate((selector) => {
          const nodes = Array.from(document.querySelectorAll(selector));
          if (nodes.length === 0) return '';
          return nodes[nodes.length - 1].innerText.trim();
        }, answerSelector);
        if (answerText && answerText === lastContent) {
          stableCount++;
        } else {
          stableCount = 0;
          lastContent = answerText;
        }
        if (stableCount >= 2) break; // 2 次检测内容一致，判定为稳定
        await page.waitForTimeout(2000);
      }
    }

    // 等待初始响应
    await waitForResponse();

    // 2. 获取全部对话内容并保存
    let allMessages = await page.evaluate((selector) => {
      return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
    }, answerSelector);
    
    // 检查是否返回了"服务器繁忙"消息
    while (allMessages.some(msg => msg.includes('服务器繁忙')) && retryCount < maxRetries) {
      retryCount++;
      console.log(`⚠️ [问题 ${item.question_number}] 服务器繁忙，等待2分钟后重试... (${retryCount}/${maxRetries})`);
      
      // 等待2分钟
      await page.waitForTimeout(2 * 60 * 1000);
      
      // 刷新页面重试
      await page.reload({ waitUntil: 'domcontentloaded' });
      
      // 重新选择模型（如果需要）
      try {
        await page.waitForSelector('span:text("深度思考")', { timeout: 5000 });
        console.log(`[问题 ${item.question_number}] 找到深度思考按钮span`);
        await page.evaluate(() => {
          const label = Array.from(document.querySelectorAll('span')).find(e => e.innerText.includes('深度思考'));
          if (label) {
            let btn = label.closest('div[role=button]');
            if (btn) btn.click();
          }
        });
        await page.waitForTimeout(1500);
      } catch (e) {
        console.log(`[问题 ${item.question_number}] 未找到"深度思考"按钮:`, e?.message || e);
      }
      
      // 重新提交问题
      await page.waitForSelector('textarea', { timeout: 15000 });
      await page.fill('textarea', prompt);
      await page.keyboard.press('Enter');
      
      // 重新等待回答
      lastContent = '';
      stableCount = 0;
      
      // 等待重试响应
      await waitForResponse();
      
      // 重新获取所有消息
      allMessages = await page.evaluate((selector) => {
        return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
      }, answerSelector);
    }

    if (retryCount > 0 && !allMessages.some(msg => msg.includes('服务器繁忙'))) {
      console.log(`✅ [问题 ${item.question_number}] 重试成功`);
    } else if (retryCount >= maxRetries && allMessages.some(msg => msg.includes('服务器繁忙'))) {
      console.log(`❌ [问题 ${item.question_number}] 达到最大重试次数，服务器仍然繁忙`);
    }

    // 确保 deepseek 目录存在
    const deepseekDir = path.join(__dirname, 'deepseek');
    if (!fs.existsSync(deepseekDir)) {
      fs.mkdirSync(deepseekDir, { recursive: true });
    }

    // 保存结果
    const resultPath = path.join(deepseekDir, `deepseek_output_${item.question_number}.json`);
    fs.writeFileSync(resultPath, JSON.stringify({ 
      prompt, 
      messages: allMessages,
      retried: retryCount > 0
    }, null, 2), 'utf-8');

    // 3. 截图
    const screenshotPath = path.join(deepseekDir, `deepseek_output_${item.question_number}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log(`✅ 已保存截图：${screenshotPath}，对话内容：${resultPath}`);

    // 4. 等待几秒再发下一题（比如 5 秒）
    await page.waitForTimeout(5000);
  }

  await browser.close();
})();
