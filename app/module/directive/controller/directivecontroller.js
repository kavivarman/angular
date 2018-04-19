
(function (angular) {
    angular.module('MyProject')
      .controller("directivecontroller", ['$scope', function ($scope) {
            $scope.callHome = function (message) {
              alert(message);
            };
        $scope.name ="paper";
        $scope.name1 ="rock";
        $scope.student ="Rohit"; 
        $scope.obj = { fname: 'shubh', lname: 'raj' };   
         $scope.customer = { fname: 'shubh', lname: 'raj' }; 
        $scope.swapData = function () {
        $scope.customer = {
            fname: 'Raj',
            lname: 'kumar'
        };
    };    
}]);                
  }(angular))