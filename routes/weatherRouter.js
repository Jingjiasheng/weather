const express = require('express');
const router = express.Router();
const fs = require('fs');
const loadhtml = require('../conf/loadhtml')

/// 天气页面路由 ///

//GET 获取天气主页
router.get('/', function(req, res) {
    loadhtml.loadhtml('./views/Sydney.html', res);
});

//GET 获取Sydney城市页面
router.get('/Sydney', function(req, res) {
    loadhtml.loadhtml('./views/Sydney.html', res);
});

//GET 获取Melbourne城市页面
router.get('/Melbourne', function(req, res) {
    loadhtml.loadhtml('./views/Melbourne.html', res);
});

//GET 获取Brisbane城市页面
router.get('/Brisbane', function(req, res) {
    loadhtml.loadhtml('./views/Brisbane.html', res);
});

module.exports = router;