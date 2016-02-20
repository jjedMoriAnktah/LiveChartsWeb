'use strict';

app.controller('docsController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', 'docsService',
    function ($scope, $routeParams, $location, $anchorScroll, docsService) {

        var docs = docsService($routeParams.version);

        var content = docs.content();

        $scope.version = docs.version;
        $scope.sections = content;
        $scope.current = content[$routeParams.section];

        if (!$scope.current) {
            $location.path('/docnotfound');
        }

        $scope.properties = $scope.current.getProps();

        var search = $location.search().search;
        $scope.criteria = search ? search : '';

        $anchorScroll.yOffset = 60;
        $anchorScroll();
    }
]);