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
