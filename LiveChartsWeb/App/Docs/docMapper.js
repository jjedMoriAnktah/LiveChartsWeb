'use strict';

app.factory('docsService', [
    'docsBeta', function (docsBeta) {
        return function(version) {
            var latest = { version: 'beta', content: docsBeta };

            var mapper = {
                'beta': { version: 'beta', content: docsBeta }
                //here add future versions...
                //0.7: { version: '1.0', content: beta }
            };
            
            var docsRequested = mapper[version];

            if (!version || !docsRequested) return latest;

            return docsRequested;
        };
    }
]);