import { readFileSync } from 'fs'; // 引入 readFileSync 模块，用于同步读取文件
import { join } from 'path'; // 引入 join 模块，用于处理和转换文件路径
import { Pool } from 'pg'; // 引入 pg 模块中的 Pool 类，用于创建 PostgreSQL 连接池
import { config } from 'dotenv'; // 引入 dotenv 模块，用于加载环境变量

config(); // 加载 .env 文件中的环境变量

// 创建数据库连接池
const pool = new Pool({
  user: process.env.DATABASE_USER, // 数据库用户名
  host: process.env.DATABASE_HOST, // 数据库主机地址
  database: process.env.DATABASE_NAME, // 数据库名称
  password: process.env.DATABASE_PASSWORD, // 数据库密码
  port: Number(process.env.DATABASE_PORT), // 数据库端口，转换为数字类型
});

// 从 SQL 文件中读取插入消息的 SQL 语句
const insertMessageSql = readFileSync(join(__dirname, '../sql/insertMessage.sql'), 'utf8');

// 定义保存消息的函数
export const saveMessage = async (message: string, userId: string, timestamp: string) => {
  const client = await pool.connect(); // 获取数据库连接
  try {
    // 执行 SQL 查询，将消息插入数据库
    const result = await client.query(insertMessageSql, [message, userId, timestamp]);
    return result.rows[0]; // 返回插入的第一行结果
  } catch (error) {
    console.error('Error executing query', (error as Error).stack); // 打印错误信息
    throw error; // 重新抛出错误，以便在上层捕获并处理
  } finally {
    client.release(); // 释放数据库连接
  }
};