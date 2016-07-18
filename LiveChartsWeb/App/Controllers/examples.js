'use strict';

app.controller('examplesController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', '$http', '$compile',
    'examplesService', 'menuService', '$timeout',
    function($scope, $routeParams, $location, $anchorScroll, $http, $compile, examplesService, menuService, $timeout) {

        menuService.RestoreState();
        $scope.menu = menuService.model;

        $scope.toSmallMenu = function () {
            menuService.model.isSmall = true;
            menuService.SaveState();
        };
        $scope.toNormalMenu = function () {
            menuService.model.isSmall = false;
            menuService.SaveState();
        }

        var examples = examplesService($routeParams.version);

        $scope.version = examples.version;
        $scope.platform = $routeParams.platform;
        $scope.sections = examples.content();
        $scope.currentSection = $routeParams.article;

        $scope.start = $routeParams.article === "start";

        $scope.openModal = function () {
            $scope.isModalOpen = true;
            $timeout(function () {
                var modal = document.getElementById('docs-modal');
                modal.focus();
            }, 100);
        }

        // /App/Examples/:version/:article-:platform.html
        if (!$scope.start) {
            var url = '/App/Examples/' + examples.version + '/' + $routeParams.article + '/' + $routeParams.platform + '.html';
            $scope.isLoading = true;
            $http.get(url)
                .success(function(data) {
                    $scope.isLoading = false;
                    $scope.article = data;
                }).error(function() {
                    $location.path('/articlenotfound').replace();
                });
        } else {
            $scope.menu.isSmall = false;
            $scope.openModal();
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

        $scope.closeModal = function () {
            $scope.isModalOpen = false;
        }

        $scope.closeModalWKB = function ($key) {
            if ($key.which === 27) $scope.closeModal();
        }
    }
]);