'use strict';

app.controller('examplesController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', '$http', '$compile', 'examplesService',
    function($scope, $routeParams, $location, $anchorScroll, $http, $compile, examplesService) {

        var examples = examplesService($routeParams.version);

        $scope.version = examples.version;
        $scope.platform = $routeParams.platform;
        $scope.sections = examples.content();
        $scope.currentSection = $routeParams.article;

        $scope.start = $routeParams.article === "start";

        // /App/Examples/:version/:article-:platform.html
        if (!$scope.start) {
            var url = '/App/Examples/' + examples.version + '/' + $routeParams.article + '/' + $routeParams.platform + '.html';
            $scope.isLoading = true;
            $http.get(url)
                .success(function (data) {
                    $scope.isLoading = false;
                    $scope.article = data;
                }).error(function () {
                    $location.path('/articlenotfound').replace();
                });
        }

        $anchorScroll.yOffset = 60;
        $anchorScroll();

        $scope.path = $location.search().path;

        $scope.hideMenu = function() {
            $scope.start = false;
        };

        $scope.getImageUrl = function(section) {
            if (section.fileName) return '/App/Examples/v1/MenuImages/' + section.fileName;
            return '/App/Examples/v1/MenuImages/' + section.name + '.jpg';
        }

        $scope.isInPath = function(article) {
            return false; //$scope.path.indexOf(article.path) > -1;
        };
    }
]);