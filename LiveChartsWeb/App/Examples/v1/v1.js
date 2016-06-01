'use strict';

app.factory('examplesV1Service', [
    function () {

        var article = function(name, fileName) {
            this.name = name;
            this.fileName = fileName;
        }

        return function() {
            return [
                new article('Install'),
                new article('Basics'),
                new article('Types and Configuration'),
                new article('Labels'),
                new article('Customizing Series'),
                new article('The Cartesian Chart'),
                new article('Basic Cartesian', 'fully responsive.gif'),
                new article('Inverted Series'),
                new article('Sections'),
                new article('Date Time'),
                new article('Zooming and panning', 'zooming and panning.gif'),
                new article('Log and Custom Scales')
            ];
        };

    }
]);