
(function (angular) {
    angular.module('MyProject')
      .controller("registercontroller", ['$scope','Products', function ($scope, Products) {
          var a=5;
         console.log(a);
         $scope.message="welcome to my app";
          
          $scope.register=function(){
            alert("Register Successfully"); 
         }
        $scope.Product = Products.Items;
      }]);      
}(angular))