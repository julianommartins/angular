var carrosApp = angular.module('carrosApp', []);

carrosApp.controller('carrosCtrl', function ($scope) {
  $scope.carros = [
    {'name': 'Fusca',
     'historia': 'Eterna Paixao do Brasileiro',
     'ano':'66'},
    {'name': 'Opala',
     'historia': 'Damico teve um',
     'ano':'72'},
    {'name': 'Brasilia',
     'historia': 'O primeiro beijo do juliano rolou dentro de uma',
     'ano':'70'}
  ];

    // para o html 4
 $scope.orderProp = 'ano';
});