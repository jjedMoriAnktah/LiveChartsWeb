'use strict';

app.factory('examplesV1Service', [
    function() {
        return function() {
            return [
                {
                    name: 'WPF',
                    path: 'WPF',
                    articles: [
                        {
                            name: 'Install',
                            path: 'WPF-Install',
                            file: 'install-wpf'
                        }, {
                            name: 'Appearance',
                            path: 'WPF-Appearance',
                            articles: [
                                {
                                    name: 'Properties',
                                    file: 'appearance-wpf',
                                    path: 'WPF-Appearance-Properties'
                                }
                            ]
                        }
                    ]
                }, {
                    name: 'WinForms',
                    path: 'WF',
                    articles: [
                        {
                            name: 'Install',
                            path: 'WF-Install',
                            file: 'install-wf'
                        }
                    ]
                }
            ];
        };
    }
]);