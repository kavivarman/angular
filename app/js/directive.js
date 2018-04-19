
(function (angular) {     
    angular.module('MyProject')       
      .directive("falseDirective", function () {
        return {
          restrict: 'EA',
          scope: false,
          template: "<div>directive scope value : {{name}}</div>"+
          "Change directive scope value : <input type='text' ng-model='name' />"
      };
          });
     angular.module('MyProject')       
      .directive("trueDirective", function () {
        return {
          restrict: 'EA',
          scope: true,
          template: "<div>directive scope value : {{name1}}</div>"+
          "Change directive scope value : <input type='text' ng-model='name1' />"
      };
          });
     angular.module('MyProject')       
      .directive("oneWayDirective", function () {
        return {
          restrict: 'EA',
          scope: {
            name:'@'
          },
            template: "StudentName:{{name}}"+"<input type='text' ng-model='name' />"
        };
          });
      angular.module('MyProject')       
        .directive("twoWayDirective", function () {
        return {
          restrict: 'EA',
            scope: { obj: '='},
        template: '<div>Welcome, {{obj.fname + obj.lname}}!</div>'+"<input type='text' ng-model='obj.fname' />"
        };
          });
        angular.module('MyProject')       
        .directive("methodDirective", function () {
        return {
            scope: {
            stud:'=',
            obj: '=',
            swap: '&'
            },
           template: "<div>the changed names are, {{stud.fname + stud.lname}}!</div>"
           +"<button id='btn1' ng-click='swap()'>Click here to Swap student Data</button>"
        };
          });
       angular.module('MyProject') 
      .directive("phone", function () {
          return {
            scope: {
              dial: "&"
            },
            template: "<input type='text' ng-model='value'>" +
              "<button ng-click='dial({message:value})'>" +
              "Call home!</button>"
          };
        });
        /*My App*/
      angular.module('MyProject')       
      .directive("myApp", function () {
        return {
          restrict: 'EA',
          scope:{ 
             condition:'@'
            },
          template: "<div class='flexbox'>{{condition}}</div>"
      };
          });
   angular.module('MyProject')       
      .directive("address", function () {
        return {
          restrict: 'EA',
          scope:false,
          template: "<input type='text' name='address' placeHolder='Your Address'ng-model='address' ng-required class='form-control'>"
      };
          });
             
  }(angular))