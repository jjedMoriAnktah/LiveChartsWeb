'use strict';

app.directive('prettyprint', ['$http', function ($http) {
    return {
        restrict: 'C',
        scope: {
            code: '=',
            url: '@'
        },
        link: function (scope, element, attrs) {
            scope.$watch('code', function () {
                element.html(prettyPrintOne(scope.code || element.html()));
            });
            element.html(prettyPrintOne(scope.code || element.html()));
            if (scope.url) {
                $http.get(scope.url).success(function (response) {
                    element.html(prettyPrintOne(response.split('<').join('&lt;')));
                }).error(function() {
                    scope.code = '// An error occurred while requesting this content, please try reloading the page \n' +
                        '// if the error persists please report the issue at https://gitter.im/beto-rodriguez/Live-Charts';
                });
            }
        }
    };
}]).directive('dynamic', [
    '$compile', function($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function(html) {

                    ele.removeClass('ng-enter');

                    ele.html(html);

                    //lets do it manually...
                    ele.addClass('ng-enter');
                    setTimeout(function() { ele.removeClass('ng-enter'); }, 1000);

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
                    i.toggleClass('fa-caret-down');
                    i.toggleClass('fa-caret-right');
                    angular.element(document.getElementById(scope.toggleId)).toggleClass('collapse');
                });
            }
        };
    }
]).filter('removeGenerics', function() {
    return function(input) {
        var i = input.indexOf('`');
        if (i !== -1) input = input.substring(0, i);
        return input;
    };
});