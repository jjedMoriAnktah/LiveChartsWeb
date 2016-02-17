'use strict';

app.factory('docsService', [function () {

    var listOf = function(type) {
        return { name: 'List of ' + type.name, ref: type.ref };
    }

    var types = {
        rect: { name: 'Rect', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.rect(v=vs.110).aspx' },
        color: { name: 'Color', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.color(v=vs.110).aspx' },
        bool: { name: 'bool', ref: 'https://msdn.microsoft.com/en-us/library/c8f5xwh7.aspx' },
        axis: { name: 'Axis', ref: '?' }
    };

    var componentsProps = {
        chart: [
            { name: 'MockedArea', type: types.rect, text: 'Gets or sets an area for unit testing, since normally for unit testing you don´t have an UI and LiveCharts refuses to draw a chart if there is no a valid UI area, then you need to set this property to run unit test, width and hegiht must be grather than 15px.', tags: 'area mock unit test', behavesAs: ['static'] },
            { name: 'Colors', type: listOf(types.color), text: 'Gets or sets the default series colors.', tags: 'color appearance style', behavesAs: ['static'] },
            { name: 'RandomizeStartingColor', type: types.bool, text: 'Gets or sets if a each new instance of a chart should initialize with a random color index', tags: 'color appearance style', behavesAs: ['static'] },
            { name: 'AxisY', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
            { name: '', type: {}, text: '', tags: '', behavesAs: [] },
        ],
        iLine: [
        ],
        iBar: [
        ]
    };

    var buildProperties = function (from) {
        var r = [];
        var current = [];
        angular.forEach(from, function (value, key) {
            current = componentsProps[value];
            r = r.concat(current);
        });
        return r;
    };

    return {
        welcome: {
            name: 'Home',
            text: '',
            route: 'welcome',
            icon: 'fa-home',
            getProps: function () { return null; }
        },
        linechart: {
            name: 'Line Chart',
            text: 'Most common chart, they are really when you need to identify data trends or variation, between one or multiple series.',
            route: 'linechart',
            icon: 'fa-pie-chart',
            getProps: function () { return buildProperties(['chart']); }
        },
        barchart: {
            name: 'Bar Chart',
            text: 'You normally use a bar chart when you need to highlight the variation between each data point, they normally require a small number of points.',
            route: 'barchart',
            icon: 'fa-pie-chart',
            getProps: function () { return buildProperties(['chart']); }
        }
    };

}]);