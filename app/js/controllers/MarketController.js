market.controller('MarketController', ['$scope', function($scope) {
    $scope.apps = [
        {
            icon: 'img/youtube.jpg',
            title: 'YouTube',
            developer: 'Google, Inc.',
            price: 0.99
        },
        {
            icon: 'img/twitter.jpg',
            title: 'Twitter',
            developer: 'Twitter',
            price: 2.99
        },
        {
            icon: 'img/Facebook.jpg',
            title: 'Facebook',
            developer: 'Facebook',
            price: 1.99
        },
        {
            icon: 'img/yelp.jpg',
            title: 'Yelp',
            developer: 'Yelp',
            price: 1.99
        }
    ];
}]);