(function (angular) {
    angular.module('MyProject')
      .controller("formcontroller", ["$scope","$state","defaultInput","movie","myFactory", function ($scope, $state,defaultInput,movie,myFactory) {
         console.log("welcome");
        //  $scope.user = movie.details;
         $scope.message="welcome to my app";
        //  $scope.number = defaultInput;
        //  $scope.fruit=movie.setMessage("the Matrix");
        $scope.login=function(){
          //$scope.user = myFactory.details;
          debugger;
          $scope.user=movie.getUserDetails();
          console.log('user details',$scope.user);
          var temp =0;
          for(var i=0;i<$scope.user.length;i++){
              if($scope.user[i].email==$scope.email)
                {
                  if($scope.user[i].password==$scope.password)
                    {
                      temp =1; 
                      localStorage.setItem('index',i);
                      $state.go('index.myApp');
                     
                    }
                    else
                      {
                        temp =1;
                        alert("Your Password is incorrect");
                        $scope.password='';
                      }
                }       
          }   
              if(temp==0){
                alert("enter valid Email");
                 $scope.email='';
                 $scope.password='';
              }                       
        };
      }]);    
}(angular))