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
                            name: 'Components',
                            path: 'WPF-Components',
                            articles: [
                                {
                                    name: 'Axes',
                                    file: 'axis-wpf',
                                    path: 'WPF-Components-Axes'
                                }, {
                                    name: 'Series Colors',
                                    file: 'series-colors-wpf',
                                    path: 'WPF-Components-Series'
                                }, {
                                    name: 'Chart Legend',
                                    file: 'legend-wpf',
                                    path: 'WPF-Components-Legend'
                                }, {
                                    name: 'Tooltips',
                                    file: 'tooltips-wpf',
                                    path: 'WPF-Components-Tooltip'
                                }, {
                                    name: 'Labels',
                                    path: 'WPF-Components-Labels',
                                    file: 'labels-wpf'
                                }
                            ]
                        }, {
                            name: 'In line syntax',
                            path: 'WPF-InLine',
                            file: 'fast-wpf'
                        }, {
                            name: 'Line Chart',
                            path: 'WPF-LineChart',
                            articles: [
                            {
                                name: 'Basic',
                                path: 'WPF-LineChart-Basic',
                                file: 'basicline-wpf'
                            }]
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
                            path: 'WF-Components',
                            articles: [ {
                                    name: 'Axes',
                                    file: 'axis-wf',
                                    path: 'WF-Component-Axes'
                                }, {
                                    name: 'Series Colors',
                                    file: 'series-colors-wf',
                                    path: 'WF-Component-series'
                                }, {
                                    name: 'Chart Legend',
                                    file: 'legend-wf',
                                    path: 'WF-Component-Legend'
                                }, {
                                    name: 'Labels',
                                    path: 'WF-Component-Labels',
                                    file: 'labels-wf'
                                }
                            ]
                        }
                    ]
                }
            ];
        };
    }
]);