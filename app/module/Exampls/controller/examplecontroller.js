(function (angular) {
    angular.module('MyProject')
     .value("defaultInput", 0);

    angular.module('MyProject')
     .constant("quality", 5);

    
    // angular.module('MyProject')  
    //  .factory('myFactory', function () {
    //     var obj = {};
    //     obj.message = '';
    //       obj.setMessage = function (newMessage) {
    //           obj.message = newMessage;
    //       };
    //       return obj;
    //     });

    angular.module('MyProject')
      .controller("examplecontroller", ["$scope","$state","defaultInput","quality","movie","myFactory", function ($scope, $state, defaultInput,quality,movie,myFactory) {
         defaultInput=10;
         $scope.number = defaultInput;
         quality="Hello World";
         $scope.fruit=movie.setMessage("the Matrix");
         myFactory.setMessage("the Hulk");
         $scope.name=myFactory.message;
      }]);
          
}(angular))