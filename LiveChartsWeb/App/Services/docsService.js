'use strict';

app.factory('docsService', [function () {

    var modify = function(type, pattern) {
        return {
            name: pattern.replace("{{name}}", type.name),
            ref: type.ref
        };
    }

    var types = {
        rect: { name: 'Rect', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.rect(v=vs.110).aspx' },
        color: { name: 'Color', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.color(v=vs.110).aspx' },
        bool: { name: 'bool', ref: 'https://msdn.microsoft.com/en-us/library/c8f5xwh7.aspx' },
        string: { name: 'string', ref: 'https://msdn.microsoft.com/es-us/library/362314fe.aspx' },
        dbl: { name: 'double', ref: 'https://msdn.microsoft.com/en-us/es-u/library/678hzkk9.aspx' },
        integer: { name: 'int', ref: 'https://msdn.microsoft.com/en-us/library/5kzh1b5w.aspx' },
        fontFamily: { name: 'FontFamily', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.fontfamily(v=vs.110).aspx' },
        fontWeight: { name: 'FontWeight', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.fontweights(v=vs.110).aspx' },
        fontStyle: { name: 'FontStyle', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.controls.textblock.fontstyle(v=vs.110).aspx' },
        fontStretch: { name: 'FontStretch', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.fontstretch(v=vs.110).aspx' },
        brush: { name: 'Brush', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.brush(v=vs.110).aspx' },
        chart: { name: 'Chart', ref: '#/documentation/chart' },
        iSeriesConfiguration: { name: 'ISeriesConfiguration', ref: '#/documentation/iseriesconfiguration'},
        seriesConfiguration: {name: 'SeriesConfiguration<T>', ref: '#/documentation/seriesconfiguration' },
        axis: { name: 'Axis', ref: '#/documentation/axis' },
        separator: { name: 'Separator', ref: "#/documentation/separator" },
        zoomingOptions: { name: 'ZoomingOptions', ref: '#/documentation/zoomingoptions' },
        legendLocation: { name: 'LegendLocation', ref: '#/documentation/legendlocation' },
        chartLegend: { name: 'ChartLegend', ref: '#/documentation/chartlegend' },
        series: {name: 'Series', ref: '#/documentation/series'},
        seriesCollection: { name: 'SeriesCollection', ref: '#/documentation/seriescollection' }
    };

    var componentsProps = {
        chart: [
            { name: 'MockedArea', type: modify(types.rect, "{{name}}?"), text: 'Gets or sets an area for unit testing, since normally for unit testing you don´t have an UI and LiveCharts refuses to draw a chart if there is no a valid UI area, then you need to set this property to run unit test, width and hegiht must be grather than 15px.', tags: 'area mock unit test', behavesAs: ['Static'], def: 'null', example: 'Chart.MockedArea = new Rect { X = 0, Y = 0, Width = 800, Height = 600 };' },
            { name: 'Colors', type: modify(types.color, "List<{{name}}>"), text: 'Gets or sets the default series colors.', tags: 'color appearance style', behavesAs: ['Static'], def: 'see example', example: 'Chart.Colors = new List<Color>\n{\n\tColor.FromRgb(33, 149, 242),\n\tColor.FromRgb(243, 67, 54),\n\tColor.FromRgb(254, 192, 7),\n\tColor.FromRgb(96, 125, 138),\n\tColor.FromRgb(155, 39, 175),\n\tColor.FromRgb(0, 149, 135),\n\tColor.FromRgb(76, 174, 80),\n\tColor.FromRgb(121, 85, 72),\n\tColor.FromRgb(157, 157, 157),\n\tColor.FromRgb(232, 30, 99),\n\tColor.FromRgb(63, 81, 180),\n\tColor.FromRgb(0, 187, 211),\n\tColor.FromRgb(254, 234, 59),\n\tColor.FromRgb(254, 87, 34)\n};' },
            { name: 'RandomizeStartingColor', type: types.bool, text: 'Gets or sets if a each new instance of a chart should initialize with a random color index', tags: 'color appearance style', behavesAs: ['Static'], def: 'null', example: 'Chart.RandomizeStartingColor = true;' },
            { name: 'AxisY', type: types.axis, text: 'Gets or sets vertical axis', tags: '', behavesAs: ['Dependency Property'], def: 'varies', example: 'Chart.AxisY = new Axis();' },
            { name: 'AxisX', type: types.axis, text: 'Gets or sets horizontal axis', tags: '', behavesAs: ['Dependency Property'], def: 'varies', example: 'Chart.AxisX = new Axis();' },
            { name: 'Zoom', type: types.zoomingOptions, text: 'Gets or sets chart zoom behavior', tags: '', behavesAs: ['Dependency Property'], def: 'None', example: 'Chart.Zoom = ZoomingOptions.X;' },
            { name: 'Legend', type: types.chartLegend, text: 'Gets or sets legend location, a legend is a small control that displays series titles and its colors.', tags: '', behavesAs: ['Dependency Property'], def: 'new ChartLegend()', example: 'Chart.Legend = new myCustomLegend();' },
            { name: 'LegendLocation', type: types.legendLocation, text: 'Gets or sets where legend is located', tags: '', behavesAs: ['Dependency Property'], def: 'LegendLocation.None', example: 'Chart.LegendLocation = LegendLocation.Right;' },
            { name: 'Invert', type: types.bool, text: 'Gets or sets if series in this chart should be inverted, even this is a dependency property, it is only to support bidings, this property will not invert the chart when it changes, if you need so then call Chart.Redraw() method after you change this property.', tags: '', behavesAs: ['Dependency Property'], def: 'false', example: 'Chart.Invert = true;' },
            { name: 'Hoverable', type: types.bool, text: 'Gets or sets if charts displays tooltip when mouse is over a data point.', tags: '', behavesAs:['Dependency Property'], def: 'true', example: 'Chart.Hoverable = false;'},
            { name: 'PointHoverColor', type: types.color, text: 'Gets or sets data point color when mouse is over it.', tags: '', behavesAs: ['Dependency Property'], def: 'varies', example: 'Chart.PointHoverColor = Color.FromRgb(55,55,55);' },
            { name: 'DisableAnimations', type: types.bool, text: 'Gets or sets if chart series are animated.', tags: 'animation', behavesAs: ['Dependency Property'], def: 'false', example: 'Chart.DisableAnimations = false;' },
            { name: 'Series', type: types.seriesCollection, text: 'Gets or sets chart series collection to plot, default series collection is ready to store double values and scale them on Y axis, if you need more information about how to configure a SeriesCollection class please see <a href="#/documentation/seriesconfiguration?search=configuration">SeriesCollection.Configuration</a> property or built in examples.', tags: '', behavesAs: ['Dependency Property'], def: 'new SeriesCollection(new SeriesConfiguration<double>().Y(val => val))', example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);' },
            { name: 'Chart', type: types.chart, text: 'Gets chart that own this series', tags: '', behavesAs: [], example: 'var chart = mySeries.Chart;' },
            { name: 'Setup(<i class="text-muted">configuration</i>)', returns: types.series, text: 'Setup a configuration for this collection, notice this method returns the current instance to support fleunt syntax.', tags: '', behavesAs: [], params: [{ type: types.seriesConfiguration, text: 'configuration to apply' }], example: 'var config = new SeriesConfiguration<double>().X(val => val);\nmySeriesCollection.Setup(config)' }
        ],
        iLine: [
        ],
        iBar: [
        ],
        series: [
        {
            
        }],
        seriesCollection: [
            { name: 'Chart', type: types.chart, text: 'Gets owner chart.', tags: '', behavesAs: [], def: 'internal setter', example: 'var chart = mySeriesCollection.Chart;' },
            { name: 'Configuration', type: types.iSeriesConfiguration, text: 'Gets or sets chart Series configuration, ', tags: '', behavesAs: [], def: 'internal setter', example: 'var chart = mySeriesCollection.Chart;' },
            { name: 'Setup(<i class="text-muted">configuration</i>)', returns: types.seriesCollection, text: 'Setup a configuration for this collection, notice this method returns the current instance to support fleunt syntax. if a series has its own setup then series collection setup will be ignored.', tags: '', behavesAs: [], params: [{ type: types.seriesConfiguration, text: 'configuration to apply' }], example: 'var config = new SeriesConfiguration<double>().X(val => val);\nmySeriesCollection.Setup(config)' }
        ],
        iSeriesConfiguration: [
            { name: 'Chart', type: types.chart, text: 'Gets owner chart, even you can set this property it will be overriden when live charts is plotting.', tags: '', behavesAs: [], def: 'internal setter', example: 'var chart = configuration.Chart;\n//where configuration implements ISeriesConfiguration.' }
        ],
        seriesConfiguration: [
            { name: 'Chart', type: types.chart, text: 'Gets owner chart, even you can set this property it will be overriden when live charts is plotting.', tags: '', behavesAs: [], def: 'internal setter', example: 'var chart = configuration.Chart;' },
            { name: 'DataOptimization', type: null, text: 'this property is under construction and might change, docs will be updated when this is ready (wait for high performance release).', tags: 'high performance', example: '//nothing to see here :(' },
            { name: 'XValueMapper', type: { name: 'Func<T, int, double>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'Gets or sets the current function that pulls out X value from T', tags: '', def: '(model, index) => index;', example: 'XValueMapper = (model, index) => model.ToPlotProperty;' },
            { name: 'YValueMapper', type: { name: 'Func<T, int, double>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'Gets or sets the current function that pulls out Y value from T', tags: '', def: '(model, index) => index;', example: 'YValueMapper = (model, index) => model.ToPlotProperty;' },
            { name: 'X(<i class="text-muted">predicate</i>)', returns: types.seriesConfiguration, text: 'Sets XValueMapper property, notice this property returns current SeriesConfiguration to support fluent syntax.', tags: '', behavesAs: [], params: [{ type: { name: 'Func<>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'predicate, function that pulls out plot target property, this method has 2 overloads, first: (model, index) => <i>predicate</i>, second: model => <i>predicate</i>' }], example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);' },
            { name: 'Y(<i class="text-muted">predicate</i>)', returns: types.seriesConfiguration, text: 'Sets YValueMapper, notice this property returns current SeriesConfiguration to support fluent syntax.', tags: '', behavesAs: [], params: [{ type: { name: 'Func<>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'predicate, function that pulls out plot target property, this method has 2 overloads, first: (model, index) => <i>predicate</i>, second: model => <i>predicate</i>' }], example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);' },
            { name: 'HasHighPerformanceMethod(<i class="text-muted">method</i>)', type: null, text: 'This property is under construction and might change, docs will be updated when this is ready (wait for high performance release).', tags: 'high performance', example: '//nothing to see here :(' }
        ],
        axis: [
            { name: 'Labels', type: modify(types.string, "IList<{{name}}>"), text: 'Gets or sets axis labels, labels property stores the array to map for each index and value, for example if axis value is 0 then label will be labels[0], when value 1 then labels[1], value 2 then labels[2], ..., value n labels[n], use this property instead of a formatter when there is no conversion between value and label for example names, if you are ploting sales vs salesman name.', tags: 'label formatter', behavesAs: ['Dependency Property'], def: 'null', example: 'Axis.Labels = new[] {"John", "Mark", "Susan"};' },
            { name: 'Label Formatter', type: { name: "Func<double, string>", ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'Gets or sets the function to convet a value to label, for example when you need to display your chart as curency ($1.00) or as degrees (10°), if Labels property is not null then formatter is ignored, and label will be pulled from Labels prop.', tags: 'label', behavesAs: ['Dependency Property'], def: 'null', example: 'Axis.LabelFormatter = val => val.ToString("C"); //as currency\nLabelFormatter = val => val + "°"; //as degrees\nLabelFormatter = val => val + " items sold"; //or any other custom format' },
            { name: 'Color', type: types.color, text: 'Gets or sets axis color, axis means only the zero value, if you need to highlight where zero is. to change separators color, see Axis.Separator.', tags: 'separator zero', behavesAs: ['Dependency Property'], def: 'Color.FromRgb(242, 242, 242)', example: 'Axis.Color = Color.FromRgb(55, 55, 55);' },
            { name: 'StrokeThickness', type: types.dbl, text: 'Gets or sets axis thickness, this only changes thickness where zero value is, if you need to change all separators thickness please see Axis.Separator', tags: 'separator zero', behavesAs: ['Dependency Property'], def: '1', example: 'Axis.StrokeThickness = 3;' },
            { name: 'ShowLabels', type: types.bool, text: 'Gets or sets if labels are visible.', tags: 'labels', behavesAs: ['Dependency Property'], def: 'true', example: 'Axis.ShowLabels = false;' },
            { name: 'MaxValue', type: modify(types.dbl, "{{name}}?"), text: 'Gets or sets chart max value, set it to null to make this property Auto, default value is null.', tags: 'range', behavesAs: ['Dependency Property'], def: 'null (auto)', example: 'Axis.MaxValue = 10;' },
            { name: 'MinValue', type: modify(types.dbl, "{{name}}?"), text: 'Gets or sets chart min value, set it to null to make this property Auto, default value is null.', tags: 'tange', behavesAs: ['Dependency Property'], def: 'null (auto)', example: 'Axis.MinValue = 0;' },
            { name: 'Title', type: types.string, text: 'Gets or sets axis title, if this property is not null then the axis will print a new label that shows this property value.', tags: '', behavesAs: [], def: '', example: '' },
            { name: 'FontFamily', type: types.fontFamily, text: 'Gets or sets labels font family, font to use for labels in this axis', tags: 'labels', behavesAs: ['Dependency Property'], def: 'Calibri', example: 'Axis.FontFamily = new FontFamily("Arial");' },
            { name: 'FontSize', type: types.dbl, text: 'Gets or sets labels font size.', tags: 'label', behavesAs: ['Dependency Property'], def: '11.0', example: 'Axis.FontSize = 16;' },
            { name: 'FontWeight', type: types.bool, text: 'Gets or sets labels font weight.', tags: 'label', behavesAs: ['dependency Property'], def: 'FontWeights.Normal', example: 'Axis.FontWeight = FontWeights.Bold;' },
            { name: 'Gets or sets labels font style', type: types.fontStyle, text: 'Gets or sets labels font style.', tags: 'labels', behavesAs: ['Dependency Property'], def: 'FontStyles.Normal', example: 'Axis.FontStyle = FontStyles.Italic;' },
            { name: 'FontStrech', type: types.bool, text: 'Gets or sets axis font stretch', tags: 'label', behavesAs: ['Dependency Property'], def: 'FontStretches.Normal', example: 'Axis.FontStretch = FontStretches.ExtraExpanded;' },
            { name: 'Foreground', type: types.bool, text: 'Gets or sets axis foreground for labels', tags: 'label', behavesAs: ['Dependency Property'], def: 'Color.FromRgb(150, 150, 150)', example: 'Axis.Foreground = Color.FromRgb(55, 55, 55);' },
            { name: 'Separator', type: types.separator, text: 'Gets or sets axis separator, separators are the parallel lines to an axis.', tags: '', behavesAs: ['Dependency Property'], def: 'varies', example: 'Axis.Separator = new Separator();' }
        ],
        separator: [
            { name: 'IsEnabled', type: types.bool, text: 'Gets or sets if separators are enabled (will be drawn)', tags: '', behavesAs: [], def: 'true', example: 'Separator.IsEnabled = false;' },
            { name: 'Color', type: types.color, text: 'Gets or sets separators color', tags: '', behavesAs: [], def: 'varies', example: 'Separator.Color = Color.FromRgb(55,55,55);' },
            { name: 'Thickness', type: types.integer, text: 'Gets or sets separator line thickness', tags: '', behavesAs: [], def: 'varies', example: 'Separator.Thickness = 2;' },
            { name: 'Step', type: modify(types.dbl, "{{name}}?"), text: 'Gets or sets sepator step, this means the value between each line, use null for auto.', tags: '', behavesAs: [], def: 'null (auto)', example: 'Separato.Step = 1;' }
        ],
        zoomingOptions: [],
        chartLegend: [],
        legendlocation: []
    };

    var buildProperties = function (from) {
        var r = [];
        var current = [];
        angular.forEach(from, function (value, key) {
            current = componentsProps[value];
            r = r.concat(current);
        });
        return r;
    };

    return {
        welcome: {
            name: 'Home',
            text: '',
            route: 'welcome',
            icon: 'fa-home',
            getProps: function () { return null; }
        },
        linechart: {
            name: 'Line Chart',
            text: 'Line charts are useful when you need to identify data trends or variation, between one or multiple series.',
            route: 'linechart',
            icon: 'fa-line-chart',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/LineChart.cs',
            getProps: function () { return buildProperties(['chart']); }
        },
        barchart: {
            name: 'Bar Chart',
            text: 'You normally use a bar chart when you need to highlight the variation between each data point, they normally require a small number of points.',
            route: 'barchart',
            icon: 'fa-bar-chart',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Charts/BarChart.cs',
            getProps: function () { return buildProperties(['chart']); }
        },
        seriescollection: {
            name: 'Series Collection',
            text: 'Series collection is one of the most important components of this library, a series collection contains all the series to plot in a chart, what makes this class so important is two things, first, it notifies the UI when you add or remove a series so chart is able refresh its content automatically, and second, it contains a configuration to plot any type you need, for example you can create a configuration for a custom model, and then map X and Y so LiveCharts knows how to plot your model, SeriesCollection inherits from <span class="label label-primary docs-label"><a href="https://msdn.microsoft.com/en-us/library/ms668604(v=vs.110).aspx">ObservableCollection</a>&lt;<a href="#/documentation/series">Series</a>&gt;</span>',
            route: 'seriescollection',
            icon: 'fa-table',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/SeriesCollection.cs',
            getProps: function () { return buildProperties(['seriesCollection']); }
        },
        seriesconfiguration: {
            name: 'SeriesConfiguration<T>',
            text: 'Defines how LiveCharts should plot a model, where T is your model.',
            route: 'seriesconfiguration',
            icon: 'fa-cog',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/SeriesConfiguration.cs',
            getProps: function () { return buildProperties(['seriesConfiguration']); }
        },
        chart: {
            name: 'Chart',
            text: 'Defines a chart, this is the core component of LiveCharts, all charts inherits from this class.',
            route: 'chart',
            icon: 'fa-area-chart',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Chart.cs',
            getProps: function () { return buildProperties(['chart']); }
        },
        series: {
            name: 'Series',
            text: 'Defines a series, a really important component, all series inherits from this class. This class inherits from <a class="label label-primary" href="https://msdn.microsoft.com/en-us/library/system.windows.frameworkelement(v=vs.110).aspx">FrameworkElement</a> and implements <a class="label label-default" href="https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/IChartSeries.cs">IChartSeries</a>',
            route: 'series',
            icon: 'fa-link',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Chart.cs',
            getProps: function () { return buildProperties(['series']); }
        },
        axis: {
            name: 'Axis',
            text: 'Defines a chart axis, inherits from <a href="https://msdn.microsoft.com/en-us/library/system.windows.frameworkelement(v=vs.110).aspx"><span class="label label-primary">FrameworkElement</span></a>',
            route: 'axis',
            icon: 'fa-arrows',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Axis.cs',
            getProps: function () { return buildProperties(['axis']); }
        },
        separator: {
            name: 'Separator',
            text: 'Defines the behavior of the parallel lines to an axis',
            route: 'separator',
            icon: 'fa-align-justify',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/CoreComponents/Separator.cs',
            getProps: function () { return buildProperties(['separator']); }
        },
        zoomingoptions: {
            name: 'Zooming Options',
            text: 'Defines how line zooms, options are None, X, Y and XY this property is underconstruction and might change in future versions (depends on high performance release).',
            route: 'zoomingoptions',
            icon: 'fa-search-plus',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/ZoomingOptions.cs',
            getProps: function () { return buildProperties(['zoomingOptions']); }
        },
        chartlegend: {
            name: 'Chart Legend',
            text: 'A chart legend is class that inherits from WPF UserControl, it has some extended properties necesaries to display the control, those properties are only useful by LiveCharts, if you are here maybe you are interested in building a custom legend, it is possible, you must create a control that inherits from ChartLegend, style it as you need and finally set that control to your chart, Chart.Legend = new myLegend();, this is not included in any example, and will be built on a future release.',
            route: 'chartlegend',
            icon: 'fa-list-ol',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Legend/ChartLEgend.xaml.cs',
            getProps: function () { return buildProperties(['chartLegend']); }
        },
        legendlocation: {
            name: 'Legend Location',
            text: 'Indicates where a legend is located, options are None, Top, Bottom, Left, Right.',
            route: 'legendlocation',
            icon: 'fa-list-ol',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/dd732ac93e4ee27eace84603e4922b581e5c9a67/LiveChartsCore/Legend/LegendLocation.cs',
            getProps: function () { return buildProperties(['chartLegend']); }
        },
        iseriesconfiguration: {
            name: 'ISeriesConfiguration (interface)',
            text: 'Defines a series configuration.',
            route: 'iseriesconfiguration',
            icon: 'fa-cog',
            source: 'https://github.com/beto-rodriguez/Live-Charts/blob/master/LiveChartsCore/Interfaces/ISeriesConfiguration.cs',
            getProps: function () { return buildProperties(['iSeriesConfiguration']); }
        }
    };

}]);