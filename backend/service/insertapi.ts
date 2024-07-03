import { Request, Response } from 'express'; // 引入 Express 模块中的 Request 和 Response 类型
import createScreenLogger from '../utils/logger'; // 引入创建日志记录器的工具函数
import { Message } from '../models/Message'; // 引入消息模型

const logger = createScreenLogger('insert', true); // 指定为后端日志

// 定义插入 API 的处理函数
export const insertApi = async (req: Request, res: Response) => {
  const logFuncName = 'insertApi'; // 日志记录函数名称
  logger.info(`[${logFuncName}] Received POST request on /api/insert at ${new Date().toISOString()}`); // 记录收到请求的日志
  logger.info(`[${logFuncName}] Request body: ${JSON.stringify(req.body)}`); // 记录请求体的日志
  const { message, userId } = req.body; // 从请求体中解构出消息和用户 ID
  const timestamp = new Date().toISOString(); // 获取当前时间戳

  // 检查消息和用户 ID 是否存在
  if (message && userId) {
    try {
      // 使用 Sequelize 数据模型进行插入操作
      const insertedMessage = await Message.create({ content: message, userId: userId, timestamp: new Date(timestamp) });
      res.json({
        id: insertedMessage.id,
        message: insertedMessage.content,
        userId: insertedMessage.userId,
        timestamp: insertedMessage.timestamp,
      });
      logger.info(`[${logFuncName}] Message inserted with ID: ${insertedMessage.id} at ${new Date().toISOString()}`); // 记录成功插入的日志
    } catch (err: unknown) {
      if (err instanceof Error) {
        logger.error(`[${logFuncName}] Error saving message to database: ${err.message}`); // 记录错误日志
      } else {
        logger.error(`[${logFuncName}] Unknown error saving message to database`); // 记录未知错误日志
      }
      res.status(500).json({ error: 'Failed to save message' }); // 返回服务器错误响应
    }
  } else {
    logger.warn(`[${logFuncName}] Message and userId are required at ${new Date().toISOString()}`); // 记录缺少参数的警告日志
    res.status(400).json({ error: 'Message and userId are required' }); // 返回客户端错误响应
  }
};