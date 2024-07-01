"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectApi = void 0;
const logger_1 = __importDefault(require("../logger"));
const Message_1 = require("../models/Message");
const logger = (0, logger_1.default)('select', true); // 指定为后端日志
const selectApi = async (req, res) => {
    const logFuncName = 'selectApi';
    logger.info(`[${logFuncName}] Received GET request on /api/select at ${new Date().toISOString()}`);
    try {
        // 使用 Sequelize 数据模型进行查询操作
        const messages = await Message_1.Message.findAll();
        res.json(messages);
        logger.info(`[${logFuncName}] Fetched all messages at ${new Date().toISOString()}`);
    }
    catch (err) {
        logger.error(`[${logFuncName}] Error fetching messages from database: ${err.message}`);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};
exports.selectApi = selectApi;
