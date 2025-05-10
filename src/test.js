const { chromium } = require('playwright');
(async () => {
    let browser;
    browser = await chromium.launch({ headless: false }); //或者根据需要设置 headless true
    context = await browser.newContext({
        storageState: 'doubao-state.json',
        // userAgent: 'Mozilla/5.0 ...' // 可以考虑固定 User-Agent
      });
    page = await context.newPage();

    await page.goto('https://www.doubao.com/chat/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    await page.evaluate(() =>window.scrollTo(0, document.body.scrollHeight));
})()
