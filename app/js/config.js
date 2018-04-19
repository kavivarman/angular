'use strict';
(function (angular) {
    angular.module('MyProject', ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('index',{
              url:'/index',
              templateUrl:'app/module/landing-page/view/landing-page.html',
              controller: 'landingpagecontroller',
              controllerAs: 'land',
              data: {
                  title: 'My Application'
              }
          })
            .state('index.apply-digest-watch', {
              url: '/$apply$digest$watch',
              templateUrl:'app/module/apply-watch-digest/view/apply.html',
              controller: 'applycontroller',
              data: {
                  title: '$apply-$digest-$watch'
              }
          })
            .state('index.directive',{
              url:'/directive',
              templateUrl:'app/module/directive/view/directive.html',
              controller:'directivecontroller'
             })
            .state('index.myApp',{
              url:'/myApp',
              templateUrl:'app/module/myApp/view/myApp.html',
              controller:'myappcontroller'
             })
            .state('index.login',{
              url:'/login',
              templateUrl:'app/module/login/view/login.html',
              controller:'formcontroller'
             })
            .state('index.example',{
              url:'/example',
              templateUrl:'app/module/Exampls/view/example.html',
              controller:'examplecontroller'
             })
            .state('index.register',{
              url:'/register',
              templateUrl:'app/module/register/view/register.html',
              controller:'registercontroller'
            });
        $urlRouterProvider.otherwise('index/login');
    }])
   .run(function ($rootScope, $state) {
       $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
           $rootScope.title = $state.current.data.title;
       });
   });
}(angular))
