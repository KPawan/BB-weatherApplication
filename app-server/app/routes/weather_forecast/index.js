/* Created by pawan koul on 19-02-2018.
 * 
 * 
 */
const weatherForecast = require('./weather_forecast');
module.exports = function(app) {
	weatherForecast(app);
}; 