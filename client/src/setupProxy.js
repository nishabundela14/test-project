const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(["/list","/search","/archieve"],
    createProxyMiddleware({ target: "http://localhost:5000/" })
  );
};