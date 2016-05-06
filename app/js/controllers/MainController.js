/**
 * Created by dell on 2016/5/6.
 */
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        $scope.fiveDay = data;
    });
}]);
