import { config } from 'dotenv'; // 引入 dotenv 模块，用于加载环境变量
import path from 'path'; // 引入 path 模块，用于处理和转换文件路径
import express from 'express'; // 引入 express 模块
import next from 'next'; // 引入 next 模块

// 加载环境变量文件
config({ path: path.resolve(__dirname, '../../.env') });

const dev = process.env.NODE_ENV !== 'production'; // 判断是否为开发环境
const app = next({ dev, dir: path.join(__dirname, '../') }); // 初始化 Next.js 应用并确认前端目录路径
const handle = app.getRequestHandler(); // 获取 Next.js 的请求处理器

// 准备 Next.js 应用
app.prepare().then(() => {
  const server = express(); // 创建一个新的 express 实例

  // 配置静态文件夹
  server.use(express.static(path.join(__dirname, '../public')));

  // 处理所有其他请求（Next.js 页面请求）
  server.all('*', (req, res) => {
    return handle(req, res); // 使用 Next.js 的请求处理器处理请求
  });

  const PORT = process.env.FRONTEND_PORT || 3000; // 获取前端服务器端口

  // 启动服务器并监听指定端口
  server.listen(PORT, (err?: Error) => {
    if (err) {
      console.error(err.stack || err); // 如果启动时出现错误，打印错误堆栈
      throw err; // 抛出错误
    }
    console.log(`> Frontend ready on http://localhost:${PORT}`); // 成功启动后打印信息
  });
});