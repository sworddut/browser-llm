import os
import json
import time
import datetime
import subprocess
import pandas as pd
from openai import OpenAI
from dotenv import load_dotenv
from prompts import *
from utils import *
import random
import threading
import numpy as np
import argparse
import base64
import glob

# 如果存在 .env 文件,从中加载环境变量
load_dotenv()

# 配置API客户端
client = OpenAI(
    api_key=os.getenv("deepseek_api"),
    base_url="https://api.deepseek.com",
)
MODEL = "deepseek-chat"

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

# 将xxxx/eagle.png替换为你本地图像的绝对路径


qwen_client = OpenAI(
    # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx"
    api_key= os.getenv("qwen_api"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

def call_qwen(prompt, base64_images):
    """调用千问API，支持多张图片"""
    # 构建消息内容，包含所有图片
    content = [{"type": "text", "text": prompt_extra}]
    
    # 构建用户消息，包含文本和所有图片
    user_content = []
    for img in base64_images:
        user_content.append({
            "type": "image_url",
            "image_url": {"url": f"data:image/png;base64,{img}"}
        })
    
    qwen_completion = qwen_client.chat.completions.create(
        model="qwen-vl-max",
        messages=[
            {"role": "system", "content": content},
            {"role": "user", "content": user_content}
        ],
        response_format={"type": "json_object"}
    )
    return qwen_completion.choices[0].message.content

# 默认文件路径配置
DEFAULT_PDF_PATH = "物理学难题集萃(增订本)【舒幼生等】_part1(OCR).pdf"
DEFAULT_JSON_PATH = "物理学难题集萃(增订本)【舒幼生等】_part1(OCR).json"
DEFAULT_OUTPUT_DIR = "三模型表"
DEFAULT_IMAGES_DIR = "./images"

def call_deepseek(prompt):
    """调用DeepSeek API"""
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "user", "content": prompt}
        ],
        response_format={"type": "json_object"}
    )
    return response.choices[0].message.content

def run_llm_process(llm, ques_id):
    """运行单个LLM进程并返回输出"""
    cmd = rf"node src\index.js -l {llm} -i ./input/{ques_id}.json -a zht"
    process = subprocess.Popen(
        cmd, 
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,
        universal_newlines=True,
        encoding='utf-8'
    )

    output = []
    for line in iter(process.stdout.readline, ""):
        print(line, end="")
        output.append(line)
        if "全部处理完成" in line:
            break
    return output

