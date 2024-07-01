-- backend/ddl/create_tables.sql
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id VARCHAR(255),
    timestamp TIMESTAMP WITH TIME ZONE
);

-- 其他DDL语句可以放在这里