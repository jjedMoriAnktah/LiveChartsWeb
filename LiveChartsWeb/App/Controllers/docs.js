'use strict';

app.controller('docsController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', 'docsService',
    function ($scope, $routeParams, $location, $anchorScroll, docs) {
        $scope.sections = docs;
        $scope.current = docs[$routeParams.section];
        $scope.properties = $scope.current.getProps();

        var search = $location.search().search;
        $scope.criteria = search ? search : '';

        $anchorScroll.yOffset = 60;
        $anchorScroll();
    }
]);