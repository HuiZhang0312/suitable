'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ForecastApp', []);
//book
var book = angular.module("BookApp", []);
//market
var market = angular.module('MarketApp', []);
//gallery
var gallery = angular.module('GalleryApp', ['ngRoute']);

gallery.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'GalleryController',
            templateUrl: 'views/photoGallery.html'
        })
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: 'views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});