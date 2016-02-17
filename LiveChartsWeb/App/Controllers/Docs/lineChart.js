'use strict';

app.controller('docsLineChartController', [
    '$scope', 'docsService', function ($scope, docs) {
        $scope.properties = docs(['chart']);
    }
]);