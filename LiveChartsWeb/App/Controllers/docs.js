'use strict';

app.controller('docsController', [
    '$scope', '$routeParams', '$location', 'docsService', function ($scope, $routeParams, $location ,docs) {
        $scope.sections = docs;
        $scope.current = docs[$routeParams.section];
        $scope.properties = $scope.current.getProps();

        var search = $location.search().search;
        $scope.criteria = search ? search : '';
    }
]);