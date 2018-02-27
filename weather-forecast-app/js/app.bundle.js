webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(1);
	const ngModule = angular.module('weatherForecastApp', ['ui.router','ngResource']);

	ngModule.config(config);
	__webpack_require__(3)(ngModule);
	__webpack_require__(6)(ngModule);
	__webpack_require__(8)(ngModule);

	function config($stateProvider,
	  $urlRouterProvider) {

	  $urlRouterProvider.otherwise('/locations');
	  $stateProvider
	    .state('locations', {
	      url: '/locations',
	      template: '<forecast-locations></forecast-locations>'
	    })
	    .state('forecast', {
	      url: '/forecast',
	      template: '<forecast-details></forecast-details>',
	      params: {location: null}
	    })
	};





/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var forecastLocations = __webpack_require__(4);
	var forecastDetails = __webpack_require__(5);
	module.exports = function(ngModule){
		ngModule.component('forecastLocations', forecastLocations)
		        .component('forecastDetails', forecastDetails);
	}

	  

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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
		
	 

/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(ngModule){
	  __webpack_require__(7)(ngModule);
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	/* Directives */
	module.exports = function(ngModule){
	  ngModule.directive('weatherPanel',function(){
	    return {
	      restrict: 'EA',
	      scope:{
	        useDayForecast: '=showEntry',
	        forecast: '=weatherPanel'
	      },
	      templateUrl: './app/ui/weather-panel/weather-panel.html',
	      controllerAs: 'vm',
	      controller: weatherPanelCtrl
	      
	    }
	  })
	};

	function weatherPanelCtrl() {
	  var vm = this; 
	  vm.getIconImageUrl = function(iconName) {
	    return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
	  };

	  vm.parseDate = function (time) {
	    return new Date(time * 1000);
	  };
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

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


/***/ })
]);