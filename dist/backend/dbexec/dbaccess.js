"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // 加载环境变量
// 创建一个 Sequelize 实例并配置数据库连接
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE_NAME,
    dialect: 'postgres',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    models: [__dirname + '/../models'] // 模型文件的位置
});
// 测试数据库连接
sequelize.authenticate()
    .then(() => {
    console.log('Connected to the PostgreSQL database using Sequelize.');
})
    .catch(err => {
    console.error('Unable to connect to the PostgreSQL database:', err);
});
exports.default = sequelize;
