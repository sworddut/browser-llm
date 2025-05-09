# DeepSeek Chat 自动化问答工具

本项目可自动批量提交问题到 DeepSeek Chat，抓取 LLM 回答和页面截图，支持顺序、并行和带重试三种运行模式。

## 功能简介
- 自动登录 DeepSeek Chat 并保存会话状态
- 自动批量提交问题，抓取回答和截图
- 支持顺序处理、并行处理和带重试的顺序处理
- 自动处理“服务器繁忙”情况（带重试脚本）

## 安装与准备

### 1. 安装 Node.js
请确保已安装 Node.js（建议 v14 及以上）。

### 2. 安装依赖
```bash
npm install
```

### 3. 安装 Playwright 浏览器
**必须执行，否则无法自动化操作浏览器！**
```bash
npx playwright install chromium
```

## 登录状态获取
首次运行前请获取 DeepSeek Chat 的登录状态：
```bash
npm run getCookies
```
按提示手动登录，成功后会生成 `deepseek-state.json`。

## 问题数据准备
编辑 `src/files/extracted_questions.json`，格式示例：
```json
[
  {
    "question_number": "1",
    "condition": "条件描述",
    "specific_questions": ["问题1", "问题2"]
  }
]
```

## 三种运行方式

### 1. 顺序处理（逐题发送）
```bash
npm run start
# 或
npm run screenshot
```

### 2. 并行处理（多个页面同时发送，效率更高）
```bash
npm run parallel
```
- 可在 `src/parallel_index.js` 调整最大并发数

### 3. 带重试的顺序处理（自动应对“服务器繁忙”）
```bash
npm run retry
```
- 检测到“服务器繁忙”会自动等待2分钟重试，最多重试2次
- 重试后输出的 JSON 会有 `retried: true` 字段
- 推荐大批量任务优先用此模式，减少人工干预

## 配置说明
- 最大并发数、重试次数、等待时间等参数可在对应 js 文件顶部调整

## 输出说明
- 每题生成 `deepseek_output_题号.json`（包含问题、全部回答、是否重试）
- 每题生成 `deepseek_output_题号.png`（完整页面截图）

## 常见问题与故障排除
- **Playwright 报错/无法启动**：请先执行 `npx playwright install chromium`
- **登录状态失效**：重新运行 `npm run getCookies` 获取
- **遇到“服务器繁忙”**：推荐用 `npm run retry`，脚本会自动重试
- **DeepSeek 页面结构变动**：如脚本无法抓取内容，请检查并调整选择器
- **高并发崩溃**：降低并发数（`MAX_CONCURRENT`）

## 许可证
MIT
## 配置选项

您可以在 `src/parallel_index.js` 中调整以下参数：

```javascript
const MAX_CONCURRENT = 3;            // 最大并行处理数量
const WAIT_TIMEOUT = 10 * 60 * 1000; // 最长等待时间（毫秒）
const STABLE_CHECK_INTERVAL = 2000;  // 检查内容稳定的间隔（毫秒）
const REQUIRED_STABLE_COUNT = 2;     // 需要多少次检测到内容稳定才认为完成
```

## 输出文件

脚本运行后会在 `src` 目录下生成以下文件：

- `deepseek_output_问题编号.json`：包含问题和回答内容的 JSON 文件
- `deepseek_output_问题编号.png`：包含完整对话的页面截图

## 注意事项

1. 确保您有稳定的网络连接
2. DeepSeek Chat 的界面可能会更新，如果脚本无法正常工作，可能需要更新选择器
3. 如果并行处理时遇到浏览器崩溃或性能问题，请减少 `MAX_CONCURRENT` 的值
4. 登录状态有时效性，如果遇到登录失效，请重新运行 `npm run getCookies`

## 故障排除

- **问题**：无法找到元素或点击按钮
  **解决方案**：检查选择器是否需要更新，DeepSeek Chat 的界面可能已更改

- **问题**：浏览器崩溃
  **解决方案**：减少并行处理的数量，调低 `MAX_CONCURRENT` 值

- **问题**：登录状态失效
  **解决方案**：重新运行 `npm run getCookies` 获取新的登录状态

## 许可证

MIT
