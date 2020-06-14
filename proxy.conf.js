const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://192.168.99.1:8001/',

        pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;