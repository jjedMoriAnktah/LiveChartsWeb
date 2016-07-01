'use strict';

app.factory('docsService', [
    '$http', function($http) {
        return function (version) {

            //    :version / files / index

            var latest = 'beta/files/index.json';

            var availableDocumentation = {
                'beta': 'beta/files/index.json'
            };

            var docs = availableDocumentation[version];

            if (!version || !docs) docs = latest;

            return $http.get('Docs/' + docs);
        };
    }
]);