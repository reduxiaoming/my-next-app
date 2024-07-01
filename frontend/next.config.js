// next.config.js
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/public/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // 你可以在这里进行自定义 webpack 配置
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};