#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Markdown和LaTeX渲染器 - 使用KaTeX渲染LaTeX公式，同时支持Markdown格式
专为渲染LLM输出的混合内容设计
"""

import os
import sys
import argparse
import tempfile
import re
from pathlib import Path
from playwright.sync_api import sync_playwright

class MdLatexRenderer:
    """Markdown和LaTeX渲染器类，使用Playwright、KaTeX和markdown-it实现渲染"""
    
    def __init__(self, output_dir="rendered_output", dark_mode=False):
        """
        初始化渲染器
        
        Args:
            output_dir: 输出图片的目录
            dark_mode: 是否使用暗色模式
        """
        self.output_dir = output_dir
        self.dark_mode = dark_mode
        
        # 创建输出目录
        os.makedirs(output_dir, exist_ok=True)
        
        # HTML模板 - 使用KaTeX和markdown-it
        self.html_template = """<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Markdown and LaTeX Renderer</title>
    <!-- KaTeX CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <!-- KaTeX JS -->
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
    <!-- Markdown-it JS -->
    <script src="https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: %s; /* text_color */
            background-color: %s; /* bg_color */
            margin: 0;
            padding: %spx; /* padding */
            position: relative;
        }
        .content-container {
            padding: 20px;
            border-radius: 8px;
            max-width: 800px;
            margin: 0 auto;
            margin-top: 30px; /* 为LLM名称腾出空间 */
        }
        .timestamp {
            position: relative;
            text-align: right;
            font-size: 14px;
            color: #333;
            margin-bottom: 15px;
            padding: 5px 0;
        }
        .llm-name {
            position: relative;
            text-align: left;
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
            padding: 5px 0;
        }
        pre {
            background-color: %s; /* code_bg */
            padding: 16px;
            border-radius: 4px;
            overflow-x: auto;
            border: 1px solid %s; /* border_color */
        }
        code {
            font-family: monospace;
            background-color: %s; /* code_bg */
            padding: 0.2em 0.4em;
            border-radius: 3px;
        }
        blockquote {
            border-left: 4px solid %s; /* blockquote_border */
            margin-left: 0;
            padding-left: 16px;
            color: %s; /* blockquote_text */
        }
        table {
            border-collapse: collapse;
            width: 100%%;
            margin-bottom: 16px;
            border: 1px solid %s; /* border_color */
        }
        th, td {
            border: 1px solid %s; /* border_color */
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: %s; /* table_header_bg */
        }
        img { max-width: 100%%; }
        .katex-display {
            overflow-x: auto;
            overflow-y: hidden;
            padding: 5px 0;
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 20px;
            margin-bottom: 10px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="content-container">
        <div id="content"></div>
    </div>

    <script>
    // 设置一个标志，表示脚本开始执行
    console.log('Script started');
    
    // 这是一个直接注入的原始Markdown内容
    const rawContent = %s;
    console.log('Raw content loaded');
    
    // 初始化markdown-it
    const md = window.markdownit({
        html: true,
        linkify: true,
        typographer: true
    });
    console.log('markdown-it initialized');
    
    // 渲染Markdown到内容区域
    try {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = md.render(rawContent);
        console.log('Markdown rendered');
        
        // 渲染LaTeX公式
        renderMathInElement(contentElement, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false,
            strict: false
        });
        console.log('LaTeX rendered');
        
        // 立即设置渲染完成标志
        window.renderedComplete = true;
        console.log('window.renderedComplete set to true');
    } catch (error) {
        console.error('Error during rendering:', error);
        // 即使出错也设置标志，以避免超时
        window.renderedComplete = true;
        console.error('Set renderedComplete despite error');
    }
    </script>
