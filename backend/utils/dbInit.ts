// backend/utils/dbInit.ts
import { readFileSync } from 'fs'; // 引入 readFileSync 模块，用于同步读取文件
import { join } from 'path'; // 引入 join 模块，用于处理和转换文件路径
import sequelize from '../dbexec/dbaccess'; // 确认路径正确

// 定义初始化数据库的函数
const initDB = async () => {
    const ddlPath = join(__dirname, '../ddl/create_tables.sql'); // 指定 DDL 脚本的路径
    const ddlScript = readFileSync(ddlPath, 'utf8'); // 读取 DDL 脚本的内容
    try {
        await sequelize.query(ddlScript); // 执行 DDL 脚本
        console.log('Database initialized successfully.'); // 打印成功消息
    } catch (error) {
        console.error('Error initializing database:', error); // 打印错误信息
        throw error; // 重新抛出错误，以便在上层捕获并处理
    }
};

export default initDB; // 导出初始化数据库的函数