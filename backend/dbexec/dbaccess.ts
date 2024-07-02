import { Sequelize } from 'sequelize-typescript'; // 引入 Sequelize 模块，用于连接数据库
import { config } from 'dotenv'; // 引入 dotenv 模块，用于加载环境变量
import path from 'path'; // 引入 path 模块，用于处理和转换文件路径

// 加载环境变量文件
config({ path: path.resolve(__dirname, '../../.env') }); 

// 打印数据库配置以进行调试
console.log('Database configuration:');
console.log('DATABASE_USER:', process.env.DATABASE_USER); // 数据库用户
console.log('DATABASE_HOST:', process.env.DATABASE_HOST); // 数据库主机
console.log('DATABASE_NAME:', process.env.DATABASE_NAME); // 数据库名称
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD ? '***' : 'NOT SET'); // 数据库密码（隐藏实际值）
console.log('DATABASE_PORT:', process.env.DATABASE_PORT); // 数据库端口

// 创建 Sequelize 实例并配置连接信息
const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME, // 数据库名称
  dialect: 'postgres', // 使用的数据库类型（这里是 PostgreSQL）
  username: process.env.DATABASE_USER, // 数据库用户名
  password: process.env.DATABASE_PASSWORD, // 数据库密码
  host: process.env.DATABASE_HOST, // 数据库主机地址
  port: Number(process.env.DATABASE_PORT), // 数据库端口，转换为数字类型
  models: [__dirname + '/../models'], // 指定模型路径，所有模型都将在此路径下
});

// 导出 Sequelize 实例，以便在项目的其他部分使用
export default sequelize;
