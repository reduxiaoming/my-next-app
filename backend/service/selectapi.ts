import { Request, Response } from 'express'; // 引入 Express 模块中的 Request 和 Response 类型
import createScreenLogger from '../utils/logger'; // 引入创建日志记录器的工具函数
import { Message } from '../models/Message'; // 引入消息模型

const logger = createScreenLogger('select', true); // 指定为后端日志

// 定义选择 API 的处理函数
export const selectApi = async (req: Request, res: Response) => {
  const logFuncName = 'selectApi'; // 日志记录函数名称
  logger.info(`[${logFuncName}] Received GET request on /api/select at ${new Date().toISOString()}`); // 记录收到请求的日志

  try {
    const messages = await Message.findAll(); // 从数据库中获取所有消息
    res.json(messages); // 返回消息的 JSON 响应
    logger.info(`[${logFuncName}] Retrieved messages at ${new Date().toISOString()}`); // 记录成功获取消息的日志
  } catch (err: unknown) {
    if (err instanceof Error) {
      logger.error(`[${logFuncName}] Error fetching messages from database: ${err.message}`); // 记录错误日志
    } else {
      logger.error(`[${logFuncName}] Unknown error fetching messages from database`); // 记录未知错误日志
    }
    res.status(500).json({ error: 'Failed to fetch messages' }); // 返回服务器错误响应
  }
};