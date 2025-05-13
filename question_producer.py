#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
问题生成器模拟程序
从 files/extracted_questions.json 读取问题，模拟定期生成问题并发送到下游处理
"""

import json
import os
import time
import random
import uuid
import argparse
import logging
from datetime import datetime
import subprocess

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('question_producer.log')
    ]
)

logger = logging.getLogger('QuestionProducer')

class QuestionProducer:
    def __init__(self, config):
        """
        初始化问题生成器
        
        Args:
            config (dict): 配置参数
        """
        self.config = config
        self.questions_file = config.get('questions_file', 'files/extracted_questions.json')
        self.output_dir = config.get('output_dir', 'tasks')
        self.batch_size = config.get('batch_size', 5)
        self.interval = config.get('interval', 30)  # 生成问题的间隔时间（秒）
        self.platforms = config.get('platforms', ['deepseek', 'doubao', 'qianwen'])
        self.auto_process = config.get('auto_process', False)
        self.accounts = config.get('accounts', ['default', 'account1', 'account2'])
        
        # 创建输出目录
        os.makedirs(self.output_dir, exist_ok=True)
        
        # 加载所有问题
        self.all_questions = self._load_questions()
        logger.info(f"已加载 {len(self.all_questions)} 个问题")
        
        # 记录已处理的问题
        self.processed_questions = set()
        
        # 当前平台索引（用于轮换）
        self.platform_index = 0
        
        # 当前账号索引（用于轮换）
        self.account_index = 0
        
        # 活跃任务
        self.active_tasks = {}

    def _load_questions(self):
        """加载问题文件"""
        try:
            with open(self.questions_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"加载问题文件失败: {e}")
            return []

    def _get_next_batch(self):
        """获取下一批未处理的问题"""
        available_questions = [q for q in self.all_questions 
                              if q.get('question_number') not in self.processed_questions]
        
        if not available_questions:
            logger.info("所有问题已处理完毕")
            return []
        
        # 随机选择问题或按顺序选择
        if self.config.get('random_selection', False):
            selected = random.sample(
                available_questions, 
                min(self.batch_size, len(available_questions))
            )
        else:
            selected = available_questions[:min(self.batch_size, len(available_questions))]
        
        # 标记为已处理
        for question in selected:
            self.processed_questions.add(question.get('question_number'))
            
        return selected

    def _get_next_platform(self):
        """获取下一个平台（轮换）"""
        platform = self.platforms[self.platform_index]
        self.platform_index = (self.platform_index + 1) % len(self.platforms)
        return platform
    
    def _get_next_account(self):
        """获取下一个账号（轮换）"""
        account = self.accounts[self.account_index]
        self.account_index = (self.account_index + 1) % len(self.accounts)
        return account

    def generate_task(self):
        """生成一个新任务"""
        # 获取下一批问题
        questions = self._get_next_batch()
        if not questions:
            return None
        
        # 创建任务ID
        task_id = f"task_{uuid.uuid4().hex[:8]}_{int(time.time())}"
        
        # 选择平台
        platform = self._get_next_platform()
        
        # 选择账号
        account = self._get_next_account()
        
        # 创建任务
        task = {
            "id": task_id,
            "timestamp": int(time.time()),
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "platform": platform,
            "account": account,
            "status": "pending",
            "questions": questions
        }
        
        # 保存任务到文件
        task_dir = os.path.join(self.output_dir, task_id)
        os.makedirs(task_dir, exist_ok=True)
        
        task_file = os.path.join(task_dir, "task.json")
        with open(task_file, 'w', encoding='utf-8') as f:
            json.dump(task, f, ensure_ascii=False, indent=2)
        
        # 单独保存问题文件（方便处理）
        questions_file = os.path.join(task_dir, "questions.json")
        with open(questions_file, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
        
        logger.info(f"已生成任务 {task_id}，平台: {platform}，账号: {account}，问题数: {len(questions)}")
        
        # 将任务添加到活跃任务列表
        self.active_tasks[task_id] = task
        
        # 自动启动处理（如果启用）
        if self.auto_process:
            self._process_task(task)
        
        return task

    def _process_task(self, task):
        """启动任务处理（调用Node.js脚本）"""
        task_id = task["id"]
        platform = task["platform"]
        account = task["account"]
        task_dir = os.path.join(self.output_dir, task_id)
        questions_file = os.path.join(task_dir, "questions.json")
        output_dir = os.path.join(task_dir, "output")
        os.makedirs(output_dir, exist_ok=True)
        
        # 更新任务状态
        task["status"] = "processing"
        task["processing_start"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # 保存更新后的任务
        task_file = os.path.join(task_dir, "task.json")
        with open(task_file, 'w', encoding='utf-8') as f:
            json.dump(task, f, ensure_ascii=False, indent=2)
        
        # 构建命令
        cmd = [
            "node", 
            "src/index.js",
            "--account", account,
            "--llm", platform,
            "--input", questions_file,
            "--output", output_dir
        ]
        
        # 启动进程
        logger.info(f"启动任务 {task_id} 处理: {' '.join(cmd)}")
        
        try:
            # 使用非阻塞方式启动进程
            process = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                cwd=os.getcwd()
            )
            
            # 保存进程ID
            task["process_id"] = process.pid
            
            # 更新任务文件
            with open(task_file, 'w', encoding='utf-8') as f:
                json.dump(task, f, ensure_ascii=False, indent=2)
            
            # 创建日志文件
            log_file = os.path.join(task_dir, "process.log")
            
            # 启动非阻塞日志收集
            def collect_output():
                with open(log_file, 'w', encoding='utf-8') as log:
                    while True:
                        output = process.stdout.readline()
                        if output == '' and process.poll() is not None:
                            break
                        if output:
                            log.write(output)
                            log.flush()
                    
                    # 收集错误输出
                    for line in process.stderr:
                        log.write(f"ERROR: {line}")
                        log.flush()
                    
                    # 进程结束后更新任务状态
                    return_code = process.wait()
                    task["status"] = "completed" if return_code == 0 else "failed"
                    task["return_code"] = return_code
                    task["completed_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    
                    # 更新任务文件
                    with open(task_file, 'w', encoding='utf-8') as f:
                        json.dump(task, f, ensure_ascii=False, indent=2)
                    
                    logger.info(f"任务 {task_id} 处理完成，返回码: {return_code}")
            
            # 在后台线程中收集输出
            import threading
            output_thread = threading.Thread(target=collect_output)
            output_thread.daemon = True
            output_thread.start()
            
            return True
        except Exception as e:
            logger.error(f"启动任务处理失败: {e}")
            
            # 更新任务状态
            task["status"] = "failed"
            task["error"] = str(e)
            
            # 保存更新后的任务
            with open(task_file, 'w', encoding='utf-8') as f:
                json.dump(task, f, ensure_ascii=False, indent=2)
            
            return False

    def run(self):
        """运行问题生成器"""
        logger.info(f"问题生成器启动，间隔: {self.interval}秒，批次大小: {self.batch_size}")
        
        try:
            while True:
                # 生成新任务
                task = self.generate_task()
                
                if not task:
                    logger.info("没有更多问题可处理，退出")
                    break
                
                # 检查活跃任务状态
                self._check_active_tasks()
                
                # 等待下一次生成
                logger.info(f"等待 {self.interval} 秒后生成下一批问题...")
                time.sleep(self.interval)
        
        except KeyboardInterrupt:
            logger.info("收到中断信号，正在退出...")
        
        finally:
            self._cleanup()
    
    def _check_active_tasks(self):
        """检查活跃任务状态"""
        completed = []
        
        for task_id, task in self.active_tasks.items():
            task_dir = os.path.join(self.output_dir, task_id)
            task_file = os.path.join(task_dir, "task.json")
            
            # 重新读取任务文件以获取最新状态
            if os.path.exists(task_file):
                try:
                    with open(task_file, 'r', encoding='utf-8') as f:
                        updated_task = json.load(f)
                    
                    # 更新内存中的任务
                    self.active_tasks[task_id] = updated_task
                    
                    # 如果任务已完成或失败，从活跃列表中移除
                    if updated_task.get("status") in ["completed", "failed"]:
                        completed.append(task_id)
                        logger.info(f"任务 {task_id} 已{updated_task.get('status')}")
                
                except Exception as e:
                    logger.error(f"读取任务文件失败: {e}")
        
        # 从活跃列表中移除已完成的任务
        for task_id in completed:
            self.active_tasks.pop(task_id, None)
        
        logger.info(f"当前活跃任务: {len(self.active_tasks)}，已完成: {len(completed)}")

    def _cleanup(self):
        """清理资源"""
        logger.info("清理资源...")
        
        # 保存处理状态
        status = {
            "timestamp": int(time.time()),
            "processed_questions": list(self.processed_questions),
            "active_tasks": self.active_tasks
        }
        
        status_file = os.path.join(self.output_dir, "producer_status.json")
        with open(status_file, 'w', encoding='utf-8') as f:
            json.dump(status, f, ensure_ascii=False, indent=2)
        
        logger.info(f"状态已保存到 {status_file}")

def main():
    """主函数"""
    parser = argparse.ArgumentParser(description='问题生成器模拟程序')
    parser.add_argument('--questions', type=str, default='files/extracted_questions.json',
                        help='问题文件路径')
    parser.add_argument('--output', type=str, default='tasks',
                        help='输出目录')
    parser.add_argument('--batch-size', type=int, default=5,
                        help='每批生成的问题数量')
    parser.add_argument('--interval', type=int, default=30,
                        help='生成问题的间隔时间（秒）')
    parser.add_argument('--platforms', type=str, default='deepseek,doubao,qianwen',
                        help='LLM平台列表，逗号分隔')
    parser.add_argument('--accounts', type=str, default='default,account1,account2',
                        help='账号列表，逗号分隔')
    parser.add_argument('--random', action='store_true',
                        help='随机选择问题')
    parser.add_argument('--auto-process', action='store_true',
                        help='自动启动处理')
    
    args = parser.parse_args()
    
    # 构建配置
    config = {
        'questions_file': args.questions,
        'output_dir': args.output,
        'batch_size': args.batch_size,
        'interval': args.interval,
        'platforms': args.platforms.split(','),
        'accounts': args.accounts.split(','),
        'random_selection': args.random,
        'auto_process': args.auto_process
    }
    
    # 创建并运行生成器
    producer = QuestionProducer(config)
    producer.run()

if __name__ == "__main__":
    main()
