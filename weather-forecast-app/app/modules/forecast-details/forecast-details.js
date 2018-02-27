'use strict';

/* Controllers */
var forecastDetails = {
  controller: ForecastCtrl,
  templateUrl: './app/modules/forecast-details/forecast-details.html'
};    
function ForecastCtrl(openWeatherMap, $stateParams){
	var self = this;
	self.iconBaseUrl = 'http://openweathermap.org/img/w/';
	self.$onInit = function $onInit() {
  	self.getWeatherForecast($stateParams.location);		
	};

	self.getWeatherForecast = function(location){
		openWeatherMap.weatherForecast.get({'location': location}).$promise.then(
			function( response ){
				self.forecast = response;
				self.getDailyForecast(response.id);
			},
			function( error ){
				return error;
			}
		)
	};
	
	self.getDailyForecast = function(id){
		openWeatherMap.forecastDaily.get({'id': id}).$promise.then(
			function( response ){
				self.dailyForecast = response;
				self.getChartData(id);
			},
			function( error ){
				return error;
			}
		)
	};
	
	self.getChartData = function(id){
		openWeatherMap.hourlyForecastInfo.get({'id': id}).$promise.then(
			function( response ){	
				var ctx = document.getElementById('chartJSContainer').getContext('2d');
				new Chart(ctx, response);
			},
			function( error ){
				return error;
			}	
		)
	};
			
	// Get icon image url
	self.getIconImageUrl = function(iconName) {
		return (iconName ? this.iconBaseUrl + iconName + '.png' : '');
	};
}

module.exports = forecastDetails;	
