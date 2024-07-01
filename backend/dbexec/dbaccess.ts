import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '../../.env') }); // 加载环境变量

console.log('Database configuration:');
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD ? '***' : 'NOT SET');
console.log('DATABASE_PORT:', process.env.DATABASE_PORT);

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  models: [__dirname + '/../models'], // 指定模型路径
});

export default sequelize;