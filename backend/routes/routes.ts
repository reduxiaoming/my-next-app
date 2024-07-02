import express from 'express'; // 引入 express 模块
import { insertApi } from '../service/insertapi'; // 从服务模块引入插入 API 的处理函数
import { selectApi } from '../service/selectapi'; // 从服务模块引入选择 API 的处理函数

const router = express.Router(); // 创建一个新的 express 路由器实例

// 定义插入 API 路由
// 当收到对 /insert 的 POST 请求时，调用 insertApi 处理函数
router.post('/insert', insertApi);

// 定义选择 API 路由
// 当收到对 /select 的 GET 请求时，调用 selectApi 处理函数
router.get('/select', selectApi);

export default router; // 导出路由器实例，以便在应用程序的其他部分使用