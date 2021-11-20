const { createProxyMiddleware } = require("http-proxy-middleware");

//this setup is for local only
module.exports = function (app) {
  app.use(["/list","/search","/archive"],
    createProxyMiddleware({ target: "http://localhost:5000/" })
  );
};