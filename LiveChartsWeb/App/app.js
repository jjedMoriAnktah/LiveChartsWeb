'use strict';

var app = angular.module("liveChartsApp", [
    'ngRoute', 'ngSanitize', 'ngAnimate'
]).config([
    '$routeProvider',
    function($routeProvider) {

        //Documentation
        $routeProvider.when('/documentation/:version?/:section', {
            templateUrl: '/App/Views/docs.html',
            controller: 'docsController'
        });
        $routeProvider.when('/docnotfound', {
            templateUrl: '/App/Views/docchanged.html'
        });

        //Examples
        $routeProvider.when('/examples/:version?/:platform/:article', {
            templateUrl: '/App/Views/examples.html',
            controller: 'examplesController'
        });
        $routeProvider.when('/articlenotfound', {
            templateUrl: '/App/Views/articlechanged.html'
        });

        //Otherwise
        $routeProvider.otherwise('/examples/wpf/start', {
            templateUrl: '/App/Views/home.html',
            controller: 'homeController'
        });
    }
]);