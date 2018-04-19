(function (angular) {
angular.module('MyProject')
     .service('movie', function () {
        this.message = '';
        this.details=JSON.parse(localStorage.getItem('registerDetails'));
        this.setMessage=function(newMessage){
          this.message=newMessage;
          return this.message,this.details;
        }
        this.SetUserDetails= function(e){
            console.log('user details',e);
            localStorage.setItem('registerDetails', JSON.stringify(e));
            return 'success'
        }
        this.getUserDetails=function(){
            return JSON.parse(localStorage.getItem('registerDetails'));
        }
      });
   
}(angular))