'use strict';

app.factory('examplesV1Service', [
    function () {

        var article = function(name, fileName) {
            this.name = name;
            this.fileName = fileName;
        }

        return function () {

            return [
                //getting started
                new article('Install'),
                new article('Basics'),
                new article('Types and Configuration'),
                new article('About Series'),
                new article('About Axes'),
                new article('About Labels'),

                //Cartesian
                new article('The Cartesian Chart'),
                new article('Inverted Series'),
                new article('Sections'),

                //Lines
                new article('Basic Line Chart'),
                new article('Irregular Intervals'),
                new article('Missing Points'),
                new article('Zooming and panning', 'zooming and panning.gif'),
                new article('Multiple Axes'),

                //Stacked Areas
                new article('Stacked Area'),
                new article('Stacked Area Percentage'),

                //Bars
                new article('Basic Column'),
                new article('Basic Stacked'),
                new article('Basic Row'),
                new article('Negative Stacked'),
                new article('Percentage Stacked'),

                //Pies
                new article('Pie Chart'),
                new article('Doughnut Chart'),

                //Gauges
                new article('180 Gauge'),
                new article('360 Gauge'),

                ////Financial
                //new article('OHCL Series'),

                ////Scatter
                //new article('Scatter Series'),
                //new article('Bubble Series'),

                //Advanced
                new article('Log and Custom Scales'),
                new article('Date Time'),
                new article('IObservableChartPoint', 'fully responsive.gif')
            ];
        };

    }
]);