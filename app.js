// 引入 express 框架 
const express = require('express');
//引入路由框架
const router=express.Router();
//导入文件管理系统
const fs=require('fs');
//定义项目路径
const path=require('path');


//导入主页相关的路由
const infoRouter=require('./routes/infoRouter');

//导入天气相关的路由
const weatherRouter=require('./routes/weatherRouter');
//将路径与路由进行匹配
var app = express();
app.use('/get',infoRouter);
app.use('/weather',weatherRouter);


// 设置 public 为静态文件的存放文件夹
app.use(express.static(path.join(__dirname,'./public')))


//设置首页访问页面
app.get('/', function(req, res) {
    fs.readFile('./views/index.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
})


//设置端口监听
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Node.JS 服务器已启动，访问地址： http://%s:%s", host, port)

})