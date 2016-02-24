'use strict';

app.factory('examplesV1Service', [function() {
        return function() {
            return {
                install: {
                    name: 'Install',
                    route: 'install'
                },
                styling: {
                    name: 'Styling',
                    route: 'styling'
                }
            }
        };
    }
]);