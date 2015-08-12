var carrosCtrl = angular.module('carrosCtrl', []);

carrosCtrl.controller('carrosCtrl', function ($scope,  $http) {
  
  $http.get('carros.json').success(function(data) {
    $scope.carros = data;
  });
    
 $scope.orderProp = 'ano';
});

carrosCtrl.controller('carrosDetalheCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = $routeParams.name;
  }]);