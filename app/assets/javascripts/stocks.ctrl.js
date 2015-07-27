app.controller('stocksCtrl', ['$scope', '$resource', function($scope, $resource)  {

  var stocks = $resource('/api/stocks');

      $scope.stocks = stocks.query();


}]);