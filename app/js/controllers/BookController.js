/**
 * Created by dell on 2016/5/7.
 */
book.controller('BookController',['$scope', function($scope) {
    $scope.title = 'Book Gallery';
    $scope.promo = 'Like or dislike';
    $scope.products =
        [
            {
                name: 'Dreaming of Sweden',
                price: 19,
                pubdate: new Date('2014', '03', '08'),
                cover: 'img/dreaming-of-sweden.jpg',
                likes:0,
                dislikes:0
            },
            {
                name: 'Enchantress',
                price: 8,
                pubdate: new Date('2013', '08', '01'),
                cover: 'img/enchantress.jpg',
                likes:0,
                dislikes:0
            },
            {
                name: 'WordPress Plugin',
                price: 19,
                pubdate: new Date('2014', '03', '08'),
                cover: 'img/wordpress-plugin.jpg',
                likes:0,
                dislikes:0
            },
            {
                name: 'Hannibal',
                price: 8,
                pubdate: new Date('2013', '08', '01'),
                cover: 'img/hannibal.jpg',
                likes:0,
                dislikes:0
            }
        ];

    $scope.plusOne =
        function(index) {
            $scope.products[index].likes += 1;
        };
    $scope.minusOne =
        function(index) {
            $scope.products[index].dislikes += 1;
        };
}]);