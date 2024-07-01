import { config } from 'dotenv';
import path from 'path';
import express from 'express';
import next from 'next';

config({ path: path.resolve(__dirname, '../../.env') });

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, '../') }); // 确认前端目录路径
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // 配置静态文件夹
  server.use(express.static(path.join(__dirname, '../public')));

  // 处理所有其他请求（Next.js 页面请求）
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.FRONTEND_PORT || 3000;

  server.listen(PORT, (err?: Error) => {
    if (err) {
      console.error(err.stack || err);
      throw err;
    }
    console.log(`> Frontend ready on http://localhost:${PORT}`);
  });
});