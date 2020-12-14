const express = require('express');
const router = express.Router();
const db = require('../conf/mysql.js');



// 获取天气信息路由 ///

// GET 获取Sydney天气信息
router.get('/Sydney', (req,res)=>{
	db.query('select * from weather where id=1', function(err, rows, fields){
    if (err) {
        console.log(err);
        return;
    }
    res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    var sydney='"id"'+':"'+rows[0].id
    	+'",'+'"address"'+':"'+rows[0].address
    	+'",'+'"weather"'+':"'+rows[0].weather
    	+'",'+'"maximum_temperature"'+':"'+rows[0].maximum_temperature
    	+'",'+'"minimum_temperature"'+':"'+rows[0].minimum_temperature
    	+'",'+'"average_temperature"'+':"'+rows[0].average_temperature
		+'",'+'"weather_ico"'+':"'+rows[0].weather_ico
    	+'"';
    res.end(sydney);
    console.log(rows[0]);
	});
});


// GET 获取Melbourne天气信息
router.get('/Melbourne', (req,res)=>{
	db.query('select * from weather where id=2', function(err, rows, fields){
    if (err) {
        console.log(err);
        return;
    }
    res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    var melbourne='"id"'+':"'+rows[0].id
    	+'",'+'"address"'+':"'+rows[0].address
    	+'",'+'"weather"'+':"'+rows[0].weather
    	+'",'+'"maximum_temperature"'+':"'+rows[0].maximum_temperature
    	+'",'+'"minimum_temperature"'+':"'+rows[0].minimum_temperature
    	+'",'+'"average_temperature"'+':"'+rows[0].average_temperature
		+'",'+'"weather_ico"'+':"'+rows[0].weather_ico
    	+'"';
    res.end(melbourne);
    console.log(rows[0]);
	});
});



// GET 获取Brisbane天气信息
router.get('/Brisbane', (req,res)=>{
	db.query('select * from weather where id=3', function(err, rows, fields){
    if (err) {
        console.log(err);
        return;
    }
    res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    var brisbane='"id"'+':"'+rows[0].id
    	+'",'+'"address"'+':"'+rows[0].address
    	+'",'+'"weather"'+':"'+rows[0].weather
    	+'",'+'"maximum_temperature"'+':"'+rows[0].maximum_temperature
    	+'",'+'"minimum_temperature"'+':"'+rows[0].minimum_temperature
    	+'",'+'"average_temperature"'+':"'+rows[0].average_temperature
		+'",'+'"weather_ico"'+':"'+rows[0].weather_ico
    	+'"';
    res.end(brisbane);
    console.log(rows[0]);
	});
});

/// 天气副本、天气种类、作者的路由与天气路由结构基本一致，只是无需获取主页 ///

module.exports = router;