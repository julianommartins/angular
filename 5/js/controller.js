var carrosApp = angular.module('carrosApp', []);

carrosApp.controller('carrosCtrl', function ($scope,  $http) {
  
  $http.get('carros.json').success(function(data) {
    $scope.carros = data;
  });
    
 $scope.orderProp = 'ano';
});