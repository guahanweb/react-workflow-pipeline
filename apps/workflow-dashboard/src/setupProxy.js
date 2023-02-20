const { createProxyMiddleware } = require('http-proxy-middleware');

function getProxyAddress() {
    const value = process.env && process.env.API_PROXY;

    return value || 'http://localhost:5000';
}

module.exports = function (app) {
    const apiProxy = createProxyMiddleware({
        target: getProxyAddress(),
        changeOrigin: true,
    });

    // route all /api/* requests through proxy
    app.use('/api', apiProxy);
};
