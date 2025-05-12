const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        console.log('启动浏览器...');
        const browser = await chromium.launch({ headless: false });
        
        // 创建上下文，尝试加载 cookie
        let context;
        const cookiePath = './cookies/default/qianwen-state.json';
        
        if (fs.existsSync(cookiePath)) {
            console.log(`使用 cookie 文件: ${cookiePath}`);
            context = await browser.newContext({ storageState: cookiePath });
        } else {
            console.log('Cookie 文件不存在，创建新的上下文');
            context = await browser.newContext();
        }
        
        // 创建页面并添加监听器
        const page = await context.newPage();
        
        // 监听网络请求，查找 SSE 请求
        page.on('request', request => {
            const url = request.url();
            if (url.includes('efm-ws.aliyuncs.com/sse')) {
                console.log(`捕获到 SSE 请求: ${url}`);
            }
        });
        
        // 监听网络响应，查找 SSE 响应
        page.on('response', async response => {
            const url = response.url();
            if (url.includes('efm-ws.aliyuncs.com/sse')) {
                console.log(`捕获到 SSE 响应: ${url}`);
                try {
                    const responseText = await response.text();
                    console.log('响应内容:', responseText.substring(0, 500));
                    
                    // 保存响应内容到文件
                    const debugDir = path.join(process.cwd(), 'debug');
                    if (!fs.existsSync(debugDir)) {
                        fs.mkdirSync(debugDir, { recursive: true });
                    }
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const filename = path.join(debugDir, `sse_response_${timestamp}.json`);
                    fs.writeFileSync(filename, responseText, 'utf8');
                    console.log(`SSE 响应内容已保存到文件: ${filename}`);
                    
                    // 检查是否包含 streamEnd
                    const streamEndRegex = /"streamEnd"\s*:\s*true/;
                    const hasStreamEnd = streamEndRegex.test(responseText);
                    console.log(`响应中是否包含 streamEnd: ${hasStreamEnd}`);
                    if (hasStreamEnd) {
                        console.log('检测到完成信号！');
                    }
                } catch (err) {
                    console.error('读取响应内容时出错:', err.message);
                }
            }
        });
        
        // 注入脚本来监听 EventSource
        await page.addInitScript(() => {
            console.log('注入 EventSource 监听脚本...');
            window.__sse_messages = [];
            
            // 保存原始的 EventSource
            if (!window.__originalEventSource) {
                window.__originalEventSource = window.EventSource;
            }
            
            // 重写 EventSource
            window.EventSource = function(url, options) {
                console.log('创建 EventSource:', url);
                const es = new window.__originalEventSource(url, options);
                
                es.addEventListener('open', function(e) {
                    console.log('EventSource 已打开连接:', url);
                });
                
                es.addEventListener('message', function(e) {
                    console.log('EventSource 收到消息:', e.data.substring(0, 100));
                    window.__sse_messages.push({
                        timestamp: new Date().toISOString(),
                        data: e.data,
                        lastEventId: e.lastEventId
                    });
                });
                
                es.addEventListener('error', function(e) {
                    console.error('EventSource 错误');
                });
                
                return es;
            };
        });
        
        // 导航到千问页面
        console.log('导航到千问页面...');
        await page.goto('https://bailian.console.aliyun.com/?spm=5176.29597918.J_SEsSjsNv72yRuRFS2VknO.2.16af7b08ALF9pt&tab=model#/efm/model_experience_center/text?modelId=qwq-32b', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
        
        // 等待页面加载完成
        console.log('等待页面加载完成...');
        await page.waitForSelector('body', { timeout: 30000 });
        
        // 等待回复
        console.log('等待回复...');
        await page.waitForTimeout(10000); // 等待10秒
        
        // 获取 SSE 消息
        const messages = await page.evaluate(() => window.__sse_messages || []);
        console.log(`收集到 ${messages.length} 条 SSE 消息`);
        
        if (messages.length > 0) {
            // 保存消息到文件
            const debugDir = path.join(process.cwd(), 'debug');
            if (!fs.existsSync(debugDir)) {
                fs.mkdirSync(debugDir, { recursive: true });
            }
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = path.join(debugDir, `eventSource_messages_${timestamp}.json`);
            fs.writeFileSync(filename, JSON.stringify(messages, null, 2), 'utf8');
            console.log(`EventSource 消息已保存到文件: ${filename}`);
        }
        
        // 等待一段时间后关闭浏览器
        console.log('测试完成，等待5秒后关闭浏览器...');
        await page.waitForTimeout(5000);
        await browser.close();
        console.log('浏览器已关闭');
        
    } catch (error) {
        console.error('测试过程中出错:', error);
    }
})();
