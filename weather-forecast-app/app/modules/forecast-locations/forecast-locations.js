'use strict';

var forecastLocations = {
  controller: WeatherForecastCtrl,
  templateUrl: './app/modules/forecast-locations/forecast-locations.html'
};  
    
function WeatherForecastCtrl(openWeatherMap, $state, $timeout){
	var self = this
	self.iconBaseUrl = 'http://openweathermap.org/img/w/';
	self.$onInit = function $onInit() {
	    
	    self.getLocations();		
	};
	self.getLocations= function(){	
		openWeatherMap.locations.get({'path':'locations'}).
		$promise.then(
			function( response ){
				self.setLocations(response);
			},
			function( error ){
				return error;
			}
		)
	}
	self.navigateTo = function(item, isocode){
		$timeout(function() {
  			$state.go('forecast',{location:item+','+isocode});
		}, 0);

	}
	
	self.setLocations = function(loc){
		self.locations = loc.locations;
	}
}
module.exports = forecastLocations;
	
 