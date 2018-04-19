(function (angular) {
angular.module('MyProject')
     .factory('myFactory', function () {
         var obj={};
         obj.details=JSON.parse(localStorage.getItem('registerDetails'));   
        return obj; 
      });
   
}(angular))