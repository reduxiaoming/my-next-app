module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/styles/:path*',
                destination: '/frontend/styles/:path*',
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                net: false,
                tls: false,
            };
            config.devtool = 'source-map';
        }
        return config;
    },
};
