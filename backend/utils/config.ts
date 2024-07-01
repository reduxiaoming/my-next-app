import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

export const API_BASE_URL = process.env.API_BASE_URL;
export const ORIGIN = process.env.ORIGIN;
export const PORT = process.env.PORT;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_PORT = process.env.DATABASE_PORT;