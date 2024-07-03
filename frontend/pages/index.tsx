import React, { useEffect, useState } from 'react'; // 引入 React 库和相关钩子
import Head from 'next/head'; // 引入 Next.js 的 Head 组件，用于在页面头部插入元素
import '../styles/Insert.module.css'; // 引入页面特定样式
import logToServer from '../utils/logger'; // 引入日志记录功能
import { API_BASE_URL } from '../utils/config'; // 引入 API 基础 URL 配置

const Insert: React.FC = () => {
  const [response, setResponse] = useState<any>(null); // 定义一个状态变量来存储响应数据

  // 使用 useEffect 钩子在组件挂载时执行一些操作
  useEffect(() => {
    const logFuncName = 'useEffect';
    fetch('/insert.html') // 从服务器获取插入表单的 HTML 内容
      .then((res) => res.text()) // 将响应转换为文本
      .then((html) => {
        // 将 HTML 插入到 insertContainer 元素中
        document.getElementById('insertContainer')!.innerHTML = html;

        // 获取表单元素并添加提交事件监听器
        const form = document.getElementById('insertForm') as HTMLFormElement;
        if (form) {
          form.addEventListener('submit', handleSubmit);
        }
        // 记录日志
        logToServer(`[${logFuncName}] Loaded insert.html at ${new Date().toISOString()}`, 'info');
      })
      .catch((error) =>
        logToServer(
          `[${logFuncName}] Error fetching insert.html: ${error} at ${new Date().toISOString()}`,
          'error'
        )
      );
  }, []);

  // 表单提交处理函数
  const handleSubmit = async (e: Event) => {
    const logFuncName = 'handleSubmit';
    e.preventDefault(); // 阻止默认的表单提交行为
    const message = (document.getElementById('message') as HTMLInputElement).value; // 获取消息输入框的值
    const userId = (document.getElementById('userId') as HTMLInputElement).value; // 获取用户 ID 输入框的值
    try {
      const res = await fetch(`${API_BASE_URL}/insert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, userId }), // 将表单数据转换为 JSON 字符串并发送到服务器
      });
      const data = await res.json(); // 解析响应 JSON 数据
      setResponse(data); // 将响应数据存储到状态变量中
      // 记录日志
      logToServer(
        `[${logFuncName}] Submitted message: ${message} by user: ${userId} at ${new Date().toISOString()}`,
        'info'
      );
    } catch (error) {
      // 记录错误日志
      logToServer(
        `[${logFuncName}] Error submitting message: ${error} at ${new Date().toISOString()}`,
        'error'
      );
    }
  };

  // 使用 useEffect 钩子在 response 状态变化时执行一些操作
  useEffect(() => {
    const logFuncName = 'useEffect-response';
    if (response) {
      const responseDiv = document.getElementById('response');
      if (responseDiv) {
        // 将响应数据显示在页面上
        responseDiv.innerHTML = `<h2>Response</h2><pre>${JSON.stringify(response, null, 2)}</pre>`;
        // 记录日志
        logToServer(`[${logFuncName}] Updated response at ${new Date().toISOString()}`, 'info');
      }
    }
  }, [response]);

  return (
    <>
      <Head>
        <title>Insert Page</title> {/* 设置页面标题 */}
      </Head>
      <div id="insertContainer" className="container"></div> {/* 插入表单 HTML 内容的容器 */}
    </>
  );
};

export default Insert; // 导出组件