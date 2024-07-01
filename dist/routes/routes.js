"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const insertapi_1 = require("../service/insertapi"); // 确认路径和导入
const selectapi_1 = require("../service/selectapi"); // 确认路径和导入
const router = express_1.default.Router();
// 定义插入 API 路由
router.post('/insert', insertapi_1.insertApi);
// 定义选择 API 路由
router.get('/select', selectapi_1.selectApi);
exports.default = router;
