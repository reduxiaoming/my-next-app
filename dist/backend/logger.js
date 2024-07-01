"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const path_1 = require("path");
const { combine, timestamp, label, printf } = winston_1.format;
// 定义日志格式
const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
// 根据 screenName 创建日志文件名
const getLogFileName = (screenName) => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return `${date}_${screenName}.log`;
};
// 创建带有 screenName 和 isBackend 的日志记录器
const createScreenLogger = (screenName, isBackend = true) => {
    return (0, winston_1.createLogger)({
        format: combine(label({ label: isBackend ? 'backend' : 'frontend' }), timestamp(), logFormat),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({ filename: (0, path_1.join)(__dirname, '../logs', getLogFileName(screenName)) })
        ]
    });
};
exports.default = createScreenLogger;
