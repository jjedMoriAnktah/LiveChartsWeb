'use strict';

app.factory('docsService', [
    'docs065', function (docs065) {
        return function(version) {
            var latest = docs065;

            var mapper = {
                '0.6.5': docs065
                //here add future versions...
                //0.7: docs070
            };
            var docsRequested = mapper[version];
            
            if (!version || !docsRequested) return latest();

            return docsRequested();
        };
    }
]);