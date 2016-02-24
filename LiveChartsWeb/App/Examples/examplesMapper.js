'use strict';

app.factory('examplesService', [
    'examplesV1Service', function(v1) {
        return function(version) {
            var latest = { version: 'v1', content: v1 };

            var mapper = {
                'v1': { version: 'v1', content: v1 }
                //here add future versions...
                //v2: { version: 'v2', content: v2 }
            };

            var requestedVersion = mapper[version];

            if (!version || !requestedVersion) return latest;

            return requestedVersion;
        };
    }
]);