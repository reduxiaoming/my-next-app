"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertApi = void 0;
const logger_1 = __importDefault(require("../logger"));
const Message_1 = require("../models/Message");
const logger = (0, logger_1.default)('insert', true); // 指定为后端日志
const insertApi = (req, res) => __awaiter(void 0, void 0, void 0, function*() {
    const logFuncName = 'insertApi';
    logger.info(`[${logFuncName}] Received POST request on /api/insert at ${new Date().toISOString()}`);
    logger.info(`[${logFuncName}] Request body: ${JSON.stringify(req.body)}`);
    const { message, userId } = req.body;
    const timestamp = new Date().toISOString();
    if (message && userId) {
        try {
            // 使用 Sequelize 数据模型进行插入操作
            const insertedMessage = yield Message_1.Message.create({ content: message, userId: userId, timestamp: new Date(timestamp) });
            const processedMessage = insertedMessage.content;
            res.json({
                id: insertedMessage.id,
                message: processedMessage,
                userId: insertedMessage.userId,
                timestamp: insertedMessage.timestamp,
            });
            logger.info(`[${logFuncName}] Message inserted with ID: ${insertedMessage.id} at ${new Date().toISOString()}`);
        } catch (err) {
            if (err instanceof Error) {
                logger.error(`[${logFuncName}] Error saving message to database: ${err.message}`);
            } else {
                logger.error(`[${logFuncName}] Unknown error saving message to database`);
            }
            res.status(500).json({ error: 'Failed to save message' });
        }
    } else {
        logger.warn(`[${logFuncName}] Message and userId are required at ${new Date().toISOString()}`);
        res.status(400).json({ error: 'Message and userId are required' });
    }
});
exports.insertApi = insertApi;
exports.default = exports.insertApi;