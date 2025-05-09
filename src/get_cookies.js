const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://chat.deepseek.com/sign_in');
  console.log('\n🟢 请在浏览器中手动登录 DeepSeek Chat...');

  // 监听 URL 变化
  page.on('framenavigated', async (frame) => {
    const url = frame.url();
    if (url === 'https://chat.deepseek.com/') {
      console.log('\n✅ 检测到登录成功，正在保存登录状态...');

      try {
        const state = await context.storageState();
        fs.writeFileSync('deepseek-state.json', JSON.stringify(state, null, 2));
        console.log('💾 登录状态已保存为 deepseek-state.json');
      } catch (err) {
        console.error('⚠️  无法保存登录状态：', err);
      }

      await browser.close();
      process.exit();
    }
  });

  console.log('⏳ 登录成功后，页面跳转到主页（https://chat.deepseek.com/）会自动保存状态\n');
})();
