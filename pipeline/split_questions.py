import json
import os
import math
import argparse

def split_json_file(input_file, num_parts):
    """
    将JSON文件平均分成n份
    
    Args:
        input_file (str): 输入JSON文件路径
        num_parts (int): 要分成的份数
    """
    # 创建输出目录
    output_dir = os.path.join(os.path.dirname(input_file), "split_questions")
    os.makedirs(output_dir, exist_ok=True)
    
    # 读取JSON文件
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # 计算每份的大小
    total_items = len(data)
    items_per_part = math.ceil(total_items / num_parts)
    
    print(f"原始文件包含 {total_items} 个问题，将分成 {num_parts} 份，每份约 {items_per_part} 个问题")
    
    # 分割并保存
    for i in range(num_parts):
        start_idx = i * items_per_part
        end_idx = min((i + 1) * items_per_part, total_items)
        
        # 如果是最后一份且没有数据，则跳过
        if start_idx >= total_items:
            break
            
        part_data = data[start_idx:end_idx]
        output_file = os.path.join(output_dir, f"questions_part_{i+1}_of_{num_parts}.json")
        
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(part_data, f, ensure_ascii=False, indent=4)
        
        print(f"已保存第 {i+1} 份，包含 {len(part_data)} 个问题: {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="将JSON文件平均分成n份")
    parser.add_argument("-i", "--input", default="questions_extracted.json", help="输入JSON文件路径")
    parser.add_argument("-n", "--num_parts", type=int, required=True, help="要分成的份数")
    
    args = parser.parse_args()
    
    split_json_file(args.input, args.num_parts)
    print("分割完成！") 