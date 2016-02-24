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

        //Documentation
        $routeProvider.when('/documentation/:version?/:section', {
            templateUrl: '/App/Views/docs.html',
            controller: 'docsController'
        });
        $routeProvider.when('/docnotfound', {
            templateUrl: '/App/Views/docchanged.html'
        });

        //Examples
        $routeProvider.when('/examples/:version?/:article', {
            templateUrl: '/App/Views/examples.html',
            controller: 'examplesController'
        });
        $routeProvider.when('/articlenotfound', {
            templateUrl: '/App/Views/articlechanged.html'
        });

        //Otherwise
        $routeProvider.otherwise('/home', {
            templateUrl: '/App/Views/home.html',
            controller: 'homeController'
        });
    }
]);