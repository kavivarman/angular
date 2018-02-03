'use strict';
(function (angular) {
    angular.module('MyProject', ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('apply-digest-watch', {
              url: '/apply-digest-watch',
              templateUrl: 'app/module/apply-watch-digest/view/apply.html',
              controller: 'applycontroller',
              data: {
                  title: '$apply-$digest-$watch'
              }
          });
        $urlRouterProvider.otherwise('/apply-digest-watch');
    }])
   .run(function ($rootScope, $state) {
       $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
           $rootScope.title = $state.current.data.title;
       });
   });
}(angular))