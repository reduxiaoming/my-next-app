import { Request, Response } from 'express';
import createScreenLogger from '../utils/logger';
import { Message } from '../models/Message';

const logger = createScreenLogger('insert', true); // 指定为后端日志

export const insertApi = async (req: Request, res: Response) => {
  const logFuncName = 'insertApi';
  logger.info(`[${logFuncName}] Received POST request on /api/insert at ${new Date().toISOString()}`);
  logger.info(`[${logFuncName}] Request body: ${JSON.stringify(req.body)}`);
  const { message, userId } = req.body;
  const timestamp = new Date().toISOString();

  if (message && userId) {
    try {
      // 使用 Sequelize 数据模型进行插入操作
      const insertedMessage = await Message.create({ content: message, userId: userId, timestamp: new Date(timestamp) });
      const processedMessage = insertedMessage.content + '000';
      res.json({
        id: insertedMessage.id,
        message: processedMessage,
        userId: insertedMessage.userId,
        timestamp: insertedMessage.timestamp,
      });
      logger.info(`[${logFuncName}] Message inserted with ID: ${insertedMessage.id} at ${new Date().toISOString()}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        logger.error(`[${logFuncName}] Error saving message to database: ${err.message}`);
      } else {
        logger.error(`[${logFuncName}] Unknown error saving message to database`);
      }
      res.status(500).json({ error: 'Failed to save message' });
    }
  } else {
    logger.warn(`[${logFuncName}] Message and userId are required at ${new Date().toISOString()}`);
    res.status(400).json({ error: 'Message and userId are required' });
  }
};

export default insertApi;
