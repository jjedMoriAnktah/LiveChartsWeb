'use strict';

app.controller('docsController', [
    '$scope', '$routeParams', '$location', '$anchorScroll', 'docsService', '$http',
    function($scope, $routeParams, $location, $anchorScroll, docsService, $http) {
        docsService($routeParams.version).success(function (response) {

            var latest = $routeParams.version || 'beta';

            $scope.version = latest;
            $scope.sections = response;

            if (!$scope.sections) {
                $location.path('/docnotfound').replace();
            }

            var search = $location.search().search;
            $scope.criteria = search ? search : '';

            $anchorScroll.yOffset = 60;
            $anchorScroll();

            
            if ($routeParams.section !== "introduction") {
                $http.get('/App/Docs/' + latest + '/files/' + $routeParams.section + '.json')
                    .success(function(type) {
                        $scope.type = type;
                    }).error(function() {
                        $location.path('/docnotfound').replace();
                    });
            }

        }).error(function() {
            $location.path('/docnotfound').replace();
        });
    }
]);