'use strict';

app.controller('templateController', [
    '$scope', function ($scope) {
        //by default menu is hidden for xs screen devices.
        $scope.isVisible = false;
        $scope.toggleMenu = function() {
            $scope.isVisible = !$scope.isVisible;
        };
        $scope.hideMenu = function() {
            $scope.isVisible = false;
        }
    }
]);