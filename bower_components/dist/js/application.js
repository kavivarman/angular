'use strict'
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
(function (angular) {
    angular.module('MyProject')
      .controller("applycontroller", ["$scope", function ($scope) {
          $scope.data = { time: new Date() };
          $scope.updateTime = function () {
              $scope.data.time = new Date();
          };
          document.getElementById("updateTimeButton")
                  .addEventListener('click', function () {
                      console.log("update time clicked");
                      $scope.data.time = new Date();
                  });
      }]);
}(angular))