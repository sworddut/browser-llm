const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建命令行输入接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 创建cookies目录
const cookiesDir = 'cookies';
if (!fs.existsSync(cookiesDir)) {
  fs.mkdirSync(cookiesDir, { recursive: true });
}

// LLM平台对应表
const LLM_PLATFORMS = {
  '1': {
    name: 'DeepSeek/元宝',
    url: 'https://yuanbao.tencent.com',
    stateFile: 'deepseek-state.json'
  },
  '2': {
    name: '豆包',
    url: 'https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat?id=excs-202505112350-%5BhUS6YGl--02IjHGvPmFeg%5D',
    stateFile: 'doubao-state.json'
  },
  '3': {
    name: '千问/通义',
    url: 'https://bailian.console.aliyun.com/?tab=model#/efm/model_experience_center/text',
    stateFile: 'qianwen-state.json'
  },
  '4': {
    name: '自定义',
    url: '',
    stateFile: 'custom-state.json'
  }
};

// 显示菜单并获取用户选择
async function promptUser(currentAccount = null) {
  return new Promise((resolve) => {
    // 获取现有账号列表
    let accounts = [];
    try {
      const accountDirs = fs.readdirSync(cookiesDir);
      accounts = accountDirs.filter(dir => {
        const dirPath = path.join(cookiesDir, dir);
        return fs.statSync(dirPath).isDirectory();
      });
    } catch (err) {
      console.error(`读取账号目录失败: ${err.message}`);
    }
    
    // 显示现有账号
    console.log('\n📃 现有账号:');
    if (accounts.length > 0) {
      accounts.forEach((account, index) => {
        console.log(`  ${index + 1}. ${account}`);
      });
    } else {
      console.log('  (暂无账号)');
    }
    console.log(`  ${accounts.length + 1}. [新建账号]`);
    
    // 选择或创建账号
    const selectAccount = () => {
      rl.question(`\n请选择账号编号 [1-${accounts.length + 1}] (输入 q 退出): `, (accountChoice) => {
        // 如果输入q或Q，退出程序
        if (accountChoice.trim().toLowerCase() === 'q') {
          console.log('\n🟢 再见！');
          rl.close();
          process.exit(0);
          return;
        }
        
        let accountName = '';
        const accountOption = parseInt(accountChoice.trim() || '1');
        
        if (accountOption > 0 && accountOption <= accounts.length) {
          // 选择现有账号
          accountName = accounts[accountOption - 1];
          console.log(`\n✅ 已选择账号: ${accountName}`);
          selectPlatform(accountName);
        } else if (accountOption === accounts.length + 1) {
          // 创建新账号
          rl.question('\n请输入新账号名称: ', (newAccount) => {
            accountName = newAccount.trim();
            if (!accountName) {
              console.log('❗ 账号名称不能为空，将使用默认名称 "default"');
              accountName = 'default';
            }
            
            // 创建账号目录
            const accountDir = path.join(cookiesDir, accountName);
            if (!fs.existsSync(accountDir)) {
              fs.mkdirSync(accountDir, { recursive: true });
              console.log(`\n✅ 已创建账号目录: ${accountDir}`);
            }
            
            selectPlatform(accountName);
          });
        } else {
          // 无效选项
          console.log('❗ 无效选项，将使用默认账号 "default"');
          accountName = 'default';
          
          // 创建默认账号目录
          const accountDir = path.join(cookiesDir, accountName);
          if (!fs.existsSync(accountDir)) {
            fs.mkdirSync(accountDir, { recursive: true });
          }
          
          selectPlatform(accountName);
        }
      });
    };
    
    // 选择平台
    const selectPlatform = (accountName) => {
      console.log('\n📃 请选择要获取登录状态的 LLM 平台：');
      console.log('  0. 返回重新选择账号');
      console.log('  1. DeepSeek/元宝 (https://yuanbao.tencent.com)');
      console.log('  2. 豆包/文心一言 (https://www.doubao.com/chat/)');
      console.log('  3. 千问/通义 (https://www.tongyi.com/qianwen/)');
      console.log('  4. 自定义其他平台');
      
      rl.question('\n请输入选项编号 [0-4] (默认: 1, q 退出): ', (choice) => {
        const option = choice.trim() || '1';
        
        // 如果输入q或Q，退出程序
        if (option.toLowerCase() === 'q') {
          console.log('\n🟢 再见！');
          rl.close();
          process.exit(0);
          return;
        }
        
        // 如果选择返回重新选择账号
        if (option === '0') {
          console.log('\nℹ️ 返回账号选择界面...');
          resolve({ returnToAccountSelection: true });
          return;
        }
        
        if (!LLM_PLATFORMS[option]) {
          console.log('❗ 无效选项，将使用默认选项 1');
          const platform = LLM_PLATFORMS['1'];
          resolve({ 
            accountName,
            targetUrl: platform.url, 
            stateFile: path.join(cookiesDir, accountName, platform.stateFile)
          });
          return;
        }
        
        const platform = LLM_PLATFORMS[option];
        
        // 如果选择自定义，请求输入URL
        if (option === '4') {
          rl.question('\n请输入目标网站URL: ', (url) => {
            const targetUrl = url.trim();
            if (!targetUrl) {
              console.log('❗ URL不能为空，将使用默认值');
              resolve({ 
                accountName,
                targetUrl: LLM_PLATFORMS['1'].url, 
                stateFile: path.join(cookiesDir, accountName, LLM_PLATFORMS['1'].stateFile) 
              });
              return;
            }
            
            rl.question('请输入保存的登录状态文件名 (默认: custom-state.json): ', (filename) => {
              const stateFile = filename.trim() || 'custom-state.json';
              resolve({ 
                accountName,
                targetUrl, 
                stateFile: path.join(cookiesDir, accountName, stateFile) 
              });
            });
          });
        } else {
          console.log(`\n✅ 已选择: ${platform.name} (${platform.url})`);
          resolve({ 
            accountName,
            targetUrl: platform.url, 
            stateFile: path.join(cookiesDir, accountName, platform.stateFile) 
          });
        }
      });
    };
    
    // 如果已有当前账号，直接进入平台选择
    if (currentAccount) {
      selectPlatform(currentAccount);
    } else {
      // 否则开始选择账号
      selectAccount();
    }
  });
}

