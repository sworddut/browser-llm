# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI
import os
import time
from dotenv import load_dotenv
from md_latex_renderer import MdLatexRenderer

# 加载环境变量
load_dotenv()

# 配置API客户端
client = OpenAI(
    api_key=os.getenv("deepseek_api"),
    base_url="https://api.deepseek.com",
)
MODEL = "deepseek-chat"

# 创建渲染器
renderer = MdLatexRenderer(output_dir="rendered_output")

# 发送请求到DeepSeek API
try:
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are a helpful assistant. When explaining mathematical concepts, use LaTeX for formulas."},
            {"role": "user", "content": "简单说明如何计算行列式？请用LaTeX公式说明。"},
        ],
        stream=False
    )
    
    # 获取响应内容
    llm_response = response.choices[0].message.content
    print("\n\n原始响应:\n", llm_response)
    
    # 生成唯一的输出文件名
    timestamp = int(time.time())
    output_filename = f"deepseek_determinant_{timestamp}"
    
    # 渲染内容
    output_path = renderer.render_to_image(
        content=llm_response, 
        output_filename=output_filename, 
        llm_name=MODEL
    )
    
    print(f"\n渲染完成，图片保存在: {output_path}")
    
except Exception as e:
    print(f"\n错误: {e}")