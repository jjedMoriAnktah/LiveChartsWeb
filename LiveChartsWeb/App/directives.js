'use strict';

app.directive('prettyprint', function() {
    return {
        restrict: 'C',
        scope: {
            code: '='
        },
        link: function(scope, element, attrs) {
            if (!scope.code) {
                element.html(prettyPrintOne(element.html()));
                return;
            }
            element.html(prettyPrintOne(scope.code));
        }
    };
}).directive('dynamic', [
    '$compile', function($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function(html) {
                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    }
]).directive('toggle', [
    function() {
        return {
            restrict: 'A',
            scope: {
                toggleId: '@'
            },
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    var i = angular.element(element[0].querySelector('.fa'));
                    i.toggleClass('fa-angle-down');
                    i.toggleClass('fa-angle-right');
                    angular.element(document.getElementById(scope.toggleId)).toggleClass('collapse');
                });
            }
        };
    }
]);