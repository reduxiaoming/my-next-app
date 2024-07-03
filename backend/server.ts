import express from 'express'; // 引入 express 模块
import cors from 'cors'; // 引入 cors 模块
import routes from './routes/routes'; // 引入路由模块
import logRoutes from './routes/logRoutes'; // 引入日志路由模块
import { PORT, ORIGIN } from './utils/config'; // 引入配置模块
import createScreenLogger from './utils/logger'; // 引入日志记录器模块
import sequelize from './dbexec/dbaccess'; // 引入数据库连接模块
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
    logger.info('Database & tables created!'); // 记录数据库和表创建成功的信息
    console.log('Database & tables created!'); // 在控制台打印数据库和表创建成功的信息
    
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`); // 记录服务器启动成功的信息
      console.log(`Server is running on port ${PORT}`); // 在控制台打印服务器启动成功的信息
    });
  })
  .catch(err => {
    logger.error(`Unable to create tables: ${err.message}`); // 记录表创建失败的错误信息
    console.error(`Unable to create tables: ${err.message}`); // 在控制台打印表创建失败的错误信息
  });