import { Router } from 'express'; // 引入 Express 的 Router 类
import createScreenLogger from '../utils/logger'; // 引入创建日志记录器的工具函数

const router = Router(); // 创建一个新的路由器实例

// 定义一个 POST 路由，用于处理日志记录请求
router.post('/log', (req, res) => {
  // 从请求体中解构出所需的参数
  const { message, level, screenName, isBackend } = req.body;

  // 使用提供的屏幕名称和后端标志创建一个日志记录器实例
  const logger = createScreenLogger(screenName, isBackend);

  // 根据日志级别调用相应的日志记录方法
  if (level === 'error') {
    logger.error(message); // 记录错误级别的日志
  } else if (level === 'warn') {
    logger.warn(message); // 记录警告级别的日志
  } else {
    logger.info(message); // 记录信息级别的日志
  }

  // 响应客户端，返回一个成功的 JSON 对象
  res.status(200).json({ success: true });
});

export default router; // 导出路由器实例，以便在应用程序的其他部分使用