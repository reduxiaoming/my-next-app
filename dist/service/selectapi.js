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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectApi = void 0;
const logger_1 = __importDefault(require("../logger"));
const selectdbexec_1 = require("../dbexec/selectdbexec");
const logger = (0, logger_1.default)('select', true); // 指定为后端日志
const selectApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const logFuncName = 'selectApi';
    logger.info(`[${logFuncName}] Received GET request on /api/select at ${new Date().toISOString()}`);
    try {
        const messages = yield (0, selectdbexec_1.getAllMessages)();
        res.json(messages);
        logger.info(`[${logFuncName}] Retrieved messages from database at ${new Date().toISOString()}`);
    }
    catch (err) {
        logger.error(`[${logFuncName}] Error fetching messages from database: ${err.message}`);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});
exports.selectApi = selectApi;
