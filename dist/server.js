"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
// 手动指定 .env 文件的路径
(0, dotenv_1.config)({ path: path_1.default.resolve(__dirname, '../../.env') });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const logRoutes_1 = __importDefault(require("./routes/logRoutes")); // 引入日志路由
const logger_1 = __importDefault(require("./logger"));
const dbaccess_1 = __importDefault(require("./dbexec/dbaccess")); // 确认路径正确
const logger = (0, logger_1.default)('server', true); // 创建 logger 实例
// 同步模型到数据库
dbaccess_1.default.sync()
    .then(() => {
    const successMessage = 'Database & tables created!';
    console.log(successMessage); // 控制台输出
    logger.info(successMessage);
})
    .catch((err) => {
    const errorMessage = `Unable to create tables: ${err.message}`;
    console.error(errorMessage); // 控制台输出
    logger.error(errorMessage);
});
const server = (0, express_1.default)();
server.use(express_1.default.json());
// 打印调试信息
server.use((req, res, next) => {
    const requestMessage = `Received request: ${req.method} ${req.url}`;
    console.log(requestMessage); // 控制台输出
    logger.info(requestMessage);
    next();
});
server.use('/api', routes_1.default);
server.use('/api', logRoutes_1.default); // 挂载日志路由到 /api 路径下
const PORT = process.env.PORT || 3001; // 使用 3001 端口
server.listen(PORT, (err) => {
    if (err) {
        const errorMessage = err.stack || err.message || err;
        console.error(errorMessage); // 控制台输出
        logger.error(errorMessage);
        throw err;
    }
    const successMessage = `> Backend ready on http://localhost:${PORT}`;
    console.log(successMessage); // 控制台输出
    logger.info(successMessage);
});
// 打印服务器启动消息
console.log('Express server is set up and listening.');
logger.info('Express server is set up and listening.');
