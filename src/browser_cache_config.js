/**
 * 浏览器缓存配置工具
 * 用于优化Playwright浏览器的缓存策略，加快页面加载速度
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * 配置浏览器缓存选项
 * @param {import('playwright').BrowserType} browserType - Playwright浏览器类型
 * @param {string} accountName - 账号名称
 * @returns {Promise<object>} 浏览器启动选项
 */
async function getPersistentCacheConfig(browserType, accountName) {
  // 创建账号特定的缓存目录
  const cacheDir = path.join(os.tmpdir(), 'playwright-cache', accountName);
  
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  
  // 不返回userDataDir，而是返回其他缓存选项
  return {
    // 启用缓存相关选项
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    // 设置浏览器参数
    args: [
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      '--disk-cache-size=104857600', // 100MB缓存
      `--disk-cache-dir=${cacheDir}`,
      '--enable-features=NetworkServiceInProcess2'
    ]
  };
}

/**
 * 配置页面缓存策略
 * @param {import('playwright').Page} page - Playwright页面对象
 */
async function setupPageCaching(page) {
  // 启用资源缓存
  await page.route('**/*', route => {
    const request = route.request();
    // 对静态资源启用缓存
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
}

/**
 * 优化页面加载等待策略
 * @param {import('playwright').Page} page - Playwright页面对象
 * @param {string} url - 要导航到的URL
 * @param {object} options - 额外的导航选项
 */
async function optimizedGoto(page, url, options = {}) {
  console.log(`[INFO] 正在优化加载页面: ${url}`);
  
  // 默认等待网络空闲
  const defaultOptions = {
    waitUntil: 'networkidle',
    timeout: 60000
  };
  
  // 合并选项
  const mergedOptions = { ...defaultOptions, ...options };
  
  // 导航到页面
  await page.goto(url, mergedOptions);
  console.log(`[INFO] 页面加载完成: ${url}`);
}

module.exports = {
  getPersistentCacheConfig,
  setupPageCaching,
  optimizedGoto
};
