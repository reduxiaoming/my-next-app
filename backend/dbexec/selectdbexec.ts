import { readFileSync } from 'fs';
import { join } from 'path';
import { Pool } from 'pg';
import { config } from 'dotenv';
config(); // 加载环境变量

// 创建数据库连接池
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});

// 从 SQL 文件中读取选择消息的 SQL 语句
const selectMessagesSql = readFileSync(join(__dirname, '../sql/selectMessages.sql'), 'utf8');

// 定义获取所有消息的函数
export const getAllMessages = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(selectMessagesSql);
    return result.rows;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error executing query', error.stack);
    } else {
      console.error('Unknown error executing query');
    }
    throw error; // 重新抛出错误，以便在上层捕获并处理
  } finally {
    client.release();
  }
};