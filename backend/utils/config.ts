import dotenv from 'dotenv'; // 引入 dotenv 模块，用于加载环境变量

// 加载 .env 文件中的环境变量
dotenv.config();

// 导出 API 基础 URL
export const API_BASE_URL = process.env.API_BASE_URL;

// 导出日志级别
export const LOG_LEVEL = process.env.LOG_LEVEL;

// 导出允许的来源，用于 CORS 配置
export const ORIGIN = process.env.ORIGIN;

// 导出服务器端口
export const PORT = process.env.PORT;

// 导出数据库配置
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_PORT = process.env.DATABASE_PORT;