'use strict';

// Declare app level module which depends on filters, and services
angular.module('weatherForecastApp', [
  'ngRoute',
  'weatherForecastApp.services',
  'weatherForecastApp.directives',
  'weatherForecastApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'templates/forecast.html', controller: 'WeatherForecastCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
