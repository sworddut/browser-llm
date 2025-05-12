/**
 * 豆包 SSE 拦截测试脚本
 * 用于测试 SSE 拦截器在豆包平台上的工作情况
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const utils = require('./utils/index.js');
const sseInterceptor = require('./utils/sseInterceptor.js');

(async () => {
    try {
        console.log('启动浏览器...');
        const browser = await chromium.launch({ headless: false });
        
        // 创建上下文，尝试加载 cookie
        let context;
        const cookiePath = './cookies/default/doubao-state.json';
        
        if (fs.existsSync(cookiePath)) {
            console.log(`使用 cookie 文件: ${cookiePath}`);
            context = await browser.newContext({ storageState: cookiePath });
        } else {
            console.log('Cookie 文件不存在，创建新的上下文');
            context = await browser.newContext();
        }
        
        // 创建页面
        const page = await context.newPage();
        
        // 注入 SSE 拦截脚本
        await sseInterceptor.injectSSEInterceptor(page, 'PullExperienceMessage', { log: true });
        
        // 导航到豆包页面
        console.log('导航到豆包页面...');
        await page.goto('https://console.volcengine.com/ark/region:ark+cn-beijing/experience/chat', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
        
        // 等待页面加载完成
        console.log('等待页面加载完成...');
        await page.waitForSelector('body', { timeout: 30000 });
        
        // 输入问题并发送
        console.log('准备输入问题...');
        const inputSelector = 'textarea.arco-textarea';
        await page.waitForSelector(inputSelector, { timeout: 20000 });
        
        await page.focus(inputSelector);
        await page.waitForTimeout(1000); // 等待聚焦生效
        await page.fill(inputSelector, '请简要介绍一下行列式的计算');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        
        console.log('问题已发送，等待回复...');
        
        // 使用 waitForSSECompletion_SimpleText 函数等待 SSE 完成
        try {
            await utils.waitForSSECompletion_SimpleText(
                page,
                'https://ml-platform-api.console.volcengine.com/ark/bff/api/cn-beijing/2024/PullExperienceMessage',
                '[DONE]',
                2 * 60 * 1000,
                { log: true, logPrefix: '[TEST] ' }
            );
            console.log('SSE 处理完成 - 成功');
        } catch (error) {
            console.warn(`SSE 处理出错: ${error.message}`);
        }
        
        // 等待一段时间以确保所有数据都被收集
        console.log('等待额外时间以确保数据收集完成...');
        await page.waitForTimeout(5000);
        
        // 获取 SSE 消息
        const messages = await sseInterceptor.getSSEMessages(page, { log: true });
        console.log(`收集到 ${messages.length} 条 SSE 消息`);
        
        if (messages.length > 0) {
            // 保存原始 SSE 消息到文件
            const debugDir = path.join(process.cwd(), 'debug');
            if (!fs.existsSync(debugDir)) {
                fs.mkdirSync(debugDir, { recursive: true });
            }
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const rawFilename = path.join(debugDir, `doubao_raw_sse_${timestamp}.json`);
            fs.writeFileSync(rawFilename, JSON.stringify(messages, null, 2), 'utf8');
            console.log(`原始 SSE 消息已保存到文件: ${rawFilename}`);
            
            // 提取所有内容字段
            const content = sseInterceptor.extractContentFromSSE(messages, { log: true });
            
            // 保存提取的内容到文件
            if (content) {
                const contentFilename = path.join(debugDir, `doubao_extracted_content_${timestamp}.txt`);
                fs.writeFileSync(contentFilename, content, 'utf8');
                console.log(`提取的内容已保存到文件: ${contentFilename}`);
                console.log(`提取的内容长度: ${content.length} 字符`);
                console.log(`内容预览: ${content.substring(0, 200)}...`);
            } else {
                console.log('未能从 SSE 消息中提取到内容');
            }
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
