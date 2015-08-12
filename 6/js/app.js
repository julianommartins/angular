var carrosApp = angular.module('carrosApp', [
'ngRoute',
'carrosCtrl'
]);

carrosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/carros', {
        templateUrl: 'carros/carros.html',
        controller: 'carrosCtrl'
      }).
      when('/carros/:name', {
        templateUrl: 'carros/carrosdetalhe.html',
        controller: 'carrosDetalheCtrl'
      }).
      otherwise({
        redirectTo: '/carros'
      });
  }]);