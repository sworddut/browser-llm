#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import time
import random
import redis
import os
import argparse
from pathlib import Path

class QuestionProducer:
    def __init__(self, json_path, redis_host='localhost', redis_port=6379, batch_size=5):
        """
        初始化题目生产者
        
        Args:
            json_path: 题目JSON文件路径
            redis_host: Redis服务器地址
            redis_port: Redis服务器端口
            batch_size: 每批次发送题目数量
        """
        self.json_path = json_path
        self.batch_size = batch_size
        self.redis_client = redis.Redis(host=redis_host, port=redis_port, db=0)
        self.questions = self._load_questions()
        
    def _load_questions(self):
        """加载题目数据"""
        try:
            with open(self.json_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"加载题目文件失败: {e}")
            return []
            
    def produce_questions(self, llm_types=None, start_index=0, end_index=None):
        """
        生产题目并推送到Redis队列
        
        Args:
            llm_types: 指定LLM类型列表，如 ["deepseek", "doubao", "qianwen"]
            start_index: 起始题目索引
            end_index: 结束题目索引
        """
        if not self.questions:
            print("没有可用题目")
            return
            
        if llm_types is None:
            llm_types = ["deepseek", "doubao", "qianwen"]
            
        if end_index is None:
            end_index = len(self.questions)
            
        # 限制范围
        start_index = max(0, start_index)
        end_index = min(len(self.questions), end_index)
        
        selected_questions = self.questions[start_index:end_index]
        total = len(selected_questions)
        
        print(f"准备推送 {total} 道题目，每批 {self.batch_size} 题")
        
        batch = []
        for i, question in enumerate(selected_questions):
            # 为每个题目随机分配一个LLM类型
            llm_type = random.choice(llm_types)
            
            task = {
                "question_id": question["question_number"],
                "content": {
                    "question_number": question["question_number"],
                    "condition": question["condition"],
                    "specific_questions": question["specific_questions"]
                },
                "target": llm_type,
                "timestamp": time.time()
            }
            
            batch.append(task)
            
            # 当积累了batch_size个题目或是最后一题时，推送到队列
            if len(batch) >= self.batch_size or i == total - 1:
                self._push_batch(batch)
                batch = []  # 清空批次
                
                # 模拟生产间隔
                if i < total - 1:
                    delay = random.uniform(1.0, 3.0)
                    print(f"等待 {delay:.1f} 秒后继续...")
                    time.sleep(delay)
    
    def _push_batch(self, batch):
        """推送一批题目到Redis队列"""
        if not batch:
            return
            
        try:
            # 将批次作为一个整体推送
            batch_json = json.dumps(batch, ensure_ascii=False)
            self.redis_client.rpush("question_batch_queue", batch_json)
            
            print(f"已推送一批 {len(batch)} 道题目:")
            for task in batch:
                print(f"  - 题目 {task['question_id']} → {task['target']}")
                
            # 获取队列长度
            queue_length = self.redis_client.llen("question_batch_queue")
            print(f"当前队列中有 {queue_length} 批题目等待处理")
            
        except Exception as e:
            print(f"推送题目批次失败: {e}")
            
    def clear_queue(self):
        """清空队列"""
        self.redis_client.delete("question_batch_queue")
        print("已清空题目队列")

def main():
    parser = argparse.ArgumentParser(description="题目生产者")
    parser.add_argument("--json", default="files/extracted_questions.json", help="题目JSON文件路径")
    parser.add_argument("--batch-size", type=int, default=5, help="每批次题目数量")
    parser.add_argument("--start", type=int, default=0, help="起始题目索引")
    parser.add_argument("--end", type=int, default=None, help="结束题目索引")
    parser.add_argument("--llm", nargs="+", default=["deepseek", "doubao", "qianwen"], 
                        help="指定LLM类型，可多选")
    parser.add_argument("--clear", action="store_true", help="清空队列")
    
    args = parser.parse_args()
    
    # 解析JSON路径
    json_path = args.json
    if not os.path.isabs(json_path):
        json_path = os.path.join(os.getcwd(), json_path)
    
    producer = QuestionProducer(
        json_path=json_path,
        batch_size=args.batch_size
    )
    
    if args.clear:
        producer.clear_queue()
        return
        
    producer.produce_questions(
        llm_types=args.llm,
        start_index=args.start,
        end_index=args.end
    )

if __name__ == "__main__":
    main()
