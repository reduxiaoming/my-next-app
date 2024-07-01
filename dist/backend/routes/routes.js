"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const insertapi_1 = require("../service/insertapi");
const selectapi_1 = require("../service/selectapi");
const router = (0, express_1.Router)();
// 设置路由
router.post('/insert', insertapi_1.insertApi);
router.get('/select', selectapi_1.selectApi);
exports.default = router;