def process_question(problem_obj, json_path, base64_images=None):
    """处理单个问题"""
    global MODEL  # 添加全局变量声明
    
    print(f"\n-------------------处理题目 (question_number: {problem_obj.get('id')})----------------------")
    
    if "图" in problem_obj.get("question",""):
        print("[跳过]跳过带图题")
        return None
    if "证" in problem_obj["question"]:
        print("[跳过]跳过证明题")
        return None

    # 提取五元组
    flag = True
    count = 0
    ans_json = {}
    while flag:
        try:
            print(f"[提取五元组]第{count+1}次尝试,使用模型qwen-vl-max...")
            # 使用传入的base64_images调用千问API
            ans = call_qwen(prompt_extra+"\nQURSTION:"+f"【{problem_obj['id']}】"+problem_obj["question"]+"\nANSWER:"+problem_obj["answer"], base64_images)
            ans_json = json.loads(ans)
            flag = False
            count += 1
        except Exception as e:
            print(f"[提取五元组]Failed:{e}")
            count += 1
            if count > 5:
                return None

    print(f"[提取五元组]Success:成功从【{problem_obj['id']}】中提取出{len(ans_json)}个五元组")

    results = []
    for index, item in enumerate(ans_json):
        print(f"[处理第{index+1}个问题]正在处理第{index+1}个五元组...")

        now = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
        item["question_number"] = f"{item['question_number']}_{now}"
        ques_id = item["question_number"]
        
        # 保存中间结果
        with open(f"input/{ques_id}.json", "w", encoding="utf-8") as f:
            json.dump([ans_json[index]], f, ensure_ascii=False, indent=4)

        print(f"[处理第{index+1}个问题]{ques_id}.json file saved")

        # 使用线程并行运行三个模型
        threads = []
        for llm in ["deepseek", "qianwen", "doubao"]:
            thread = threading.Thread(target=run_llm_process, args=(llm, ques_id))
            threads.append(thread)
            thread.start()

        # 等待所有线程完成
        for thread in threads:
            thread.join()

        print(f"\n[处理第{index+1}个问题]三模型回答截图完毕")

        # 读取模型输出
        try:
            with open(rf"src\outputs\qianwen\qianwen_output_{ques_id}.json", "r", encoding="utf-8") as f:
                data = json.load(f)
                qwen_ans = data.get("messages", [""])[0] if data.get("messages") and len(data.get("messages")) > 0 else ""
        except Exception as e:
            print(f"[读取千问输出错误] {str(e)}")
            qwen_ans = ""
            
        try:
            with open(rf"src\outputs\deepseek\deepseek_output_{ques_id}.json", "r", encoding="utf-8") as f:
                data = json.load(f)
                deepseek_ans = data.get("messages", [""])[0] if data.get("messages") and len(data.get("messages")) > 0 else ""
        except Exception as e:
            print(f"[读取deepseek输出错误] {str(e)}")
            deepseek_ans = ""
            
        try:
            with open(rf"src\outputs\doubao\doubao_output_{ques_id}.json", "r", encoding="utf-8") as f:
                data = json.load(f)
                doubao_ans = data.get("messages", [""])[0].replace("正在搜索\n","") if data.get("messages") and len(data.get("messages")) > 0 else ""
        except Exception as e:
            print(f"[读取豆包输出错误] {str(e)}")
            doubao_ans = ""

        # 如果三个模型都没有输出，跳过此题
        if not qwen_ans and not deepseek_ans and not doubao_ans:
            print(f"[处理第{index+1}个问题] 三个模型均无有效输出，跳过此题")
            continue

        # 判断对错
        flag = True
        count = 0
        while flag:
            try:
                print(f"    [处理第{index+1}个问题-判断三模型答案对错]第{count+1}次尝试")
                ds_ans3 = call_deepseek(prompt_judge+item["condition"]+item["specific_questions"]+"\n正确答案:"+item["solution"]+"\学生1答案:"+qwen_ans+"\学生2答案:"+deepseek_ans+"\学生3答案:"+doubao_ans)
                ds_ans3_json = json.loads(ds_ans3)
                wrong_num = 0
                wrong_ans = None
                cwjfmx = None
                cwmx = ""
                qw_jietu = None
                ds_jietu = None
                db_jietu = None

                if "正确" in ds_ans3_json["学生1"]:
                    qw_correct = True
                else:
                    qw_correct = False
                    wrong_num += 1
                    wrong_ans = qwen_ans
                    cwjfmx = "千问"
                    qw_jietu = rf"src\outputs\qianwen\qianwen_screenshot_{ques_id}.png"
                    if not cwmx:
                        cwmx = "千问"
                    else:
                        cwmx += ",千问"

                if "正确" in ds_ans3_json["学生2"]:
                    ds_correct = True
                else:
                    ds_correct = False
                    wrong_num += 1
                    wrong_ans = deepseek_ans
                    if not cwjfmx:
                        cwjfmx = "ds"
                    ds_jietu = rf"src\outputs\deepseek\deepseek_screenshot_{ques_id}.png"
                    if not cwmx:
                        cwmx = "ds"
                    else:
                        cwmx += ",ds"

                if "正确" in ds_ans3_json["学生3"]:
                    db_correct = True
                else:
                    db_correct = False
                    wrong_num += 1
                    wrong_ans = doubao_ans
                    if not cwjfmx:
                        cwjfmx = "豆包"
                    db_jietu = rf"src\outputs\doubao\doubao_screenshot_{ques_id}.png"
                    cwmx += ",豆包"

                flag = False
            except Exception as e:
                print(e)
                count += 1
                if count > 5:
                    return None

        if qw_correct and ds_correct and db_correct:
            print("[三模型都答对了]下一题]")
            continue
        
        else:
            print(f"[三模型有答错]正在提取内容，使用模型{MODEL}...")

        # 提取适合年级和子学科
        flag = True
        count = 0
        while flag:
            try:
                print(f"    [处理第{index+1}个问题-提取['适合年级', '子学科']]第{count+1}次尝试")
                ds_ans1 = call_deepseek(prompt_question+item["condition"]+item["specific_questions"])
                ds_ans1_json = json.loads(ds_ans1)
                shnj = ds_ans1_json["适合年级"]
                zxk = ds_ans1_json["子学科"]
                flag = False
            except Exception as e:
                print(e)
                count += 1
                if count > 5:
                    return None

        # 提取考察知识点和分析过程
        flag = True
        count = 0
        while flag:
            try:
                print(f"    [处理第{index+1}个问题-提取['考察知识点', '分析过程']]第{count+1}次尝试")
                ds_ans2 = call_deepseek(prompt_answer+item["condition"]+item["specific_questions"]+"\n参考答案:"+item["solution"])
                ds_ans2_json = json.loads(ds_ans2)
                kczsd = ds_ans2_json["考察知识点"]
                fxgc = ds_ans2_json["分析过程"]
                flag = False
            except Exception as e:
                print(e)
                count += 1
                if count > 5:
                    return None

        # 提取错误解题方法和易错点
        flag = True
        count = 0
        while flag:
            try:
                print(f"    [处理第{index+1}个问题-提取['错误解题方法','易错点']]第{count+1}次尝试")
                ds_ans4 = call_deepseek(prompt_wrong+item["condition"]+item["specific_questions"]+"\n错误答案:"+wrong_ans+"\n正确答案:"+item["solution"])
                ds_ans4_json = json.loads(ds_ans4)
                cwjtff = ds_ans4_json["错误解题方法"]
                ycd = ds_ans4_json["易错点"]
                flag = False
            except Exception as e:
                print(e)
                count += 1
                if count > 5:
                    return None

        # 提取题目来源
        possible_substrings = get_consecutive_chinese_chars(item["condition"])
        pages = []
        if possible_substrings and len(possible_substrings) > 0:
            for i in range(min(5, len(possible_substrings))):  # 确保不会超出列表范围
                search_text = random.choice(possible_substrings)
                page_result = find_text_in_saved_pdf(json_path, search_text)
                if page_result and len(page_result) > 0 and page_result[0] is not None:
                    pages.append(page_result[0])

        page = find_mode(pages) if pages else None

        # 构建结果行
        result_row = {
            'id': f"zht_{len(results)+1:03d}",
            "问题条件": item["condition"],
            "具体问题": item["specific_questions"],
            "问题数目": 1,
            "适合年级": shnj,
            "题目类型": "计算题",
            "题目学科": "物理",
            "子学科": zxk,
            "领域类型": "自然科学",
            "是否包含图片": "否",
            "考察知识点": kczsd,
            "易错点": ycd,
            "思考过程/分析": fxgc,
            "解题过程": item["solution"],
            "最终答案": item["final_answer"],
            "错误解题方法": cwjtff,
            "错误解法模型": cwjfmx,
            "错误模型": cwmx,
            "三模型打分": wrong_num,
            "deepseek": ds_jietu,
            "千问": qw_jietu,
            "豆包": db_jietu,
            "题目来源": f"物理学难题集萃(增订本)【舒幼生等】_part1,第{page}页" if page else "未知",
        }
        results.append(result_row)

    return results

