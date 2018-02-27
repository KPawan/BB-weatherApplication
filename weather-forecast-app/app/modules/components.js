/*
* Register all the components from the central location
* This structure gives an easy access to register all the components with root module
*/

var forecastLocations = require('./forecast-locations/forecast-locations');
var forecastDetails = require('./forecast-details/forecast-details');
module.exports = function(ngModule){
	ngModule.component('forecastLocations', forecastLocations)
	        .component('forecastDetails', forecastDetails);
}

  