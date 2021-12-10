const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("http://vtbfront.mocklab.io/api", {
      target: "http://vtbfront.mocklab.io",
      secure: false,
      changeOrigin: true
    })
  );
};