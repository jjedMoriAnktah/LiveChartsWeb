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
            { name: 'MockedArea', type: types.rect, text: 'Gets or sets an area for unit testing, since normally for unit testing you don´t have an UI and LiveCharts refuses to draw a chart if there is no a valid UI area, then you need to set this property to run unit test, width and hegiht must be grather than 15px.', tags: 'area mock unit test', behavesAs: ['Static'], defualt: 'null', example: 'Chart.MockedArea = new Rect { X = 0, Y = 0, Width = 800, Height = 600 };' },
            { name: 'Colors', type: listOf(types.color), text: 'Gets or sets the default series colors.', tags: 'color appearance style', behavesAs: ['Static'], defualt: 'see example', example: 'Chart.Colors = new List<Color>\n{\n\tColor.FromRgb(33, 149, 242),\n\tColor.FromRgb(243, 67, 54),\n\tColor.FromRgb(254, 192, 7),\n\tColor.FromRgb(96, 125, 138),\n\tColor.FromRgb(155, 39, 175),\n\tColor.FromRgb(0, 149, 135),\n\tColor.FromRgb(76, 174, 80),\n\tColor.FromRgb(121, 85, 72),\n\tColor.FromRgb(157, 157, 157),\n\tColor.FromRgb(232, 30, 99),\n\tColor.FromRgb(63, 81, 180),\n\tColor.FromRgb(0, 187, 211),\n\tColor.FromRgb(254, 234, 59),\n\tColor.FromRgb(254, 87, 34)\n};' },
            { name: 'RandomizeStartingColor', type: types.bool, text: 'Gets or sets if a each new instance of a chart should initialize with a random color index', tags: 'color appearance style', behavesAs: ['Static'], defualt: 'null', example: 'Chart.RandomizeStartingColor = true;' },
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
            icon: 'fa-line-chart',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/LineChart.cs',
            getProps: function () { return buildProperties(['chart']); }
        },
        barchart: {
            name: 'Bar Chart',
            text: 'You normally use a bar chart when you need to highlight the variation between each data point, they normally require a small number of points.',
            route: 'barchart',
            icon: 'fa-bar-chart',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/BarChart.cs',
            getProps: function () { return buildProperties(['chart']); }
        }
    };

}]);