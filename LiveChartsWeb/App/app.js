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

        $routeProvider.when('/documentation', {
            templateUrl: '/App/Views/docs.html',
            controller: 'docsController'
        });

        $routeProvider.when('/documentation/linechart', {
            templateUrl: '/App/Views/Docs/lineChart.html',
            controller: 'docsLineChartController'
        });

        $routeProvider.otherwise('/home', {
            templateUrl: '/App/Views/home.html',
            controller: 'homeController'
        });
    }
]);