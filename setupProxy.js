const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
app.use('/api', createProxyMiddleware ({
target: 'https://backend-crud-068a.onrender.com/api/rooms/',
changeOrigin: true, }));
};