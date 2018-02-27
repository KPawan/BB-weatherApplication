'use strict';

const angular = require('angular');
const ngModule = angular.module('weatherForecastApp', ['ui.router','ngResource']);

ngModule.config(config);
require('./modules/components')(ngModule);
require('./ui/weather-panel')(ngModule);
require('./data-access/openWeatherMapDataService')(ngModule);

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



