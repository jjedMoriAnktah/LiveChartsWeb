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
                element.html('<div class="text-center text-muted" style="height: 45px;"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i></div>');
                $http.get(scope.url).success(function (response) {
                    element.html(prettyPrintOne(response.split('<').join('&lt;')));
                }).error(function () {
                    var s = 'An error occurred while requesting this content, \r\n' +
                        'please try reloading the page. \r\n' +
                        'If the error persists please report the issue at \r\n' +
                        'https://gitter.im/beto-rodriguez/Live-Charts or \r\n' +
                        'https://github.com/beto-rodriguez/LiveChartsWeb/issues';
                    element.html('<div class="row text-center text-muted">' +
                        '<div class="col-xs-12">' +
                        '<i class="fa fa-fw fa-2x fa-exclamation-circle text-warning"></i>\r\n' + s + '' +
                        '</div>' +
                        '</div>');
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