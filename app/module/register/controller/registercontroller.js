
(function (angular) {
    angular.module('MyProject')
     .controller('registercontroller',['$scope','$state','movie','myFactory',
        function($scope, $state,movie, myFactory){
            $scope.message="welcome to my app";
            $scope.registerDetails=[];
            // $scope.user = movie.details;
            $scope.user = movie.getUserDetails();
            if($scope.user==null){
               $scope.registerDetails=[]; 
            }
            else{
                for(var i=0;i<$scope.user.length;i++)
                {
                $scope.registerDetails.push($scope.user[i]);
                }
            }
            $scope.register=function(){
                if($scope.email!=null && $scope.email!='')
                {
                    var temp=0;
                        angular.forEach($scope.registerDetails, function(item,index){            
                        if($scope.email==item.email)
                            {              
                                    alert("Email Id Already Existed");
                                    $scope.email='';
                                    $scope.password='';
                                    temp=1;    
                            }   
                        })
                 if(temp==0)
                    {           
                        $scope.registerDetails.push({
                            firstname:$scope.firstname,
                            address:$scope.address,
                            email:$scope.email,
                            password:$scope.password
                        });
                        movie.SetUserDetails($scope.registerDetails);
                        //localStorage.setItem('registerDetails', JSON.stringify($scope.registerDetails)); 
                        $scope.firstname='';
                        $scope.address='';
                        $scope.email='';
                        $scope.password='';    
                        $state.go('index.login');     
                        alert("register Successful");      
                        
                    }
                     
                }
                
               
            };
            
        }]);//controller
   
}(angular))