</body>
</html>
"""
    
    def _prepare_html(self, content, padding=20):
        """准备HTML内容
        
        Args:
            content: Markdown和LaTeX混合内容
            padding: 内边距（像素）
        
        Returns:
            格式化后的HTML内容
        """
        # 设置颜色主题（默认为浅色主题）
        if self.dark_mode:
            bg_color = "#1e1e1e"
            text_color = "#f8f8f8"
            code_bg = "#2d2d2d"
            border_color = "#444444"
            blockquote_border = "#666666"
            blockquote_text = "#bbbbbb"
            table_header_bg = "#333333"
        else: # 浅色主题
            bg_color = "#ffffff"
            text_color = "#333333"
            code_bg = "#f5f5f5"
            border_color = "#dddddd"
            blockquote_border = "#dddddd"
            blockquote_text = "#777777"
            table_header_bg = "#f5f5f5"
        
        # 处理内容，去除每行开头的多余空格（防止被解释为代码块）
        processed_content = "\n".join([line.lstrip() if line.startswith("    ") else line for line in content.split("\n")])
        
        # 转义处理后的内容，以便安全地插入到JavaScript中
        content_escaped = json.dumps(processed_content)
        
        # 生成完整HTML - 注意参数顺序和数量必须与模板中的%s占位符匹配
        return self.html_template % (
            text_color,                # body color
            bg_color,                  # body background-color
            padding,                   # body padding
            code_bg,                   # pre background-color
            border_color,              # pre border
            code_bg,                   # code background-color
            blockquote_border,         # blockquote border-left
            blockquote_text,           # blockquote color
            border_color,              # table border
            border_color,              # th, td border
            table_header_bg,           # th background-color
            content_escaped            # JavaScript content
        )
    
    def render_to_image(self, content, output_filename=None, width=800, height=None, padding=20, llm_name=""):
        """
        渲染Markdown和LaTeX混合内容为图片
        
        Args:
            content: Markdown和LaTeX混合内容
            output_filename: 输出文件名（不含路径和扩展名）
            width: 图片宽度
            height: 图片高度（如果为None，则自动计算）
            padding: 内边距
            llm_name: LLM模型名称，显示在左上角
            
        Returns:
            生成的图片路径
        """
        if output_filename is None:
            # 使用临时文件名
            output_filename = f"rendered_{next(tempfile._get_candidate_names())}"
        
        # 确保文件名没有扩展名
        output_filename = os.path.splitext(output_filename)[0]
        output_path = os.path.join(self.output_dir, f"{output_filename}.png")
        
        # 生成当前时间戳
        from datetime import datetime
        current_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # 处理内容中的转义序列问题
        # 对于包含LaTeX公式的内容，最简单的方法是使用原始字符串
        # 由于我们无法直接将输入转换为原始字符串，我们可以尝试修复常见的转义序列问题
        
        # 替换常见的转义序列
        processed_content = content
        
        # 简化处理方法，直接将内容传递给渲染器
        # 我们依赖于HTML模板中的JavaScript来处理LaTeX公式
        
        # 直接在Markdown内容的开头添加时间戳和LLM名称
        header = ""
        if llm_name:
            header += f"**{llm_name}** "  # 左上角显示LLM名称
        if current_timestamp:
            header += f"<div style='text-align: right; font-size: 0.8em; color: gray;'>{current_timestamp}</div>\n\n"  # 右上角显示时间戳
        
        # 将头部信息添加到内容中
        modified_content = header + processed_content
        
        # 准备HTML内容
        html_content = self._prepare_html(modified_content, padding=padding)
        
        # 创建临时HTML文件
        temp_html = os.path.join(tempfile.gettempdir(), f"{output_filename}.html")
        with open(temp_html, "w", encoding="utf-8") as f:
            f.write(html_content)
        
        # 使用Playwright渲染HTML并截图
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            
            # 设置视口大小
            viewport = {"width": width, "height": 600}  # 初始高度，会根据内容调整
            page = browser.new_page(viewport=viewport)
            
            # 监听控制台事件
            def handle_console(msg):
                print(f"Browser Console ({msg.type}): {msg.text}")
            page.on("console", handle_console)
            
            # 导航到临时HTML文件
            page.goto(f"file://{temp_html}")
            
            # 等待KaTeX和Markdown渲染完成
            page.wait_for_function("window.renderedComplete === true", timeout=10000)
            
            # 获取内容元素
            container = page.locator(".content-container")
            
            # 如果没有指定高度，则根据内容自动计算
            if height is None:
                # 获取内容高度
                content_height = page.evaluate("""() => {
                    const container = document.querySelector('.content-container');
                    return container.getBoundingClientRect().height;
                }""")
                
                # 调整页面高度以适应内容
                viewport_height = content_height + 2 * padding
                page.set_viewport_size({"width": width, "height": int(viewport_height)})
            else:
                page.set_viewport_size({"width": width, "height": height})
            
            # 截图
            container.screenshot(path=output_path)
            
            browser.close()
        
        # 清理临时文件
        try:
            os.remove(temp_html)
        except:
            pass
            
        print(f"已生成渲染图片: {output_path}")
        return output_path
    
    def render_batch(self, content_items, width=800):
        """
        批量渲染多个内容
        
        Args:
            content_items: 字典列表，每个字典包含'content'和'filename'键
            width: 图片宽度
            
        Returns:
            生成的图片路径列表
        """
        result_paths = []
        for i, item in enumerate(content_items):
            content = item.get('content', '')
            filename = item.get('filename', f"rendered_{i+1}")
            
            path = self.render_to_image(
                content, 
                output_filename=filename,
                width=width
            )
            result_paths.append(path)
        
        return result_paths


import json  # 用于JSON序列化

def main():
    """命令行入口函数"""
    parser = argparse.ArgumentParser(description="Markdown和LaTeX渲染器 - 渲染混合内容为图片")
    parser.add_argument("--input", "-i", help="输入的Markdown和LaTeX混合文本或文件路径")
    parser.add_argument("--output", "-o", help="输出图片文件名（不含扩展名）", default="rendered_output")
    parser.add_argument("--output-dir", "-d", help="输出目录", default="rendered_output")
    parser.add_argument("--dark", action="store_true", help="使用暗色模式")
    parser.add_argument("--width", "-w", type=int, default=800, help="输出图片宽度")
    parser.add_argument("--height", type=int, help="输出图片高度（可选，默认自动计算）")
    
    args = parser.parse_args()
    
    # 创建渲染器
    renderer = MdLatexRenderer(output_dir=args.output_dir, dark_mode=args.dark)
    
    # 获取内容
    content = args.input
    if content and os.path.isfile(content):
        # 如果是文件路径，读取文件内容
        with open(content, 'r', encoding='utf-8') as f:
            content = f.read()
    
    if not content:
        # 如果没有提供输入，使用示例
        content = """
