/**
 * Created by dell on 2016/5/6.
 */
app.factory('profile', ['$http', function($http) {
    return $http.get('https://api.linkedin.com/v1/people/~?format=json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);