// 处理单个账号登录的函数
async function handleLogin(accountName, targetUrl, stateFile) {
  let browser = null;
  try {
    // 确保账号目录存在
    const accountDir = path.join(cookiesDir, accountName);
    if (!fs.existsSync(accountDir)) {
      fs.mkdirSync(accountDir, { recursive: true });
      console.log(`\n✅ 创建账号目录: ${accountDir}`);
    }
    
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(targetUrl);
    console.log(`\n🟢 请在浏览器中手动登录 ${targetUrl}...`);
    console.log(`\nℹ️ 当前账号: ${accountName}`);
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
    
    // 保存登录状态
    const state = await context.storageState();
    
    // 创建平台目录
    const platformDir = path.dirname(stateFile);
    if (!fs.existsSync(platformDir)) {
      fs.mkdirSync(platformDir, { recursive: true });
    }
    
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
    console.log(`💾 登录状态已保存为 ${stateFile}`);
    
    // 创建账号信息文件
    const accountInfoFile = path.join(accountDir, 'account_info.json');
    const accountInfo = {
      lastUpdated: new Date().toISOString(),
      platforms: {}
    };
    
    // 如果账号信息文件已存在，则读取并更新
    if (fs.existsSync(accountInfoFile)) {
      try {
        const existingInfo = JSON.parse(fs.readFileSync(accountInfoFile, 'utf-8'));
        Object.assign(accountInfo, existingInfo);
      } catch (err) {
        console.warn(`警告: 无法读取现有账号信息文件: ${err.message}`);
      }
    }
    
    // 更新平台信息
    const platformKey = path.basename(stateFile, '.json');
    accountInfo.platforms[platformKey] = {
      url: targetUrl,
      lastLogin: new Date().toISOString(),
      stateFile: path.relative(accountDir, stateFile)
    };
    
    // 保存账号信息
    fs.writeFileSync(accountInfoFile, JSON.stringify(accountInfo, null, 2));
    console.log(`💾 账号信息已更新: ${accountInfoFile}`);
    console.log('\n🟢 操作完成！');
    
    return true;
  } catch (err) {
    console.error('\n❌ 发生错误:', err);
    return false;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// 主函数
(async () => {
  try {
    let currentAccount = null;
    
    while (true) {
      // 获取用户输入
      const result = await promptUser(currentAccount);
      
      // 如果选择返回重新选择账号
      if (result.returnToAccountSelection) {
        currentAccount = null;
        continue;
      }
      
      const { accountName, targetUrl, stateFile } = result;
      currentAccount = accountName;
      
      // 处理登录
      const success = await handleLogin(accountName, targetUrl, stateFile);
      
      if (success) {
        // 操作成功后，返回到平台选择界面，而不是账号选择界面
        console.log(`\nℹ️ 返回平台选择界面...`);
      } else {
        // 如果操作失败，返回到账号选择界面
        console.log('\nℹ️ 返回账号选择界面...');
        currentAccount = null;
      }
    }
  } catch (err) {
    console.error('\n❌ 程序发生错误:', err);
    rl.close();
    process.exit(1);
  }
})();
