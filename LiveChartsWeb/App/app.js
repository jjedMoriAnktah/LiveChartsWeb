'use strict';

var app = angular.module("liveChartsApp", [
    'ngRoute', 'ngSanitize', 'ngAnimate'
]).config([
    '$routeProvider',
    function ($routeProvider) {
        
        $routeProvider.when('/home', {
            templateUrl: '/App/Home/home.html',
            controller: 'homeController'
        });

        $routeProvider.when('/documentation', {
            templateUrl: '/App/Docs/docs.html',
            controller: 'docsController'
        });

        $routeProvider.otherwise('/', {
            templateUrl: '/App/Home/Home.html',
            controller: 'homeController'
        });
    }
]);