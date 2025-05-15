test123

# LLM 自动化问答工具

test
本项目基于 Node.js + Playwright，可自动批量提交问题到多个 LLM 平台（DeepSeek/元宝、豆包、千问/通义），精准抓取 LLM 回答和页面截图，具备高鲁棒性和断点续跑能力。支持多账号管理，可通过命令行参数或环境变量轻松切换不同账号和平台。

## 最新功能亮点
- **多账号支持**：可创建和管理多个账号，每个账号独立保存 Cookie
- **多平台支持**：支持 DeepSeek/元宝、豆包、千问/通义等多个 LLM 平台
- **命令行参数**：通过命令行参数轻松切换账号和平台
- **环境变量支持**：支持通过环境变量指定账号名称和输出目录
- **自动登录**：自动登录各平台并保存会话状态
- **智能 Cookie 管理**：自动查找和使用正确的 Cookie 文件
- **接口监听**：精准判断回答是否完整，自动补全"继续"
- **错误恢复**：网络异常/页面卡死自动刷新重试
- **进度跟踪**：显示处理进度和预计剩余时间
- **断点续跑**：已完成题目自动跳过

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
首次运行前请获取各 LLM 平台的登录状态：
```bash
npm run getCookies
```
按提示选择账号和平台，然后手动登录。系统会自动保存登录状态到对应账号的目录中。

### 多账号管理
通过 `getCookies` 工具，您可以：
- 创建多个账号
- 为每个账号配置不同的 LLM 平台登录状态
- 在操作完成后返回平台选择界面继续操作
- 输入 `q` 随时退出程序

### Cookie 存储结构
```
cookies/
  ├── default/            # 默认账号
  │   ├── account_info.json
  │   ├── deepseek-state.json
  │   ├── doubao-state.json
  │   └── qianwen-state.json
  └── custom_account/     # 自定义账号
      ├── account_info.json
      └── deepseek-state.json
```

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

### 基本用法
```bash
npm run start  # 使用默认设置运行
```

### 指定 LLM 平台
```bash
npm run deepseek  # 使用 DeepSeek/元宝平台
npm run doubao    # 使用豆包平台
npm run qianwen   # 使用千问/通义平台
```

### 命令行参数
```bash
# 指定账号和平台
node src/index.js --account zhaojian --llm deepseek

# 简写形式
node src/index.js -a zhaojian -l deepseek

# 指定输入文件和输出目录
node src/index.js -a zhaojian -l deepseek -i ./custom_questions.json -o ./custom_outputs

# 显示帮助信息
npm run help
```

### 环境变量
也可以通过环境变量指定账号和平台：
```bash
# Windows
set ACCOUNT_NAME=zhaojian
set LLM_TYPE=deepseek
set OUTPUT_DIR=./custom_outputs
npm run start

# Linux/Mac
ACCOUNT_NAME=zhaojian LLM_TYPE=deepseek OUTPUT_DIR=./custom_outputs npm run start
```

### 自动化特性
- 自动跳过已完成的题目（检查输出文件是否存在）
- 自动监听接口 [DONE]，如未完成会自动补"继续"
- 网络/页面异常自动刷新重试
- 自动处理广告弹窗
- 截图前自动滚动到底部，确保图片完整
- 显示处理进度和预计剩余时间

## 输出说明
- 默认情况下，结果保存在以下目录：
  - DeepSeek/元宝: `outputs/deepseek/`
  - 豆包: `outputs/doubao/`
  - 千问/通义: `outputs/qianwen/`

- 每个平台的输出文件：
  - `{platform}_output_XX.json`：每题的 prompt 与完整对话内容
  - `{platform}_output_XX.png`：完整页面截图
  
- 可以通过 `OUTPUT_DIR` 环境变量或 `--output` 参数自定义输出目录

## 常见问题
- **如何切换账号？** 使用 `--account` 参数或 `ACCOUNT_NAME` 环境变量指定账号名称。
- **找不到 Cookie 文件？** 确保已运行 `npm run getCookies` 并成功登录相应平台。
- **自动化还是要求登录？** 请确保用 Playwright 弹出的浏览器扫码登录并及时运行主脚本。
- **截图不完整？** 已自动滚动到底部，如仍有问题可调整等待时间或反馈。
- **部分题目被跳过？** 已有结果文件会自动跳过，删除对应 json/png 可重新抓取。
- **如何同时使用多个账号？** 可以在不同的终端窗口中使用不同的账号参数运行脚本。

## 其它说明
- 并行/重试脚本已被主流程替代，如需特殊并发处理可联系维护者。
- 如需自定义"继续"补全判据、最大重试次数等，可在各 LLM 脚本中调整。
- 多账号系统支持无限数量的账号，每个账号可以配置不同的平台。
- 所有脚本都支持通过环境变量和命令行参数进行配置。

---
如有更多自动化需求或遇到新页面结构，欢迎反馈和共建！

## 许可证

MIT
