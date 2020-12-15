///mysql的配置文件///
var db = {};
const mysql = require('mysql');

///配置连接池///
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '42.192.84.4',
    user: 'root',
    password: '123456',
    database: 'weather_info'
});

db.query = function(sql, callback) {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        };
        callback(null, rows, fields);
    });
}
module.exports = db;