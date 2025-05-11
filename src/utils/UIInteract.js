/**
 * 检查指定按钮是否具有 active 类，如果没有，则点击该按钮。
 * @param {import('playwright').Page} page - Playwright Page 对象。
 * @param {string} buttonSelector - 用于定位按钮的 CSS 选择器。
 * @param {string} activeClassNameOrPrefix - 表示激活状态的完整类名，或者类名的稳定前缀 (例如 "active-")。
 * @param {boolean} [checkPrefix=false] - 如果为 true，则 activeClassNameOrPrefix 被视为前缀进行检查。
 * @returns {Promise<boolean>} - 如果成功操作（点击或已激活）返回 true，发生错误或按钮未找到返回 false。
 */
async function ensureButtonIsActive(page, buttonSelector, activeClassNameOrPrefix, checkPrefix = false) {
    try {
      const button = page.locator(buttonSelector).first(); // 定位第一个匹配的按钮
      
      // 等待按钮可见，可以根据实际情况调整超时时间
      // 使用 waitFor而不是toBeVisible，因为它在元素不存在时不会立即抛出，更适合这里的逻辑
      try {
        await button.waitFor({ state: 'visible', timeout: 10000 });
      } catch (e) {
        console.warn(`Button "${buttonSelector}" not visible or found within timeout.`);
        return false; // 按钮未找到或不可见，不进行后续操作
      }
      
      const currentClasses = await button.getAttribute('class');
      let isActive = false;
  
      if (currentClasses) {
        if (checkPrefix) {
          isActive = currentClasses.split(' ').some(cls => cls.startsWith(activeClassNameOrPrefix));
        } else {
          isActive = currentClasses.includes(activeClassNameOrPrefix);
        }
      }
  
      if (!isActive) {
        console.log(`Button "${buttonSelector}" is not active (classes: "${currentClasses}"). Clicking it...`);
        await button.click();
        // 点击后可以短暂等待，以确保状态更新或动画完成
        await page.waitForTimeout(500); 
        console.log(`Button "${buttonSelector}" clicked.`);
        return true; // 成功点击
      } else {
        console.log(`Button "${buttonSelector}" is already active (classes: "${currentClasses}").`);
        return true; // 已经激活，也视为成功操作
      }
    } catch (error) {
      console.error(`Error in ensureButtonIsActive for selector "${buttonSelector}": ${error.message}.`);
      // Consider if you want to see the full stack trace for debugging: console.error(error);
      return false; // 操作中发生错误
    }
  }


  /**
 * Scrolls a specific element to its bottom with a basic check.
 * Warns if the element is not found or if it doesn't appear to be at the bottom after scrolling.
 * @param {import('playwright').Page} page - The Playwright page object.
 * @param {string} containerSelector - The CSS selector for the scrollable container element.
 * @param {number} [delayAfterScrollMs=200] - Delay in milliseconds after scrolling to allow rendering.
 * @returns {Promise<void>}
 */
async function scrollToElementBottom(page, containerSelector, delayAfterScrollMs = 200) {
    const wasScrolled = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (!element) {
        console.warn(`[scrollToElementBottom] Scroll container "${selector}" not found.`);
        return false; // Element not found
      }
      element.scrollTo({ top: element.scrollHeight, behavior: 'instant' });
      return true; // Scroll command issued
    }, containerSelector);
  
    if (!wasScrolled) {
      return; // Element wasn't found, warning already logged in page context
    }
  
    // Wait a bit for the scroll to take effect and for any dynamic content loading
    await page.waitForTimeout(delayAfterScrollMs);
  
    // Optional: verify if it's near the bottom
    const dimensions = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        return {
          scrollHeight: element.scrollHeight,
          scrollTop: element.scrollTop,
          clientHeight: element.clientHeight,
        };
      }
      return null;
    }, containerSelector);
  
    if (dimensions) {
      const { scrollHeight, scrollTop, clientHeight } = dimensions;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px tolerance
      if (!isAtBottom) {
        console.warn(`[scrollToElementBottom] Container "${containerSelector}" may not be fully scrolled to bottom. scrollTop: ${scrollTop}, scrollHeight: ${scrollHeight}, clientHeight: ${clientHeight}`);
      } else {
        // console.log(`[simpleScrollToElementBottom] Container "${containerSelector}" scrolled to bottom.`);
      }
    } else {
      // This case should ideally be caught by the initial 'wasScrolled' check,
      // but as a safeguard if element disappears between evaluate calls.
      console.warn(`[scrollToElementBottom] Scroll container "${containerSelector}" became unavailable after scroll attempt.`);
    }
  }
    
  // 辅助函数：获取格式化的时间戳 (for filenames)
function getFormattedTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`; // YYYY-MM-DD_HH-MM-SS
  }
  
  /**
   * Injects a div into the page that displays the current time, updated every second.
   * @param {import('playwright').Page} page - The Playwright page object.
   * @param {object} [options] - Styling and ID options for the div.
   * @param {string} [options.divId='live-time-display'] - ID for the injected div.
   * @param {object} [options.customStyles] - Custom CSS properties to apply/override.
   */
  async function injectTimeDisplay(page, options = {}) {
      const {
          divId = 'playwright-live-time-display', // Using a more specific ID
          customStyles = {}
      } = options;
  
      // Default styles, can be overridden by customStyles
      const defaultStyles = {
          position: 'fixed',
          top: '5px',
          left: '5px',
          padding: '3px 8px',
          background: 'rgba(0, 0, 0, 0.65)',
          color: 'white',
          fontSize: '12px',
          zIndex: '2147483647', // Max z-index to stay on top
          borderRadius: '3px',
          fontFamily: 'Consolas, "Courier New", monospace', // Monospaced font for stable width
          border: '1px solid rgba(255,255,255,0.3)',
          pointerEvents: 'none', // So it doesn't interfere with clicks
      };
  
      const finalStyles = { ...defaultStyles, ...customStyles };
      // Convert JS style object to CSS string
      const styleString = Object.entries(finalStyles)
          .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value};`)
          .join('');
  
      try {
          await page.evaluate(({ divId, styleString }) => {
              // Remove existing div if it's there (e.g., from a previous attempt if page wasn't fully reloaded)
              const existingDiv = document.getElementById(divId);
              if (existingDiv) {
                  existingDiv.remove();
              }
  
              const timeDiv = document.createElement('div');
              timeDiv.id = divId;
              timeDiv.style.cssText = styleString;
              document.body.appendChild(timeDiv);
  
              function updateLiveTime() {
                  const now = new Date();
                  const year = now.getFullYear();
                  const month = (now.getMonth() + 1).toString().padStart(2, '0');
                  const day = now.getDate().toString().padStart(2, '0');
                  const hours = now.getHours().toString().padStart(2, '0');
                  const minutes = now.getMinutes().toString().padStart(2, '0');
                  const seconds = now.getSeconds().toString().padStart(2, '0');
                  timeDiv.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
              }
  
              setInterval(updateLiveTime, 1000); // Update every second
              updateLiveTime(); // Initial call to display time immediately
          }, { divId, styleString });
          console.log(`[TimeDisplay] Injected live time display div (ID: ${divId}) into the page.`);
      } catch (e) {
          console.error(`[TimeDisplay] Failed to inject live time display: ${e.message}`);
      }
  }
  

module.exports = {
    ensureButtonIsActive,
    scrollToElementBottom,
    injectTimeDisplay,
    getFormattedTimestamp
}