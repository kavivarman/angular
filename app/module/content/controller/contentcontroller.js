(function (angular) {
    angular.module('MyProject')
      .controller("contentcontroller", ["$scope","$state", function ($scope, $state) {
        $state.go('index.apply-digest-watch');
      }]);
}(angular))