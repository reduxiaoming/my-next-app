// 引入 API 基础 URL 配置
import { API_BASE_URL } from './config';

// 定义一个异步函数，用于将日志发送到服务器
const logToServer = async (message: string, level: string = 'info') => {
  try {
    // 发送 POST 请求，将日志信息发送到服务器的 /log 端点
    await fetch(`${API_BASE_URL}/log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 将日志信息转换为 JSON 字符串并作为请求体发送
      body: JSON.stringify({ message, level, screenName: window.location.pathname.substring(1) || 'home' }),
    });
  } catch (error) {
    // 捕获发送请求时的错误并在控制台输出
    console.error('Failed to send log to server:', error);
  }
};

// 导出 logToServer 函数以便在项目的其他部分使用
export default logToServer;