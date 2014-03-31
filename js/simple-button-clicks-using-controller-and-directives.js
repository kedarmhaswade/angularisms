var app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
  $scope.counter = 0;  //sets a counter in $scope
  $scope.add = function (amount) { //increments the counter and makes the model i.e. $scope 'dirty'
    $scope.counter += amount;
  };
  $scope.subtract = function (amount) { //decrements the counter and makes the model i.e. $scope 'dirty'
    $scope.counter -= amount;
  };
});