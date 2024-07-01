"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
// 创建日志记录器
const createScreenLogger = (screenName, isBackend) => {
    const logDir = path_1.default.join(__dirname, '../../logs');
    const logLevel = 'info'; // 或 'error', 'warn', 'debug', 等等
    const logFormat = winston_1.format.printf(({ level, message, timestamp }) => {
        return `${timestamp} [${isBackend ? 'backend' : 'frontend'}] ${level}: ${message}`;
    });
    return (0, winston_1.createLogger)({
        level: logLevel,
        format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename: path_1.default.join(logDir, `${new Date().toISOString().slice(0, 10)}_${screenName}.log`)
            })
        ]
    });
};
exports.default = createScreenLogger;
