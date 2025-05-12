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
 * 使用 fetch API 监听 SSE 流，更可靠地处理 SSE 事件
 * 这个函数不使用 EventSource，而是直接使用 fetch API 来处理 SSE 流
 * 
 * @param {import('playwright').Page} page - Playwright 页面对象
 * @param {string} sseUrl - SSE 流的完整 URL
 * @param {string|RegExp} completionSignal - 完成信号（字符串或正则表达式）
 * @param {Object} options - 配置选项
 * @param {number} options.timeoutMs - 全局超时时间（毫秒）
 * @param {boolean} options.log - 是否输出日志
 * @param {string} options.logPrefix - 日志前缀
 * @param {number} options.inactivityTimeoutMs - 无活动超时时间（毫秒）
 * @returns {Promise<{completed: boolean, messages: Array<string>, error: string|null}>}
 */
async function waitForSSECompletion_EventSource(page, sseUrl, completionSignal, options = {}) {
  const {
    timeoutMs = 10 * 60 * 1000, // 默认10分钟
    log = true,
    logPrefix = '[SSE_EventSource] ',
    inactivityTimeoutMs = 60000, // 默认60秒无活动超时
    headers = {}
  } = options;
  
  if (log) console.log(`${logPrefix}开始监听 SSE 流: ${sseUrl}`);
  
  // 创建一个函数来检查完成信号
  const checkCompletionSignal = (text) => {
    if (completionSignal instanceof RegExp) {
      return completionSignal.test(text);
    } else {
      return text.includes(completionSignal);
    }
  };
  
  return new Promise((resolve) => {
    let globalTimeoutId = null;
    let inactivityTimeoutId = null;
    let lastActivityTime = Date.now();
    let completed = false;
    let messages = [];
    let error = null;
    let abortController = new AbortController();
    
    // 清理函数
    const cleanup = () => {
      clearTimeout(globalTimeoutId);
      clearTimeout(inactivityTimeoutId);
      abortController.abort();
    };
    
    // 重置无活动超时
    const resetInactivityTimeout = () => {
      clearTimeout(inactivityTimeoutId);
      inactivityTimeoutId = setTimeout(() => {
        if (log) console.log(`${logPrefix}无活动超时 (${inactivityTimeoutMs/1000}s) 到达。自上次数据接收后无新数据。`);
        cleanup();
        resolve({ completed, messages, error: error || '无活动超时' });
      }, inactivityTimeoutMs);
    };
    
    // 设置全局超时
    globalTimeoutId = setTimeout(() => {
      if (log) console.warn(`${logPrefix}全局超时 (${timeoutMs/1000}s) 到达。`);
      cleanup();
      resolve({ completed, messages, error: error || '全局超时' });
    }, timeoutMs);
    
    // 初始化无活动超时
    resetInactivityTimeout();
    
    // 使用 fetch API 监听 SSE 流
    (async () => {
      try {
        // 在 Node.js 环境中执行 fetch，而不是在浏览器上下文中
        const response = await fetch(sseUrl, {
          headers: {
            'Accept': 'text/event-stream',
            ...headers
          },
          signal: abortController.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        if (!response.body) {
          throw new Error('Response body is null');
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          
          // 更新最后活动时间
          lastActivityTime = Date.now();
          resetInactivityTimeout();
          
          // 解码接收到的数据
          const chunk = decoder.decode(value, { stream: true });
          buffer += chunk;
          
          // 将数据保存到调试目录
          if (log) console.log(`${logPrefix}收到数据: ${chunk.substring(0, 100)}${chunk.length > 100 ? '...' : ''}`);
          
          // 处理接收到的数据
          const lines = buffer.split('\n');
          buffer = lines.pop() || ''; // 保留最后一行（可能不完整）
          
          for (const line of lines) {
            if (line.startsWith('data:')) {
              const data = line.substring(5).trim();
              messages.push(data);
              
              // 检查完成信号
              if (checkCompletionSignal(data)) {
                if (log) console.log(`${logPrefix}检测到完成信号`);
                completed = true;
                cleanup();
                resolve({ completed, messages, error });
                return;
              }
            }
          }
          
          // 检查整个 buffer 是否包含完成信号
          if (checkCompletionSignal(buffer)) {
            if (log) console.log(`${logPrefix}在 buffer 中检测到完成信号`);
            messages.push(buffer);
            completed = true;
            cleanup();
            resolve({ completed, messages, error });
            return;
          }
        }
        
        // 正常结束
        if (log) console.log(`${logPrefix}SSE 流正常结束`);
        cleanup();
        resolve({ completed, messages, error });
        
      } catch (err) {
        if (err.name === 'AbortError') {
          // 这是我们自己的取消操作，不需要处理
          return;
        }
        
        if (log) console.error(`${logPrefix}Fetch 错误: ${err.message}`);
        error = `Fetch 错误: ${err.message}`;
        cleanup();
        resolve({ completed, messages, error });
      }
    })();
  });
}

/**
 * 拦截并获取符合特定模式的 SSE URL
 * 这个函数会设置一个网络请求拦截器，捕获匹配的 URL
 * 
 * @param {import('playwright').Page} page - Playwright 页面对象
 * @param {string|RegExp} urlPattern - URL 模式（字符串或正则表达式）
 * @param {Object} options - 配置选项
 * @param {number} options.timeoutMs - 超时时间（毫秒）
 * @param {boolean} options.log - 是否输出日志
 * @param {string} options.logPrefix - 日志前缀
 * @returns {Promise<string|null>} 返回捕获到的 URL 或 null
 */
async function captureSSEUrl(page, urlPattern, options = {}) {
  const {
    timeoutMs = 30000, // 默认30秒
    log = true,
    logPrefix = '[CaptureSSEUrl] '
  } = options;
  
  return new Promise((resolve) => {
    let timeoutId = null;
    let capturedUrl = null;
    
    // 设置超时
    timeoutId = setTimeout(() => {
      if (log) console.warn(`${logPrefix}超时 (${timeoutMs/1000}s) 等待匹配 URL。`);
      page.removeListener('request', requestHandler);
      resolve(null);
    }, timeoutMs);
    
    // 请求处理函数
    const requestHandler = (request) => {
      const url = request.url();
      let match = false;
      
      if (typeof urlPattern === 'string' && url.includes(urlPattern)) {
        match = true;
      } else if (urlPattern instanceof RegExp && urlPattern.test(url)) {
        match = true;
      }
      
      if (match) {
        if (log) console.log(`${logPrefix}捕获到匹配 URL: ${url}`);
        capturedUrl = url;
        clearTimeout(timeoutId);
        page.removeListener('request', requestHandler);
        resolve(url);
      }
    };
    
    // 添加请求监听器
    page.on('request', requestHandler);
    
    if (log) console.log(`${logPrefix}开始监听 URL 模式: ${typeof urlPattern === 'string' ? urlPattern : urlPattern.toString()}`);
  });
}

  // 导出函数，使其可以在其他文件中被 require
  module.exports = {
    waitForSSECompletion,
    waitForSSECompletion_SimpleText,
    waitForSSECompletion_EventSource,
    captureSSEUrl
  };