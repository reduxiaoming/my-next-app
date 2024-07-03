// 根据当前的环境设置 API 基础 URL
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001/api'  // 开发环境的 API 基础 URL
  : 'https://your-production-url.com/api';  // 生产环境的 API 基础 URL

// 导出 API 基础 URL 以便在项目的其他部分使用
export { API_BASE_URL };