function MyController($scope) {
  $scope.clock = {
    now: null,
    update: function () {
      var that = this;
      setInterval(function () {
//        console.log(that === $scope.clock);
//        console.log(this === $scope.clock);
        that.now = new Date();
//        console.log(that.now);
      }, 1000);
    }
  }
  $scope.clock.update();
}