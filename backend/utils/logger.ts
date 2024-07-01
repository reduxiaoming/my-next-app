import { createLogger, format, transports } from 'winston';
import path from 'path';

// 创建日志记录器
const createScreenLogger = (screenName: string, isBackend: boolean) => {
  const logDir = path.join(__dirname, '../../logs');
  const logLevel = 'info'; // 或 'error', 'warn', 'debug', 等等
  const logFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${isBackend ? 'backend' : 'frontend'}] ${level}: ${message}`;
  });

  return createLogger({
    level: logLevel,
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      logFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: path.join(logDir, `${new Date().toISOString().slice(0, 10)}_${screenName}.log`)
      })
    ]
  });
};

export default createScreenLogger;