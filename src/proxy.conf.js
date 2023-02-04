const PROXY_CONFIG = [
    {
      context:[
        "/api"
      ],
      target: "https://documenter.getpostman.com/view/25338635/2s8ZDbVfQe",
      pathRewrite : {
      "^/api" : "/9570b439-6f80-49"
      },
      changeOrigin : true,
      secure : false
    }
  ]
  module.exports = PROXY_CONFIG;