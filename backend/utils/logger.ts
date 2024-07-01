import { createLogger, format, transports } from 'winston';
import path from 'path';
import { LOG_LEVEL } from './config'; // 从 config 文件中读取环境变量

// 创建日志记录器
const createScreenLogger = (screenName: string, isBackend: boolean) => {
  const logDir = path.join(__dirname, '../../logs');
  const logFormat = format.printf(({ level, message, timestamp }) => {
    const localTime = new Date(timestamp).toLocaleString(); // 将时间转换为本地时间
    return `${localTime} [${isBackend ? 'backend' : 'frontend'}] ${level}: ${message}`;
  });

  const localDate = new Date().toLocaleDateString('sv-SE').replace(/-/g, ''); // 格式化本地日期为 YYYYMMDD

  return createLogger({
    level: LOG_LEVEL, // 从环境变量中读取日志等级
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // 设置本地时间格式
      logFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: path.join(logDir, `${localDate}_${screenName}.log`) // 使用本地日期作为文件名
      })
    ]
  });
};

export default createScreenLogger;