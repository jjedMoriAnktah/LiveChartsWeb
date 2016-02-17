'use strict';

app.factory('docsService', [function () {

    var documentation = {
        chart: [
            { name: 'AxisX', text: 'Chart X axis.' },
            { name: 'AxisY', text: 'Chart Y axis.' }
        ],
        iLine: [

        ],
        iBar: [

        ]
    };

    //pass an array containinig the keys you need to build
    //for example if line chart then it implements ILine and inherits from Chart
    //then you need to pass ['chart', 'iLine'] to get all its properties
    return function(from) {
        var r = [];
        var current = [];
        angular.forEach(from, function(value, key) {
            current = documentation[value];
            r = r.concat(current);
        });
        return r;
    };
}]);