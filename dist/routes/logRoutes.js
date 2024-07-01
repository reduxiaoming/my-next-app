"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../logger"));
const router = (0, express_1.Router)();
router.post('/log', (req, res) => {
    const { message, level, screenName, isBackend } = req.body;
    const logger = (0, logger_1.default)(screenName, isBackend);
    if (level === 'error') {
        logger.error(message);
    }
    else if (level === 'warn') {
        logger.warn(message);
    }
    else {
        logger.info(message);
    }
    res.status(200).json({ success: true });
});
exports.default = router;
