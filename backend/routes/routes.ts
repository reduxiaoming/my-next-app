import express from 'express';
import { insertApi } from '../service/insertapi'; // 确认路径和导入
import { selectApi } from '../service/selectapi'; // 确认路径和导入

const router = express.Router();

// 定义插入 API 路由
router.post('/insert', insertApi);

// 定义选择 API 路由
router.get('/select', selectApi);

export default router;