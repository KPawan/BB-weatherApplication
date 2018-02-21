'use strict';

/* Services */

angular.module('weatherForecastApp.services', ['ngResource'])

  .factory('openWeatherMap', function($resource) {
	var apiBaseUrl = 'http://localhost:7000/'
    return {
		weatherForecast: $resource(apiBaseUrl + ':path?q=:location',
		{
			queryForecast: {
				method: 'GET',
				params: {
					path: 'forecast'
				},
				isArray: false,
			}
		}),
		locations: $resource(apiBaseUrl + ':path',
		{
			path:'@path',
		}) 
	}
  });
