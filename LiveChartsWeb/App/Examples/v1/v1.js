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
                            name: 'Line Chart',
                            path: 'WPF-LineChart',
                            articles: [
                            {
                                name: 'Basic',
                                path: 'WPF-LineChart-Basic',
                                file: 'basicline-wpf'
                            },{
                                name: 'LineSmoothness',
                                path: 'WPF-LineChart-LineSmoothness',
                                file: 'linesmothness-wpf'
                            }, {
                                name: 'InLine syntax',
                                path: 'WPF-LineChart-InLine',
                                file: 'inlineline-wpf'
                            }]
                        }, {
                            name: 'Bar Chart',
                            path: 'WPF-BarChart',
                            articles: [{
                                name: 'Basic',
                                path: 'WPF-BarChart-Basic',
                                file: 'basicbar-wpf'
                            }, {
                                name: 'InLine Syntax',
                                path: 'WPF-BarChart-InLine',
                                file: 'inlinebar-wpf'
                            }]
                        }, {
                            name: 'StackedBar Chart',
                            path: 'WPF-StackedBarChart',
                            articles: [
                            {
                                name: 'Basic',
                                path: 'WPF-StackedBarChart-Basic',
                                file: 'basicstackedbar-wpf'
                            }, {
                                name: 'InLine Syntax',
                                path: 'WPF-StackedBarChart-InLine',
                                file: 'inlinestackedbar-wpf'
                            }]
                        }, {
                            name: 'Pie Chart',
                            path: 'WPF-PieChart',
                            articles: [
                            {
                                name: 'Basic',
                                path: 'WPF-PieChart-Basic',
                                file: 'basicpie-wpf'
                            }, {
                                name: 'InLine Syntax',
                                path: 'WPF-PieChart-InLine',
                                file: 'inlinepie-wpf'
                            }]
                        }, {
                            name: 'Generic Chart',
                            path: 'WPF-Generic',
                            file: 'genericline-wpf'
                        }, {
                            name: 'Clickable points',
                            path: 'WPF-Clickable',
                            file: 'clickable-wpf'
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