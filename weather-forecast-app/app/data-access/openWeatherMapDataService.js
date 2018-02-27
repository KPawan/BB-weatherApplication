'use strict';

/* Services */
module.exports = function(ngModule){
  ngModule.factory('openWeatherMap', function($resource) {
	var apiBaseUrl = 'http://localhost:7000/'
    return {
		weatherForecast: $resource(apiBaseUrl +'weatherInfo?location=:location',
		{
			location: '@location'
		}),
		locations: $resource(apiBaseUrl + ':path',
		{
			path:'@path'
		}),
		forecastDaily: $resource(apiBaseUrl +'forecastInfo?id=:id',
		{
			id: '@id'
		}),	
		hourlyForecastInfo: $resource(apiBaseUrl +'hourlyForecastInfo?id=:id',
		{
			id: '@id'
		})
	}
  });
};
