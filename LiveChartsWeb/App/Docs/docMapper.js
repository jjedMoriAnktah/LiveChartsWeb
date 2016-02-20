'use strict';

app.factory('docsService', [
    'docs065', function (docs065) {
        return function(version) {
            var latest = { version: '0.6.5', content: docs065 };

            var mapper = {
                '0.6.5': { version: '0.6.5', content: docs065 }
                //here add future versions...
                //0.7: { version: '0.7.0', content: docs065 }
            };
            
            var docsRequested = mapper[version];

            if (!version || !docsRequested) return latest;

            return docsRequested;
        };
    }
]);