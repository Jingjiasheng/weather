const express = require('express');
const router = express.Router();
const db = require('../conf/mysql.js');
const dbUtil = require('../conf/dbutils');
const util = require('util')

// 获取天气信息路由 ///

// 定义基础sql
const baseSql = 'select * from weather where id='

// GET 获取Sydney天气信息
router.get('/Sydney', (req, res) => {
    dbUtil.getWeather(baseSql, req.query.id, res);
});


// GET 获取Melbourne天气信息
router.get('/Melbourne', (req, res) => {
    dbUtil.getWeather(baseSql, req.query.id, res);
});


// GET 获取Brisbane天气信息
router.get('/Brisbane', (req, res) => {
    dbUtil.getWeather(baseSql, req.query.id, res);
});

module.exports = router;