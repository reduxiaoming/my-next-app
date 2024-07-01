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

// 从 SQL 文件中读取插入消息的 SQL 语句
const insertMessageSql = readFileSync(join(__dirname, '../sql/insertMessage.sql'), 'utf8');

// 定义保存消息的函数
export const saveMessage = async (message: string, userId: string, timestamp: string) => {
  const client = await pool.connect();
  try {
    const result = await client.query(insertMessageSql, [message, userId, timestamp]);
    return result.rows[0];
  } catch (error) {
    console.error('Error executing query', (error as Error).stack);
    throw error; // 重新抛出错误，以便在上层捕获并处理
  } finally {
    client.release();
  }
};