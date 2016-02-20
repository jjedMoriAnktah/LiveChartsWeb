'use strict';

app.factory('docs065', ['components065', function (componentsService) {
    return function () {

        var components = componentsService();

        var buildProperties = function (from) {
            var r = [];
            var current = [];
            angular.forEach(from, function (value, key) {
                current = components[value];
                r = r.concat(current);
            });
            return r;
        };

        return {
            introduction: {
                name: 'Introduction',
                text: '',
                route: 'introduction',
                icon: 'fa-home',
                getProps: function() { return null; }
            },
            linechart: {
                name: 'LineChart Class',
                text: 'Line charts are useful when you need to identify data trends or variation, between one or multiple series.',
                route: 'linechart',
                icon: 'fa-line-chart',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/LineChart.cs',
                getProps: function() { return buildProperties(['iLine', 'chart']); }
            },
            barchart: {
                name: 'BarChart Class',
                text: 'You normally use a bar chart when you need to highlight the variation between each data point, they normally require a small number of points.',
                route: 'barchart',
                icon: 'fa-bar-chart',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/BarChart.cs',
                getProps: function() { return buildProperties(['iBar', 'iLine', 'chart']); }
            },
            stackedbarchart: {
                name: 'StackedBarChart Class',
                text: 'A Stacked bar chart gathers all data points within a step in a single bar and easly displays the proportion of each series in each bar. basically compares proportion and totals.',
                route: 'stackedbarchart',
                icon: 'fa-bar-chart',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/StackedBarChart.cs',
                getProps: function() { return buildProperties(['iStackedBar', 'iLine', 'chart']); }
            },
            piechart: {
                name: 'PieChart Class',
                text: 'A pie chart displays proportion between a set of data points.',
                route: 'piechart',
                icon: 'fa-pie-chart',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/PieChart.cs',
                getProps: function() { return buildProperties(['pieChart', 'chart']); }
            },
            seriescollection: {
                name: 'SeriesCollection Class',
                text: 'Series collection is one of the most important components of this library, a series collection contains all the series to plot in a chart, what makes this class so important is two things, first, it notifies the UI when you add or remove a series so chart is able refresh its content automatically, and second, it contains a configuration to plot any type you need, for example you can create a configuration for a custom model, and then map X and Y so LiveCharts knows how to plot your model, SeriesCollection inherits from <span class="label label-primary docs-label"><a href="https://msdn.microsoft.com/en-us/library/ms668604(v=vs.110).aspx">ObservableCollection</a>&lt;<a href="#/documentation/series">Series</a>&gt;</span>',
                route: 'seriescollection',
                icon: 'fa-table',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/SeriesCollection.cs',
                getProps: function() { return buildProperties(['seriesCollection']); }
            },
            seriesconfiguration: {
                name: 'SeriesConfiguration<T> Class',
                text: 'Defines how LiveCharts should plot a model, where T is your model.',
                route: 'seriesconfiguration',
                icon: 'fa-cog',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/SeriesConfiguration.cs',
                getProps: function() { return buildProperties(['iSeriesConfiguration', 'seriesConfiguration']); }
            },
            chartpoint: {
                name: 'ChartPoint class',
                text: 'Defines a point processed by a series.',
                route: 'chartpoint',
                icon: 'fa-dot-circle-o',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/ChartPoint.cs',
                getProps: function() { return buildProperties(['chartPoint']); }
            },
            chart: {
                name: 'Chart Class',
                text: '',
                route: 'chart',
                icon: 'fa-area-chart',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Chart.cs',
                getProps: function() { return buildProperties(['chart']); }
            },
            series: {
                name: 'Series Class',
                text: 'Defines a series, a really important component, all series inherits from this class. This class inherits from <a class="label label-primary" href="https://msdn.microsoft.com/en-us/library/system.windows.frameworkelement(v=vs.110).aspx">FrameworkElement</a> and implements <a class="label label-primary" href="https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/IChartSeries.cs">IChartSeries</a>',
                route: 'series',
                icon: 'fa-link',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Chart.cs',
                getProps: function() { return buildProperties(['iChartSeries', 'series']); }
            },
            axis: {
                name: 'Axis Class',
                text: 'Defines a chart axis, inherits from <a href="https://msdn.microsoft.com/en-us/library/system.windows.frameworkelement(v=vs.110).aspx"><span class="label label-primary">FrameworkElement</span></a>.',
                route: 'axis',
                icon: 'fa-arrows',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Axis.cs',
                getProps: function() { return buildProperties(['axis']); }
            },
            separator: {
                name: 'Separator Class',
                text: 'Defines the behavior of the parallel lines to an axis',
                route: 'separator',
                icon: 'fa-align-justify',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Separator.cs',
                getProps: function() { return buildProperties(['separator']); }
            },
            chartlegend: {
                name: 'ChartLegend Class',
                text: 'A chart legend is class that inherits from WPF UserControl, it has some extended properties necesaries to display the control, those properties are only useful by LiveCharts, if you are here maybe you are interested in building a custom legend, it is possible, you must create a control that inherits from ChartLegend, style it as you need and finally set that control to your chart, Chart.Legend = new myLegend();, this is not included in any example, and will be built on a future release.',
                route: 'chartlegend',
                icon: 'fa-list-ol',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Legend/ChartLEgend.xaml.cs',
                getProps: function() { return buildProperties(['chartLegend']); }
            },
            zoomingoptions: {
                name: 'ZoomingOptions Enum',
                text: 'Defines how line zooms, options are None, X, Y and XY this property is underconstruction and might change in future versions (depends on high performance release).',
                route: 'zoomingoptions',
                icon: 'fa-search-plus',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/ZoomingOptions.cs',
                getProps: function() { return buildProperties(['zoomingOptions']); }
            },
            legendlocation: {
                name: 'LegendLocation Enum',
                text: 'Indicates where a legend is located, options are None, Top, Bottom, Left, Right.',
                route: 'legendlocation',
                icon: 'fa-list-ol',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/dd732ac93e4ee27eace84603e4922b581e5c9a67/LiveChartsCore/Legend/LegendLocation.cs',
                getProps: function() { return buildProperties(['chartLegend']); }
            },
            axistags: {
                name: 'AxisTags Enum',
                text: 'Enumerates Axis, options are X, Y, None',
                route: 'axistags',
                icon: 'fa-arrows',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/AxisTags.cs',
                getProps: function() { return buildProperties(['chartLegend']); }

            },
            iseriesconfiguration: {
                name: 'ISeriesConfiguration Interface',
                text: 'Defines a series configuration.',
                route: 'iseriesconfiguration',
                icon: 'fa-cog',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/ISeriesConfiguration.cs',
                getProps: function() { return buildProperties(['iSeriesConfiguration']); }
            },
            ichartvalues: {
                name: 'IChartValues Interface',
                text: 'Defines series values to plot, this interface implements <a class="label label-primary" href="https://msdn.microsoft.com/en-us/library/system.collections.ilist(v=vs.110).aspx">IList</a> <a class="label label-primary" href="">INotifyPropertyChanged</a> <a class="label label-primary" href="">INotifyCollectionChanged</a>.',
                route: 'ichartvalues',
                icon: 'fa-superscript',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/IChartValues.cs',
                getProps: function() { return buildProperties(['iChartValues']); }
            },
            ichartseries: {
                name: 'IChartSeries interface',
                text: 'Defines ChartSeries',
                route: 'ichartseries',
                icon: 'fa-link',
                source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/IChartSeries.cs',
                getProps: function() { return buildProperties(['iChartSeries']); }
            }
        };
    };

}]);