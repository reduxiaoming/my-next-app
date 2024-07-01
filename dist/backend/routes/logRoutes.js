"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../logger"));
const router = (0, express_1.Router)();
// 定义日志路由处理函数
router.post('/log', (req, res) => {
    // 从请求体中获取日志相关信息
    const { message, level, screenName, isBackend } = req.body;
    // 创建对应 screenName 和 isBackend 的日志记录器
    const logger = (0, logger_1.default)(screenName, isBackend);
    // 根据日志级别记录日志信息
    if (level === 'error') {
        logger.error(message);
    }
    else if (level === 'warn') {
        logger.warn(message);
    }
    else {
        logger.info(message);
    }
    // 返回成功响应
    res.status(200).json({ success: true });
});
exports.default = router;
