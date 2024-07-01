"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertApi = void 0;
const logger_1 = __importDefault(require("../logger"));
const Message_1 = require("../models/Message");
const logger = (0, logger_1.default)('insert', true); // 指定为后端日志
const insertApi = async (req, res) => {
    const logFuncName = 'insertApi';
    logger.info(`[${logFuncName}] Received POST request on /api/insert at ${new Date().toISOString()}`);
    logger.info(`[${logFuncName}] Request body: ${JSON.stringify(req.body)}`);
    const { message, userId } = req.body;
    const timestamp = new Date().toISOString();
    if (message && userId) {
        try {
            // 使用 Sequelize 数据模型进行插入操作
            const insertedMessage = await Message_1.Message.create({ content: message, user_id: userId, timestamp });
            const processedMessage = insertedMessage.content + '000';
            res.json({
                id: insertedMessage.id,
                message: processedMessage,
                userId: insertedMessage.user_id,
                timestamp: insertedMessage.timestamp,
            });
            logger.info(`[${logFuncName}] Message inserted with ID: ${insertedMessage.id} at ${new Date().toISOString()}`);
        }
        catch (err) {
            logger.error(`[${logFuncName}] Error saving message to database: ${err.message}`);
            res.status(500).json({ error: 'Failed to save message' });
        }
    }
    else {
        logger.warn(`[${logFuncName}] Message and userId are required at ${new Date().toISOString()}`);
        res.status(400).json({ error: 'Message and userId are required' });
    }
};
exports.insertApi = insertApi;
