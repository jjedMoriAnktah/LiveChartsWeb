'use strict';

var app = angular.module("liveChartsApp", [
    'ngRoute', 'ngSanitize', 'ngAnimate'
]).config([
    '$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: '/App/Views/home.html',
            controller: 'homeController'
        });

        $routeProvider.when('/documentation/:version?/:section', {
            templateUrl: '/App/Views/docs.html',
            controller: 'docsController'
        });

        $routeProvider.when('/docnotfound', {
            templateUrl: '/App/Views/docchanged.html'
        });

        $routeProvider.otherwise('/home', {
            templateUrl: '/App/Views/home.html',
            controller: 'homeController'
        });
    }
]);