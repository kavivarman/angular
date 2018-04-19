
(function (angular) {
    angular.module('MyProject')
      .controller("myappcontroller", ['$scope','$state','movie','myFactory', function ($scope,$state,movie,myFactory) {
          var a=localStorage.getItem('index');
          $scope.data = movie.getUserDetails();
          $scope.user=$scope.data[a].firstname;
          $scope.address=$scope.data[a].address;
          $scope.medicine="Medicine";
          $scope.foods="Foods";
          $scope.groceries="Groceries";
          $scope.watercans="WaterCans";
          $scope.orders=[];
          $scope.order=function(){ 
            $scope.orders.push
                        ({
                        quantity:$scope.quantity,
                        price: $scope.price,
                        address:$scope.address
                        });
                     $scope.quantity='';
                     alert("Your Order is Successful");
         };
        var b=1;
                   
         $scope.logout=function(){
           b=0;
            $state.go('index.login');
            localStorage.setItem('value',b);  
         }
        localStorage.setItem('value',b);    
        
}]);     
           
  }(angular))
