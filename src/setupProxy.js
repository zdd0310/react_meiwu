const proxy=require("http-proxy-middleware")


module.exports=(app)=>{
    app.use("/api",proxy({
        target:"https://shop18071958.youzan.com/wscshop/",
        changeOrigin:true,
        pathRewrite:{
            "^/api":"/"
        },
        secure:true
    }))
}