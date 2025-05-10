# DeepSeek Chat 自动化问答工具

本项目基于 Node.js + Playwright，可自动批量提交问题到 DeepSeek（元宝）平台，精准抓取 LLM 回答和页面截图，具备高鲁棒性和断点续跑能力。

## 最新功能亮点
- 自动登录 DeepSeek Chat 并保存会话状态
- 自动批量提交问题，抓取完整回答和截图
- **接口监听 [DONE] 标志，精准判断回答是否完整**
- 回答被截断时自动补全“继续”，直至完整
- 网络异常/页面卡死自动刷新重试
- 自动检测并关闭广告弹窗
- 截图前自动滚动到底部，确保截图完整
- 支持断点续跑，已完成题目自动跳过

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

## 自动化运行说明

### 顺序处理（推荐，支持断点续跑）
```bash
npm run start
```
- 会自动跳过已完成的题目（按 question_number 检查 deepseek_output_XX.json 是否存在）
- 每题自动监听接口 [DONE]，如未完成会自动补“继续”
- 网络/页面异常自动刷新重试
- 自动处理广告弹窗
- 截图前自动滚动到底部，确保图片完整

## 输出说明
- 所有结果保存在 `src/deepseek/` 目录
  - `deepseek_output_XX.json`：每题的 prompt 与完整对话内容
  - `deepseek_output_XX.png`：完整页面截图

## 常见问题
- **自动化还是要求登录？** 请确保用 Playwright 弹出的浏览器扫码登录并及时运行主脚本。
- **截图不完整？** 已自动滚动到底部，如仍有问题可调整等待时间或反馈。
- **部分题目被跳过？** 已有结果文件会自动跳过，删除对应 json/png 可重新抓取。

## 其它说明
- 并行/重试脚本已被主流程替代，如需特殊并发处理可联系维护者。
- 如需自定义“继续”补全判据、最大重试次数等，可在 `src/index.js` 调整。

---
如有更多自动化需求或遇到新页面结构，欢迎反馈和共建！

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
