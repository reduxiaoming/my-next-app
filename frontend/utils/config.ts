// config.ts
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001/api' 
  : 'https://your-production-url.com/api';

export { API_BASE_URL };