def main():
    """主函数"""
    # 解析命令行参数
    parser = argparse.ArgumentParser(description="处理物理题目并生成Excel表格")
    parser.add_argument("--pdf", default=DEFAULT_PDF_PATH, help="PDF文件路径")
    parser.add_argument("--json", default=DEFAULT_JSON_PATH, help="提取的PDF文本JSON文件路径")
    parser.add_argument("--output_dir", default=DEFAULT_OUTPUT_DIR, help="输出Excel文件目录")
    parser.add_argument("--images_dir", default=DEFAULT_IMAGES_DIR, help="图片目录")
    args = parser.parse_args()
    
    # 确保输出目录存在
    os.makedirs(args.output_dir, exist_ok=True)
    
    # 使用命令行参数设置文件路径
    pdf_path = args.pdf
    json_path = args.json
    output_dir = args.output_dir
    images_dir = args.images_dir
    
    print(f"使用参数:\nPDF文件: {pdf_path}\nJSON文件: {json_path}\n输出目录: {output_dir}\n图片目录: {images_dir}")

    # 创建空的DataFrame
    data = pd.DataFrame(columns=['id',"问题条件","具体问题","问题数目","适合年级","题目类型","题目学科","子学科","领域类型","是否包含图片","考察知识点","易错点","思考过程/分析","解题过程","最终答案","错误解题方法","错误解法模型","错误模型","三模型打分","deepseek","千问","豆包","题目来源"])

    # 提取PDF文本
    extract_pdf_text(pdf_path, save_dir=json_path)

    # 获取images目录下的所有子目录
    subfolders = [f for f in os.listdir(images_dir) if os.path.isdir(os.path.join(images_dir, f))]
    print(f"找到 {len(subfolders)} 个子文件夹作为问题输入")

    # 处理每个子文件夹作为一个问题
    for subfolder in subfolders:
        subfolder_path = os.path.join(images_dir, subfolder)
        print(f"处理子文件夹: {subfolder_path}")
        
        # 获取子文件夹中的所有图片文件
        image_files = glob.glob(os.path.join(subfolder_path, "*.png")) + glob.glob(os.path.join(subfolder_path, "*.jpg"))
        
        if not image_files:
            print(f"子文件夹 {subfolder} 中没有图片，跳过")
            continue
            
        # 读取子文件夹中的问题信息
        question_info_path = os.path.join(subfolder_path, "question.json")
        if os.path.exists(question_info_path):
            try:
                with open(question_info_path, "r", encoding="utf-8") as f:
                    problem_obj = json.load(f)
            except Exception as e:
                print(f"读取问题信息文件失败: {e}")
                continue
        else:
            # 如果没有问题信息文件，创建一个默认的问题对象
            problem_obj = {
                "id": subfolder,
                "question": f"来自文件夹 {subfolder} 的问题",
                "answer": "无答案"
            }
        
        # 将所有图片转换为base64
        base64_images = []
        for image_file in image_files:
            try:
                base64_img = encode_image(image_file)
                base64_images.append(base64_img)
                print(f"已转换图片: {image_file}")
            except Exception as e:
                print(f"转换图片 {image_file} 失败: {e}")
        
        # 处理问题
        results = process_question(problem_obj, json_path, base64_images)
        if results:
            data = pd.concat([data, pd.DataFrame(results)], ignore_index=True)
    
    # 保存Excel文件
    now_time = time.strftime("%Y-%m-%d_%H%M%S", time.localtime())
    file_path = os.path.join(output_dir, f"国内三模型_{now_time}.xlsx")
    save_to_excel(data, file_path)
    print(f"已保存Excel文件: {file_path}")
    print("所有问题处理完毕")

if __name__ == "__main__":
    main() 

    # python pipeline\test.py