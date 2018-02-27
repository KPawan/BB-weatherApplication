/* Created by pawan koul on 19-02-2018.
 * create API's to talk to Frontend Application for weather details
 *  ES6's Template strings
 */
"use strict";
const request  = require('request-promise');
const api      = require( '../../../config/weatherAPI' );

module.exports = function(app) {
	var requiredHeaders = {
		'User-Agent': 'Request-Promise',
		'x-api-key' : api.key
	}
	
    app.get('/weatherInfo', function(req, res) {
        const options = {
            method: 'GET',
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.location}&units=metric`,
            headers: requiredHeaders
        }
        request(options)
            .then(function(response) {
				
                res.send(response);
            })
            .catch(function(err) {
				var errResponse = err.response.body;
               	res.send(JSON.parse(errResponse).message); 
            })
    });
	app.get('/forecastInfo', function(req, res) {
        const options = {
            method: 'GET',
            uri: `http://api.openweathermap.org/data/2.5/forecast/daily?id=${req.query.id}&units=metric&cnt=5`,
            headers: requiredHeaders
        }
        request(options)
            .then(function(response) {
				res.send(response);
            })
            .catch(function(err) {
				var errResponse = err.response.body;
               	res.send(JSON.parse(errResponse).message); 
            })
    });
	app.get('/hourlyForecastInfo', function(req, res) {
		var chartData = {};
		var time = [];
		var maxTemp = [];
		var minTemp = [];
        const options = {
            method: 'GET',
            uri: `http://api.openweathermap.org/data/2.5/forecast?id=${req.query.id}&units=metric&cnt=10`,
            headers: requiredHeaders
        }
        request(options)
            .then(function(response) {
				
				var response = JSON.parse(response);
				chartData = api.chartModel;
				console.log(response.list.length);
                for (var i = 0; i < response.list.length ; i++){
					time.push(response.list[i].dt_txt);
					maxTemp.push(response.list[i].main.temp_max);
					minTemp.push(response.list[i].main.temp_min);				
				}
				
				chartData.data.labels = time
				chartData.data.datasets[0].label = "max temp.";
				chartData.data.datasets[0].data = maxTemp;
				chartData.data.datasets[1].label = "min temp.";
				chartData.data.datasets[1].data = minTemp;
                res.send(chartData);
				
            })
            .catch(function(err) {
				var errResponse = err.response.body;
               	res.send(JSON.parse(errResponse).message); 
            })
    });
	app.get('/locations',function(req,res){
		if(api.locations){
			res.send(api.locations);
		}else res.send("err: Locations not found")
	});
	
	
};

