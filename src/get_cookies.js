const { chromium } = require('playwright');
const fs = require('fs');
const readline = require('readline');

// 创建命令行输入接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// LLM平台对应表
const LLM_PLATFORMS = {
  '1': {
    name: 'DeepSeek/元宝',
    url: 'https://yuanbao.tencent.com',
    stateFile: 'deepseek-state.json'
  },
  '2': {
    name: '豆包',
    url: 'https://www.doubao.com/chat/ ',
    stateFile: 'doubao-state.json'
  },
  '3': {
    name: '千问/通义',
    url: 'https://www.tongyi.com/qianwen/',
    stateFile: 'qianwen-state.json'
  },
  '4': {
    name: '自定义',
    url: '',
    stateFile: 'custom-state.json'
  }
};

// 显示菜单并获取用户选择
async function promptUser() {
  return new Promise((resolve) => {
    console.log('\n📃 请选择要获取登录状态的 LLM 平台：');
    console.log('  1. DeepSeek/元宝 (https://yuanbao.tencent.com)');
    console.log('  2. 豆包/文心一言 (https://www.doubao.com/chat/)');
    console.log('  3. 千问/通义 (https://www.tongyi.com/qianwen/)');
    console.log('  4. 自定义其他平台');
    
    rl.question('\n请输入选项编号 [1-4] (默认: 1): ', (choice) => {
      const option = choice.trim() || '1';
      
      if (!LLM_PLATFORMS[option]) {
        console.log('❗ 无效选项，将使用默认选项 1');
        const platform = LLM_PLATFORMS['1'];
        resolve({ targetUrl: platform.url, stateFile: platform.stateFile });
        return;
      }
      
      const platform = LLM_PLATFORMS[option];
      
      // 如果选择自定义，请求输入URL
      if (option === '4') {
        rl.question('\n请输入目标网站URL: ', (url) => {
          const targetUrl = url.trim();
          if (!targetUrl) {
            console.log('❗ URL不能为空，将使用默认值');
            resolve({ targetUrl: LLM_PLATFORMS['1'].url, stateFile: LLM_PLATFORMS['1'].stateFile });
            return;
          }
          
          rl.question('请输入保存的登录状态文件名 (默认: custom-state.json): ', (filename) => {
            const stateFile = filename.trim() || 'custom-state.json';
            resolve({ targetUrl, stateFile });
          });
        });
      } else {
        console.log(`\n✅ 已选择: ${platform.name} (${platform.url})`);
        resolve({ targetUrl: platform.url, stateFile: platform.stateFile });
      }
    });
  });
}

(async () => {
  // 获取用户输入
  const { targetUrl, stateFile } = await promptUser();
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(targetUrl);
  console.log(`\n🟢 请在浏览器中手动登录 ${targetUrl}...`);
  console.log('\nℹ️ 登录完成后，请在命令行按 Enter 键保存登录状态');

  // 等待用户按回车键
  await new Promise(resolve => {
    rl.question('\n请在登录成功后按 Enter 键保存登录状态...', () => {
      resolve();
    });
  });
  
  console.log(`\n✅ 正在保存登录状态...`);
  // 等待1秒，确保cookie/session写入完成
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    const state = await context.storageState();
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
    console.log(`💾 登录状态已保存为 ${stateFile}`);
  } catch (err) {
    console.error('⚠️  无法保存登录状态：', err);
  }

  rl.close();
  await browser.close();
  process.exit();
})();
