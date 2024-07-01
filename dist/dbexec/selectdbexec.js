"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessages = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // 加载环境变量
// 创建数据库连接池
const pool = new pg_1.Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
});
// 从 SQL 文件中读取选择消息的 SQL 语句
const selectMessagesSql = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../sql/selectMessages.sql'), 'utf8');
// 定义获取所有消息的函数
const getAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const result = yield client.query(selectMessagesSql);
        return result.rows;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error executing query', error.stack);
        }
        else {
            console.error('Unknown error executing query');
        }
        throw error; // 重新抛出错误，以便在上层捕获并处理
    }
    finally {
        client.release();
    }
});
exports.getAllMessages = getAllMessages;
