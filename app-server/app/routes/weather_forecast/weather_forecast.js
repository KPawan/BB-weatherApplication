/* Created by pawan koul on 19-02-2018.
 * create API's to talk to Frontend Application for weather details
 *  ES6's Template strings
 */
"use strict";
const request  = require('request-promise');
const  apiKey   = require( '../../../config/weatherAPI' );

module.exports = function(app) {
	var requiredHeaders = {
		'User-Agent': 'Request-Promise',
	}
    app.get('/weatherInfo', function(req, res) {
        const options = {
            method: 'GET',
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.id}&appid=${apiKey.key}`,
            headers: requiredHeaders
        }
        request(options)
            .then(function(response) {
                res.send(response);
            })
            .catch(function(err) {
               	res.send(err); 
            })
    });

};

