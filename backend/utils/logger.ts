import { createLogger, format, transports } from 'winston'; // 引入 winston 模块，用于创建日志记录器
import path from 'path'; // 引入 path 模块，用于处理和转换文件路径
import { LOG_LEVEL } from './config'; // 从 config 文件中读取环境变量

// 创建日志记录器的函数
const createScreenLogger = (screenName: string, isBackend: boolean) => {
  const logDir = path.join(__dirname, '../../logs'); // 日志文件存放目录
  const logFormat = format.printf(({ level, message, timestamp }) => {
    const localTime = new Date(timestamp).toLocaleString(); // 将时间转换为本地时间
    return `${localTime} [${isBackend ? 'backend' : 'frontend'}] ${level}: ${message}`; // 日志格式
  });

  const localDate = new Date().toLocaleDateString('sv-SE').replace(/-/g, ''); // 格式化本地日期为 YYYYMMDD

  return createLogger({
    level: LOG_LEVEL, // 从环境变量中读取日志等级
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // 设置本地时间格式
      logFormat
    ),
    transports: [
      new transports.Console(), // 控制台输出
      new transports.File({
        filename: path.join(logDir, `${localDate}_${screenName}.log`) // 使用本地日期作为文件名
      })
    ]
  });
};

export default createScreenLogger; // 导出日志记录器函数