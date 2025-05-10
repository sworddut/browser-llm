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


## 许可证

MIT
