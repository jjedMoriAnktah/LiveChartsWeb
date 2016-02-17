'use strict';

app.controller('docsController', [
    '$scope', '$routeParams', 'docsService', function ($scope, $routeParams, docs) {
        $scope.sections = docs;
        $scope.current = docs[$routeParams.section];
        $scope.properties = $scope.current.getProps();
    }
]);