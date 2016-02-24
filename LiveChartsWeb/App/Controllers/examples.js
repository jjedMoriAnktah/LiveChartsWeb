'use strict';

app.controller('examplesController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', '$http', 'examplesService',
    function($scope, $routeParams, $location, $anchorScroll, $http, examplesService) {

        var examples = examplesService($routeParams.version);

        var content = examples.content();

        $scope.version = examples.version;
        $scope.sections = content;
        $scope.current = content[$routeParams.article];

        if (!$scope.current) {
            $location.path('/articlenotfound');
        }

        $http.get('/App/Examples/' + examples.version + '/' + $routeParams.article + '.html').
            success(function(data) {
                $scope.article = data;
            }).error(function() {
                $location.path('/articlenotfound');
            });

        var search = $location.search().search;
        $scope.criteria = search ? search : '';

        $anchorScroll.yOffset = 60;
        $anchorScroll();
    }
]);