import { Request, Response } from 'express';
import createScreenLogger from '../utils/logger';
import { getAllMessages } from '../dbexec/selectdbexec';

const logger = createScreenLogger('select', true); // 指定为后端日志

export const selectApi = async (req: Request, res: Response) => {
  const logFuncName = 'selectApi';
  logger.info(`[${logFuncName}] Received GET request on /api/select at ${new Date().toISOString()}`);

  try {
    const messages = await getAllMessages();
    res.json(messages);
    logger.info(`[${logFuncName}] Retrieved messages from database at ${new Date().toISOString()}`);
  } catch (err) {
    logger.error(`[${logFuncName}] Error fetching messages from database: ${(err as Error).message}`);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};