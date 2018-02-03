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