# 混合Markdown和LaTeX示例

这是一个包含**Markdown格式**和*LaTeX公式*的示例文档。

## 行内公式

质能方程: $E = mc^2$

## 显示公式

麦克斯韦方程组:

$$
\\begin{align}
\\nabla \\cdot \\vec{E} &= \\frac{\\rho}{\\varepsilon_0} \\\\
\\nabla \\cdot \\vec{B} &= 0 \\\\
\\nabla \\times \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} \\\\
\\nabla \\times \\vec{B} &= \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}
\\end{align}
$$

## 代码示例

```python
def calculate_energy(mass):
    c = 299792458  # 光速 (m/s)
    energy = mass * (c ** 2)
    return energy

print(f"1kg质量的能量: {calculate_energy(1)} J")
```

## 表格

| 符号 | 描述 | 公式 |
|------|------|------|
| $E$ | 能量 | $E = mc^2$ |
| $F$ | 力 | $F = ma$ |
| $G$ | 引力常数 | $F = G\\frac{m_1m_2}{r^2}$ |

> 这是一个引用块，可以包含 $\\LaTeX$ 公式。
        """
        print("使用示例内容...")
    
    # 渲染为图片
    renderer.render_to_image(
        content, 
        output_filename=args.output,
        width=args.width,
        height=args.height
    )


if __name__ == "__main__":
    main()
