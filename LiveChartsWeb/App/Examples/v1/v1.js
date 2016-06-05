'use strict';

app.factory('examplesV1Service', [
    function () {

        var article = function(name, tags, fileName) {
            this.name = name;
            this.tags = tags;
            this.fileName = fileName;
        };

        return function () {

            return [
                //getting started
                new article('Install', 'install installation start'),
                new article('Basics', 'about basic start'),
                new article('Types and Configuration', 'generic type config'),
                new article('About Series', 'series style custom'),
                new article('About Axes', 'axes style custom axis'),
                new article('About Labels', 'labels style custom'),

                //Cartesian
                new article('The Cartesian Chart', 'chart bar line stacked bubble ohcl financial scatter'),
                new article('Inverted Series', 'invert rotate'),
                new article('Sections', 'cursor section range'),

                //Lines
                new article('Basic Line Chart', 'line basic chart'),
                new article('Irregular Intervals', 'irregular line'),
                new article('Missing Points', 'missing nan line'),
                new article('Zooming and panning', 'line', 'zooming and panning.gif'),
                new article('Multiple Axes', 'axis'),

                //Stacked Areas
                new article('Stacked Area', 'stacked'),
                new article('Stacked Area Percentage', 'stacked'),

                //Bars
                new article('Basic Column', 'basic chart bar'),
                new article('Basic Stacked', 'basic chart bar stacked column'),
                new article('Basic Row', 'basic chart bar stacked row'),
                new article('Negative Stacked', 'basic chart bar stacked row'),
                new article('Percentage Stacked', 'basic chart bar stacked row'),

                //Pies
                new article('Pie Chart', 'pie chart doughnut stacked'),
                new article('Doughnut Chart', 'pie chart doughnut stacked'),

                //Gauges
                new article('180 Gauge', 'gauges'),
                new article('360 Gauge', 'gauges'),

                //Financial
                new article('OHCL Series', 'financial candle stick chart open high low close'),

                ////Scatter
                //new article('Scatter Chart'),
                new article('Bubble Chart'),

                //Advanced
                new article('Log and Custom Scales', 'scale custom logarithm log'),
                new article('Date Time', 'date time datetime'),
                new article('IObservableChartPoint', 'observable update', 'fully responsive.gif')
            ];
        };

    }
]);