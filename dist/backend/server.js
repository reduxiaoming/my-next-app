"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // 加载环境变量
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const routes_1 = __importDefault(require("./routes/routes"));
const logRoutes_1 = __importDefault(require("./routes/logRoutes")); // 引入日志路由
const logger_1 = __importDefault(require("./logger"));
const dbaccess_1 = __importDefault(require("./dbexec/dbaccess"));
const logger = (0, logger_1.default)('server', true); // 创建 logger 实例
// 同步模型到数据库
dbaccess_1.default.sync()
    .then(() => {
    console.log('Database & tables created!');
})
    .catch(err => {
    console.error('Unable to create tables:', err);
});
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev, dir: './frontend' });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use('/api', routes_1.default);
    server.use('/api', logRoutes_1.default); // 挂载日志路由到 /api 路径下
    server.all('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(3000, (err) => {
        if (err) {
            logger.error(err.stack || err.message || err);
            throw err;
        }
        logger.info('> Ready on http://localhost:3000');
    });
});
