function MyController($scope) {
  $scope.clock = new Date();
  var updateClock = function() {
    //$scope is in scope!
    //console.log($scope); // yet this does not work.
    $scope.clock = new Date();
  };
  setInterval(updateClock, 1000);
}