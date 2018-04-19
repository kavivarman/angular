(function (angular) {
    angular.module('MyProject')
      .controller("contentcontroller", ["$scope","$state", function ($scope, $state) {
        $scope.data = JSON.parse(localStorage.getItem('registerDetails'));
        // $state.go('index.example');
        var value=localStorage.getItem('value');
        if($scope.data==null)
            $state.go('index.register');
        else if(value==1){
            $state.go('index.myApp');
        }
        else
            $state.go('index.login');
      }]);
}(angular))