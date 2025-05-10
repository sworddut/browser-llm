const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// DeepSeek/元宝自动化主流程，导出为 processQuestion
async function processQuestion(item) {
  const prompt = `问题编号：${item.question_number}\n条件：${item.condition}\n\n问题：${item.specific_questions.join('\n')}，给一个最后答案的总结，思考不用太久`;
  let answerSelector = '.hyc-component-reasoner__text';
  const deepseekDir = path.join(__dirname,'outputs','deepseek');
  if (!fs.existsSync(deepseekDir)) {
    fs.mkdirSync(deepseekDir, { recursive: true });
  }
  let resultPath = path.join(deepseekDir, `deepseek_output_${item.question_number}.json`);
  // 跳过已完成
  if (fs.existsSync(resultPath)) {
    console.log(`题号 ${item.question_number} 已有结果，跳过...`);
    return;
  }
  let retryCount = 0;
  const maxRetry = 2;
  let continueCount = 0;
  const maxContinue = 5;
  let allMessages = [];

  // 启动浏览器和 context
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: 'deepseek-state.json'
  });
  const page = await context.newPage();

  while (retryCount <= maxRetry) {
    let gotDone = false;
    let apiError = false;
    const onResponse = async (response) => {
      const url = response.url();
      if (url.startsWith('https://yuanbao.tencent.com/api/chat/')) {
        try {
          const data = await response.text();
          if (data.includes('[DONE]')) {
            gotDone = true;
          }
        } catch (e) {
          apiError = true;
        }
      }
    };
    page.on('response', onResponse);
    try {
      await page.goto('https://yuanbao.tencent.com', { waitUntil: 'domcontentloaded' });
      // 关闭广告弹窗
      try {
        await page.waitForSelector('[class^="index_close_"]', { timeout: 5000 });
        await page.click('[class^="index_close_"]');
        console.log('已自动关闭广告弹窗');
      } catch (e) {
        console.log('未检测到广告弹窗');
      }
      await page.waitForSelector('.ql-editor[contenteditable="true"]', { timeout: 15000 });
      await page.evaluate((text) => {
        const inputDiv = document.querySelector('.ql-editor[contenteditable="true"]');
        if (inputDiv) {
          inputDiv.innerHTML = text.split('\n').map(line => `<p>${line}</p>`).join('');
        }
      }, prompt);
      await page.focus('.ql-editor[contenteditable="true"]');
      await page.keyboard.press('Enter');
      // 等待 [DONE] 或超时
      let waitTime = 0;
      const MAX_WAIT = 5 * 60 * 1000;
      while (!gotDone && waitTime < MAX_WAIT && !apiError) {
        await page.waitForTimeout(1000);
        waitTime += 1000;
      }
      // 获取全部对话内容
      allMessages = await page.evaluate((selector) => {
        return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
      }, answerSelector);
      // 判断是否需要继续
      if (!gotDone && continueCount < maxContinue) {
        continueCount++;
        console.log('未检测到 [DONE]，自动输入“继续”补全...');
        await page.waitForSelector('.ql-editor[contenteditable="true"]', { timeout: 15000 });
        await page.evaluate(() => {
          const inputDiv = document.querySelector('.ql-editor[contenteditable="true"]');
          if (inputDiv) {
            inputDiv.innerHTML = '<p>继续</p>';
          }
        });
        await page.focus('.ql-editor[contenteditable="true"]');
        await page.keyboard.press('Enter');
        // 继续等待下一轮 [DONE]
        let waitTime2 = 0;
        while (!gotDone && waitTime2 < MAX_WAIT && !apiError) {
          await page.waitForTimeout(1000);
          waitTime2 += 1000;
        }
        allMessages = await page.evaluate((selector) => {
          return Array.from(document.querySelectorAll(selector)).map(node => node.innerText.trim());
        }, answerSelector);
      }
      // 保存结果
      fs.writeFileSync(resultPath, JSON.stringify({ prompt, messages: allMessages }, null, 2), 'utf-8');
      // 截图前滚动到底部
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(deepseekDir, `deepseek_output_${item.question_number}.png`) });
      page.removeListener('response', onResponse);
      await browser.close();
      return;
    } catch (err) {
      retryCount++;
      page.removeListener('response', onResponse);
      if (retryCount > maxRetry) {
        console.error(`第${item.question_number}题重试${maxRetry}次后仍失败：`, err);
        await browser.close();
        return;
      }
      console.log('页面异常，刷新重试...');
      await page.reload({ waitUntil: 'domcontentloaded' });
      try {
        await page.waitForSelector('[class^="index_close_"]', { timeout: 3000 });
        await page.click('[class^="index_close_"]');
      } catch (e) {}
      continue;
    }
  }
}

module.exports = {
  processQuestion
};
