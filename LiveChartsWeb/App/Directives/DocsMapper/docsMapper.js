'use strict';

app.directive("docs", [function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/App/Directives/DocsMapper/view.html",
        controller: 'docsMapperController'
    }
}]);