
(function (angular) {
    angular.module('MyProject')
      .controller("formcontroller", ["$scope","Products", function ($scope, Products) {
         console.log("welcome");
         $scope.message="welcome to my app";
        $scope.validation = function(){
            var a =10;
            $scope.Product = Products.Items;
        };
        $scope.Product = Products.Items;
      }]);    
}(angular))