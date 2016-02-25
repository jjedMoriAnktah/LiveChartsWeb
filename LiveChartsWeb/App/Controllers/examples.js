'use strict';

app.controller('examplesController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', '$http', '$compile', 'examplesService',
    function($scope, $routeParams, $location, $anchorScroll, $http, $compile, examplesService) {

        var examples = examplesService($routeParams.version);

        var content = examples.content();

        $scope.version = examples.version;
        $scope.sections = content;

        $http.get('/App/Examples/' + examples.version + '/' + $routeParams.article + '.html').
            success(function(data) {
                $scope.article = data;
            }).error(function() {
                $location.path('/articlenotfound').replace();
            });

        $anchorScroll.yOffset = 60;
        $anchorScroll();

        $scope.path = $location.search().path;


        $scope.isInPath = function(article) {
            return $scope.path.indexOf(article.path) > -1;
        }

    }
]);