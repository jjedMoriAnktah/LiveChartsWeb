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
                                    name: 'General',
                                    file: 'general',
                                    path: 'WPF-Appearance-General'
                                }, {
                                    name: 'Axes',
                                    file: 'axis-wpf',
                                    path: 'WPF-Appearance-Axes'
                                }, {
                                    name: 'Series Colors',
                                    file: 'series-colors-wpf',
                                    path: 'WPF-Appearance-Series'
                                }
                            ]
                        }, {
                            name: 'Chart Legend',
                            file: 'legend-wpf',
                            path: 'WPF-Appearance-Legend'
                        }, {
                            name: 'Tooltips',
                            file: 'tooltips-wpf',
                            path: 'WPF-Appearance-Tooltip'
                        }, {
                            name: 'Labels',
                            path: 'WPF-Labels',
                            file: 'labels-wpf'
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
                        }, {
                            name: 'Appearance',
                            path: 'WF-Appearance',
                            articles: [
                                {
                                    name: 'General',
                                    file: 'general',
                                    path: 'WF-Appearance-General'
                                }, {
                                    name: 'Axes',
                                    file: 'axis-wf',
                                    path: 'WF-Appearance-Axes'
                                }, {
                                    name: 'Series Colors',
                                    file: 'series-colors-wf',
                                    path: 'WF-Appearance-series'
                                }
                            ]
                        }, {
                            name: 'Chart Legend',
                            file: 'legend-wf',
                            path: 'WF-Appearance-Legend'
                        }, {
                            name: 'Labels',
                            path: 'WF-Labels',
                            file: 'labels-wf'
                        }
                    ]
                }
            ];
        };
    }
]);