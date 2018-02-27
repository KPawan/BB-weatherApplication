/* Created by pawan koul on 19-02-2018.
 * 
 * Register the module
 */
const weatherForecast = require('./weather_forecast');
module.exports = function(app) {
	weatherForecast(app);
}; 