// file: utils/index.js

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
 * 监听 Playwright 页面上的 SSE (Server-Sent Events) 响应，
 * 直到检测到特定的结束条件或超时。
 * @param {import('playwright').Page} page - Playwright Page 对象。
 * @param {string} targetUrlPart - URL中用于识别目标SSE流的部分字符串。
 * @param {function(Object, Object): boolean} completionChecker - 一个函数，接收 (eventDataWrapper, eventData) 作为参数，
 *                                                               返回 true 表示流已完成，false 表示未完成。
 *                                                               eventDataWrapper 是原始 data: 后面的 JSON 对象。
 *                                                               eventData 是 eventDataWrapper.event_data 解析后的 JSON 对象。
 * @param {number} timeoutMs - 等待结束条件的最大毫秒数。
 * @returns {Promise<{completed: boolean, errorOccurred: boolean, lastMatchingEventData?: Object}>}
 *          - completed: true 如果 completionChecker 返回 true。
 *          - errorOccurred: true 如果在处理流时发生错误或超时。
 *          - lastMatchingEventData: (可选) 最后一个导致 completionChecker 返回 true 的 eventData。
 */
async function waitForSSECompletion(page, targetUrlPart, completionChecker, timeoutMs) {
    return new Promise((resolve) => {
      let gotDone = false;
      let streamError = false;
      let timeoutId;
      let lastMatchingEventData = null; // 用于存储导致完成的那个事件数据
  
      const modifiedOnResponse = async (response) => {
        const url = response.url();
        if (url.includes(targetUrlPart)) {
          let currentResponseGotDone = false;
          let currentResponseStreamError = false;
          try {
            const contentType = response.headers()['content-type'];
            if (contentType && contentType.includes('text/event-stream')) {
              // console.log(`[SSE Util] Attached to SSE stream: ${url}`);
              const sseText = await response.text();
              const lines = sseText.split('\n');
              for (const line of lines) {
                if (currentResponseGotDone) break;
                if (line.startsWith('data:')) {
                  const jsonDataString = line.substring(5).trim();
                  if (jsonDataString && jsonDataString !== '{}') {
                    let eventDataWrapper = null;
                    let eventData = null;
                    try {
                      eventDataWrapper = JSON.parse(jsonDataString);
                      if (eventDataWrapper && eventDataWrapper.event_data) {
                        try {
                           eventData = JSON.parse(eventDataWrapper.event_data);
                        } catch (innerParseError){
                          // console.warn(`[SSE Util] WARN: Parsing inner event_data JSON from SSE line: "${eventDataWrapper.event_data}". Err: ${innerParseError.message}`);
                          // eventData 将保持为 null
                        }
                      }
                      // 调用用户提供的检查器函数
                      if (completionChecker(eventDataWrapper, eventData)) {
                        currentResponseGotDone = true;
                        lastMatchingEventData = eventData || eventDataWrapper; // 保存导致完成的事件
                      }
                    } catch (parseError) {
                      console.warn(`[SSE Util] WARN: Parsing outer JSON from SSE line: "${jsonDataString}". Err: ${parseError.message}`);
                      currentResponseStreamError = true;
                    }
                  }
                }
              }
            } else {
              // 处理非 SSE 响应，如果 completionChecker 也能处理这种情况
              // 为了简化，这里假设 completionChecker 主要是为 SSE 设计的
              // 如果需要，可以扩展让 completionChecker 也处理普通 response.text()
              // console.log(`[SSE Util] Non-SSE response from ${url}. Checking if legacy completion applies.`);
              // const responseText = await response.text();
              // try {
              //    const parsedText = JSON.parse(responseText); // 尝试解析为 JSON
              //    if (completionChecker(parsedText, null)) { // 假设 eventData 为 null
              //        currentResponseGotDone = true;
              //        lastMatchingEventData = parsedText;
              //    }
              // } catch { /* ignore if not JSON or checker fails */ }
            }
          } catch (e) {
            console.error(`[SSE Util] ERROR: Processing response from ${url}: ${e.message}`);
            currentResponseStreamError = true;
          } finally {
            if (currentResponseGotDone || currentResponseStreamError) {
              gotDone = gotDone || currentResponseGotDone;
              streamError = streamError || currentResponseStreamError;
              if (gotDone || streamError) {
                clearTimeout(timeoutId);
                page.removeListener('response', modifiedOnResponse);
                if (!resolve.__called) {
                  // console.log(`[SSE Util] Resolving: completed=${gotDone}, error=${streamError}`);
                  resolve({ completed: gotDone, errorOccurred: streamError, lastMatchingEventData });
                  resolve.__called = true;
                }
              }
            }
          }
        }
      };
      resolve.__called = false;
      page.on('response', modifiedOnResponse);
  
      timeoutId = setTimeout(() => {
        // console.warn(`[SSE Util] WARN: Timeout (${timeoutMs / 1000}s) waiting for SSE from "${targetUrlPart}".`);
        page.removeListener('response', modifiedOnResponse);
        if (!resolve.__called) {
          resolve({ completed: gotDone, errorOccurred: streamError || !gotDone, lastMatchingEventData });
          resolve.__called = true;
        }
      }, timeoutMs);
    });
  }

