const db = require('../conf/mysql.js');
var weatherInfo = '';

///定义sql数据库查询方法///
module.exports.getWeather = function(sql, param, res) {
    db.query(sql + param, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        weatherInfo = '"id"' + ':"' + rows[0].id +
            '",' + '"address"' + ':"' + rows[0].address +
            '",' + '"weather"' + ':"' + rows[0].weather +
            '",' + '"maximum_temperature"' + ':"' + rows[0].maximum_temperature +
            '",' + '"minimum_temperature"' + ':"' + rows[0].minimum_temperature +
            '",' + '"average_temperature"' + ':"' + rows[0].average_temperature +
            '",' + '"weather_ico"' + ':"' + rows[0].weather_ico +
            '"';
        res.writeHead(200, { "Content-Type": "text/json;charset=UTF-8" });
        res.end(weatherInfo);
    })
}