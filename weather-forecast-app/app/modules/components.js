var forecastLocations = require('./forecast-locations/forecast-locations');
var forecastDetails = require('./forecast-details/forecast-details');
module.exports = function(ngModule){
	ngModule.component('forecastLocations', forecastLocations)
	        .component('forecastDetails', forecastDetails);
}

  