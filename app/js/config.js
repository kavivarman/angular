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
          });
        $urlRouterProvider.otherwise('/index');
    }])
   .run(function ($rootScope, $state) {
       $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
           $rootScope.title = $state.current.data.title;
       });
   });
}(angular))
