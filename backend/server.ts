import express from 'express';
import next from 'next';
import cors from 'cors';
import routes from './routes/routes';
import logRoutes from './routes/logRoutes'; // 引入日志路由
import createScreenLogger from './utils/logger'; // 更新路径
import sequelize from './dbexec/dbaccess';
import { CORS_ORIGIN } from './utils/config'; // 引入配置

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './frontend' });
const handle = app.getRequestHandler();

const logger = createScreenLogger('server', true); // 创建 logger 实例

// 同步模型到数据库
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    logger.info('Database & tables created!');
  })
  .catch((err: any) => {
    console.error('Unable to create tables:', err);
    logger.error('Unable to create tables:', err);
  });

app.prepare().then(() => {
  const server = express();

  // 使用 cors 中间件
  server.use(cors({
    origin: CORS_ORIGIN // 使用从配置中读取的值
  }));

  server.use(express.json());
  server.use('/api', routes);
  server.use('/api', logRoutes); // 挂载日志路由到 /api 路径下

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, (err?: any) => {
    if (err) {
      logger.error(err.stack || err);
      throw err;
    }
    console.log('> Ready on http://localhost:3001');
    logger.info('> Ready on http://localhost:3001');
  });
});