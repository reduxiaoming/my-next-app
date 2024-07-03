import React, { useEffect, useState } from 'react'; // 引入 React 库和相关钩子
import Head from 'next/head'; // 引入 Next.js 的 Head 组件，用于在页面头部插入元素
import '../styles/Select.module.css'; // 引入页面特定样式
import logToServer from '../utils/logger'; // 引入日志记录功能
import { API_BASE_URL } from '../utils/config'; // 引入 API 基础 URL 配置

const Select: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]); // 定义一个状态变量来存储消息数据

  // 使用 useEffect 钩子在组件挂载时执行一些操作
  useEffect(() => {
    const logFuncName = 'useEffect';
    fetch(`${API_BASE_URL}/select`) // 从服务器获取消息数据
      .then((res) => res.json()) // 将响应转换为 JSON
      .then((data) => {
        setMessages(data); // 将消息数据存储到状态变量中
        logToServer(`[${logFuncName}] Fetched messages at ${new Date().toISOString()}`, 'info');
      })
      .catch((error) =>
        logToServer(`[${logFuncName}] Error fetching messages: ${error} at ${new Date().toISOString()}`, 'error')
      );
  }, []);

  return (
    <>
      <Head>
        <title>Select Page</title> {/* 设置页面标题 */}
      </Head>
      <div className="container">
        <h1>Messages</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Content</th>
              <th>User ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.content}</td>
                <td>{message.userId}</td>
                <td>{new Date(message.timestamp).toLocaleString()}</td> {/* 将时间戳转换为本地时间 */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="navigation mt-4">
          <a href="/" className="btn btn-link">Go to Home</a>
          <a href="/insert" className="btn btn-link">Go to Insert</a>
        </div>
      </div>
    </>
  );
};

export default Select; // 导出组件