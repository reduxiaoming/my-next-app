import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import logRoutes from './routes/logRoutes';
import { PORT, ORIGIN } from './utils/config';  
import createScreenLogger from './utils/logger';
import sequelize from './dbexec/dbaccess';
import initDB from './utils/dbInit'; // 引入数据库初始化脚本

// 创建日志记录器
const logger = createScreenLogger('server', true);

// 初始化Express应用
const app = express();

// 配置CORS
app.use(cors({ origin: ORIGIN }));

// 解析JSON请求体
app.use(express.json());

// 配置路由
app.use('/api', routes);
app.use('/api', logRoutes);

// 初始化数据库
initDB()
  .then(() => {
    // 同步数据库并启动服务器
    return sequelize.sync();
  })
  .then(() => {
    logger.info('Database & tables created!');
    console.log('Database & tables created!');
    
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    logger.error(`Unable to create tables: ${err.message}`);
    console.error(`Unable to create tables: ${err.message}`);
  });