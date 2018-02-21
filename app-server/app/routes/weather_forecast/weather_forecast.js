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
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.id}`,
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
	app.get('/locations',function(req,res){
		if(api.locations){
			res.send(api.locations);
		}else res.send("err: Locations not found")
	})
	
};

