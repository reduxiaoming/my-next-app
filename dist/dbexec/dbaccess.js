"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)({ path: path_1.default.resolve(__dirname, '../../.env') }); // 加载环境变量
console.log('Database configuration:');
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD ? '***' : 'NOT SET');
console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE_NAME,
    dialect: 'postgres',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    models: [__dirname + '/../models'], // 指定模型路径
});
exports.default = sequelize;
