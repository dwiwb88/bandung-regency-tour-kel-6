const PROXY_CONFIG = [
  {
    context:[
      "/api"
    ],
    target: "http://localhost/bismillah_bisa",
    pathRewrite : {
    "^/api" : ""
    },
    changeOrigin : true,
    secure : false
  }
]
module.exports = PROXY_CONFIG;