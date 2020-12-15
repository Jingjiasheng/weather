const db = require('../conf/mysql.js');

module.exports.getWeather=function(sql,param){

	var weatherInfo='';
	db.query('select * from weather where id='+param, function(err, rows, fields){
    if (err) {
        console.log(err);
        return;
    }
    weatherInfo='"id"'+':"'+rows[0].id
    	+'",'+'"address"'+':"'+rows[0].address
    	+'",'+'"weather"'+':"'+rows[0].weather
    	+'",'+'"maximum_temperature"'+':"'+rows[0].maximum_temperature
    	+'",'+'"minimum_temperature"'+':"'+rows[0].minimum_temperature
    	+'",'+'"average_temperature"'+':"'+rows[0].average_temperature
		+'",'+'"weather_ico"'+':"'+rows[0].weather_ico
    	+'"';
    })
    return weatherInfo;
}