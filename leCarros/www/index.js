var CarrosApp = angular.module("CarrosApp", ["ionic"]);

CarrosApp.service("CarrosService",["$http","$rootScope",CarrosService]);

CarrosApp.controller("CarrosCtrl", ["$scope", "$ionicLoading", "$ionicListDelegate", "CarrosService", CarrosCtrl]);

function CarrosCtrl($scope, $ionicLoading, $ionicListDelegate, CarrosService) {
    
    $ionicLoading.show({
      template: 'Carregando carros...'
    });
    
    $scope.carros = [];
    $scope.$on("CarrosApp.carros", function(_, result){
        result.data.forEach(function(c) {
           $scope.carros.push({
               ide: c.id,
               name: c.name,
               brand: c.brand 
           });
        });
        $ionicLoading.hide();
    });
    CarrosService.loadCarros();
     
    
    $scope.share = function($index) {
        $ionicListDelegate.closeOptionButtons();
        console.log("share: " + $scope.carros[$index].name);
        var message = {
            text: "O Carro selecionado foi o " + $scope.carros[$index].name
        };
        window.socialmessage.send(message);
        
    }
}

function CarrosService($http, $rootScope){
    this.loadCarros = function() {
     $http.get("https://tars.eigmercados.com.br/tamandare-friendly-web/rest/vehicle/get").success(function(result){
        $rootScope.$broadcast("CarrosApp.carros", result);
     
     });
        
    }
}