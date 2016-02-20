'use strict';

app.directive('prettyprint', function () {
    return {
        restrict: 'C',
        scope: {
            code: '='
        },
        link: function postLink(scope, element, attrs) {
            element.html(prettyPrintOne(scope.code));
        }
    };
});