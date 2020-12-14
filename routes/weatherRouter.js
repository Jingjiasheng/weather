const express = require('express');
const router = express.Router();
const fs=require('fs');

/// 天气页面路由 ///

// GET 获取天气主页
router.get('/', function(req,res){
	fs.readFile('./views/index.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
});

// GET 获取天气主页
router.get('/Sydney',function(req,res){
	fs.readFile('./views/Sydney.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
});

// GET 获取天气主页
router.get('/Melbourne',function(req,res){
	fs.readFile('./views/Melbourne.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
});

// GET 获取天气主页
router.get('/Brisbane',function(req,res){
	fs.readFile('./views/Brisbane.html',function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
});

module.exports = router;