/**
 * (New Version - For Yuanbao or simple text-based SSE completion)
 * Waits for an SSE (Server-Sent Events) stream from a specific URL to signal completion
 * by checking the *entire response text* for a specific string.
 * This version DOES NOT attempt to parse individual SSE lines beyond finding the signal.
 * The Promise resolves on successful detection of the signal, and rejects on timeout or error.
 *
 * @param {import('playwright').Page} page - The Playwright page object.
 * @param {string | RegExp} urlPattern - A string (e.g., URL prefix) or RegExp to match the SSE stream URL.
 * @param {string} doneSignalText - The text string in the SSE data that indicates completion (e.g., "[DONE]").
 * @param {number} [timeoutMs=300000] - Timeout in milliseconds (default: 5 minutes).
 * @param {object} [options] - Optional parameters.
 * @param {boolean} [options.log=false] - Whether to log progress.
 * @param {string} [options.logPrefix='[SSE_SimpleText]'] - Prefix for logs.
 * @returns {Promise<void>} Resolves when the done signal is found in a matched response, rejects on timeout or if signal not found in any matched response.
 */
async function waitForSSECompletion_SimpleText(page, urlPattern, doneSignalText, timeoutMs = 5 * 60 * 1000, options = {}) {
  const { log = false, logPrefix = '[SSE_SimpleText]' } = options;

  return new Promise((resolve, reject) => {
    let timeoutId = null;
    let listenerActive = true; // Guard to ensure cleanup and single resolution

    const sseListener = async (response) => {
      if (!listenerActive) return;

      const resUrl = response.url();
      let match = false;
      if (typeof urlPattern === 'string' && resUrl.startsWith(urlPattern)) {
        match = true;
      } else if (urlPattern instanceof RegExp && urlPattern.test(resUrl)) {
        match = true;
      }

      if (match) {
        if (log) console.log(`${logPrefix} Matched URL: ${resUrl}`);
        try {
          const status = response.status(); // Get status *before* awaiting text() potentially

          // Wait for the response to fully complete before checking its content.
          // response.text() waits for the response to finish and returns the full body.
          const responseBodyText = await response.text(); // Can throw if response is aborted

          if (status >= 400) { // Check status AFTER getting body in case issues are post-headers
            if (!listenerActive) return;
            listenerActive = false;
            clearTimeout(timeoutId);
            page.removeListener('response', sseListener);
            const errorMsg = `SSE stream error: HTTP ${status} for URL ${resUrl}. Body: ${responseBodyText.slice(0,100)}`;
            if (log) console.warn(`${logPrefix} ${errorMsg}`);
            reject(new Error(errorMsg));
            return;
          }

          if (responseBodyText.includes(doneSignalText)) {
            if (!listenerActive) return;
            listenerActive = false;
            clearTimeout(timeoutId);
            page.removeListener('response', sseListener);
            if (log) console.log(`${logPrefix} "${doneSignalText}" found in response from ${resUrl}.`);
            resolve(); // Signal found, success!
          } else {
            // This 'else' branch means a *matched* response completed *without* the done signal.
            // For SSE, this might be an intermediate response if the stream is broken into multiple HTTP responses (rare).
            // More commonly, it means THE API call that was supposed to give [DONE] finished but didn't.
            // For this _SimpleText version, we usually expect one response to contain the [DONE].
            // If it could be spread across multiple 'response' events for the same logical stream, this function would need to aggregate.
            // However, standard SSE is one HTTP connection.
            if (log) console.log(`${logPrefix} "${doneSignalText}" NOT found in completed response from ${resUrl}. Listener remains active for other potential matches or timeout.`);
            // DO NOT reject here immediately. Another 'response' event might match, or timeout will handle it.
            // If this was THE ONLY expected response, timeout will catch it.
            // If you are certain that any matched response *must* contain [DONE] or it's an error, you could reject:
            // if (!listenerActive) return;
            // listenerActive = false;
            // clearTimeout(timeoutId);
            // page.removeListener('response', sseListener);
            // const errorMsg = `Matched SSE response from ${resUrl} (HTTP ${status}) completed BUT DID NOT contain "${doneSignalText}".`;
            // if (log) console.warn(`${logPrefix} ${errorMsg}`);
            // reject(new Error(errorMsg));
          }
        } catch (e) { // Catch errors from response.status(), response.text(), etc.
          if (!listenerActive) return;
          // Don't necessarily stop listening on any processing error for ONE response,
          // unless it's critical or the listener itself is compromised.
          // For example, if response.text() fails because the connection was prematurely closed,
          // that specific response cannot be checked.
          if (log) console.warn(`${logPrefix} Error processing a matched SSE response from ${resUrl}: ${e.message}. Listener remains active.`);
          // If this error is fatal for the whole operation:
          // listenerActive = false;
          // clearTimeout(timeoutId);
          // page.removeListener('response', sseListener);
          // reject(new Error(`Critical error processing response from ${resUrl}: ${e.message}`));
        }
      }
    };

    timeoutId = setTimeout(() => {
      if (!listenerActive) return;
      listenerActive = false;
      page.removeListener('response', sseListener);
      const patternStr = typeof urlPattern === 'string' ? urlPattern : urlPattern.toString();
      const errorMsg = `Timeout (${timeoutMs / 1000}s) waiting for SSE containing "${doneSignalText}" from URL matching "${patternStr}".`;
      if (log) console.warn(`${logPrefix} ${errorMsg}`);
      reject(new Error(errorMsg)); // Timeout is a definitive failure
    }, timeoutMs);

    page.on('response', sseListener);
    if (log) console.log(`${logPrefix} Listener attached for URL pattern "${typeof urlPattern === 'string' ? urlPattern : urlPattern.toString()}" and signal "${doneSignalText}". Awaiting full response text check.`);
  });
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
  


  // 导出函数，使其可以在其他文件中被 require
  module.exports = {
    ensureButtonIsActive,
    waitForSSECompletion,
    scrollToElementBottom,
    waitForSSECompletion_SimpleText
  };