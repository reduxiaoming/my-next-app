// backend/utils/dbInit.ts
import { readFileSync } from 'fs';
import { join } from 'path';
import sequelize from '../dbexec/dbaccess'; // 确认路径正确

const initDB = async () => {
    const ddlPath = join(__dirname, '../ddl/create_tables.sql');
    const ddlScript = readFileSync(ddlPath, 'utf8');
    try {
        await sequelize.query(ddlScript);
        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
};

export default initDB;