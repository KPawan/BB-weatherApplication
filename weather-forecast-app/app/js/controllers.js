'use strict';

/* Controllers */

angular.module('weatherForecastApp.controllers', [])

    .controller('WeatherForecastCtrl', WeatherForecastCtrl);
    
	function WeatherForecastCtrl($scope, openWeatherMap){
		$scope.locations = '';
		$scope.iconBaseUrl = 'http://openweathermap.org/img/w/';
		
		function getLocations(){	
			openWeatherMap.locations.get({'path':'locations'}).
			$promise.then(
				function( value ){
					return value.locations;
				},
				function( error ){
					return error;
				}
			)
		}
		getLocations();			

		// Get icon image url
		$scope.getIconImageUrl = function(iconName) {
			return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
		};
	}
	
