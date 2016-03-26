'use strict';

app.factory('componentsBeta', [
    'typesBeta', function(typesService) {
        return function() {
            var types = typesService(); //lazy loading.
            var modify = function(type, pattern) {
                return {
                    name: pattern.replace("{{name}}", type.name),
                    ref: type.ref
                };
            };
            return {
                chart: [
                    {
                        name: 'MockedArea',
                        type: modify(types.rect, "{{name}}?"),
                        text: 'Gets or sets an area for unit testing, since normally for unit testing you don´t have an UI and LiveCharts refuses to draw a chart if there is no a valid UI area, then you need to set this property to run unit test, width and hegiht must be grather than 15px.',
                        tags: 'area mock unit test',
                        behavesAs: ['Static'],
                        def: 'null',
                        example: 'Chart.MockedArea = new Rect { X = 0, Y = 0, Width = 800, Height = 600 };'
                    }, {
                        name: 'Colors',
                        type: modify(types.color, "List<{{name}}>"),
                        text: 'Gets or sets the default series colors.',
                        tags: 'color appearance style',
                        behavesAs: ['Static'],
                        def: 'see example',
                        example: 'Chart.Colors = new List<Color>\n{\n\tColor.FromRgb(33, 149, 242),\n\tColor.FromRgb(243, 67, 54),\n\tColor.FromRgb(254, 192, 7),\n\tColor.FromRgb(96, 125, 138),\n\tColor.FromRgb(155, 39, 175),\n\tColor.FromRgb(0, 149, 135),\n\tColor.FromRgb(76, 174, 80),\n\tColor.FromRgb(121, 85, 72),\n\tColor.FromRgb(157, 157, 157),\n\tColor.FromRgb(232, 30, 99),\n\tColor.FromRgb(63, 81, 180),\n\tColor.FromRgb(0, 187, 211),\n\tColor.FromRgb(254, 234, 59),\n\tColor.FromRgb(254, 87, 34)\n};'
                    }, {
                        name: 'RandomizeStartingColor',
                        type: types.bool,
                        text: 'Gets or sets if a each new instance of a chart should initialize with a random color index',
                        tags: 'color appearance style',
                        behavesAs: ['Static'],
                        def: 'null',
                        example: 'Chart.RandomizeStartingColor = true;'
                    }, {
                        name: 'AxisY',
                        type: types.axis,
                        text: 'Gets or sets vertical axis',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'varies',
                        example: 'Chart.AxisY = new Axis();'
                    }, {
                        name: 'AxisX',
                        type: types.axis,
                        text: 'Gets or sets horizontal axis',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'varies',
                        example: 'Chart.AxisX = new Axis();'
                    }, {
                        name: 'Zoom',
                        type: types.zoomingOptions,
                        text: 'Gets or sets chart zoom behavior',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'None',
                        example: 'Chart.Zoom = ZoomingOptions.X;'
                    }, {
                        name: 'Legend',
                        type: types.chartLegend,
                        text: 'Gets or sets legend location, a legend is a small control that displays series titles and its colors.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'new ChartLegend()',
                        example: 'Chart.Legend = new myCustomLegend();'
                    }, {
                        name: 'LegendLocation',
                        type: types.legendLocation,
                        text: 'Gets or sets where legend is located',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'LegendLocation.None',
                        example: 'Chart.LegendLocation = LegendLocation.Right;'
                    }, {
                        name: 'Invert',
                        type: types.bool,
                        text: 'Gets or sets if series in this chart should be inverted, even this is a dependency property, it is only to support bidings, this property will not invert the chart when it changes, if you need so then call Chart.Redraw() method after you change this property.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'false',
                        example: 'Chart.Invert = true;'
                    }, {
                        name: 'Hoverable',
                        type: types.bool,
                        text: 'Gets or sets if charts displays tooltip when mouse is over a data point.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'true',
                        example: 'Chart.Hoverable = false;'
                    }, {
                        name: 'PointHoverColor',
                        type: types.color,
                        text: 'Gets or sets data point color when mouse is over it.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'varies',
                        example: 'Chart.PointHoverColor = Color.FromRgb(55,55,55);'
                    }, {
                        name: 'DisableAnimations',
                        type: types.bool,
                        text: 'Gets or sets if chart series are animated.',
                        tags: 'animation',
                        behavesAs: ['Dependency Property'],
                        def: 'false',
                        example: 'Chart.DisableAnimations = false;'
                    }, {
                        name: 'Series',
                        type: types.seriesCollection,
                        text: 'Gets or sets chart series collection to plot, default series collection is ready to store double values and scale them on Y axis, if you need more information about how to configure a SeriesCollection class please see <a href="#/documentation/seriesconfiguration?search=configuration">SeriesCollection.Configuration</a> property or built in examples.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'new SeriesCollection(new SeriesConfiguration<double>().Y(val => val))',
                        example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);'
                    }, {
                        name: 'Update(<i class="text-muted">eraseAll</i>)',
                        returns: types.voidType,
                        text: 'Forces chart redraw in the next DataStep, DataStep is a concept created by LiveCharts, to improve performance LiveCharts listens for data changes in a certain time interval, when this period ends then UI is updated, it is totally safe to call Update method multiple times in a short period of time, because it actually just tells the next DataStep that chart requires and update.',
                        tags: 'performance',
                        behavesAs: [],
                        params: [{ type: types.bool, text: 'Indicates if (true) chart should delete and create again all elements in canvas or (false) try to keep elements that did not changed, default is false' }],
                        example: 'Chart.Update(true);'
                    }, {
                        name: 'UnsafeUpdate()',
                        returns: types.voidType,
                        text: 'Forces chart redraw without wating for next DataStep, warning: this method could lead to bad performance if not used correctly',
                        tags: 'performance',
                        behavesAs: [],
                        params: [],
                        example: 'Chart.UnsafeRedraw();'
                    }, {
                        name: 'ZoomIn(<i class="text-muted">pivot</i>)',
                        returns: types.voidType,
                        text: 'Zooms a unit in according to a pivot, the unit is determined by LiveCharts depending on chart scale, values range and zooming mode.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.point, text: 'pivot, a reference point to start zooming.' }],
                        example: 'Chart.ZoomIn();'
                    }, {
                        name: 'ZoomOut(<i class="text-muted">pivot</i>)',
                        returns: types.voidType,
                        text: 'Zooms a unit out according to a pivot, the unit is determined by LiveCharts depending on chart scale, values range and zooming mode.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.point, text: 'pivot, a reference point to start zooming.' }],
                        example: 'Chart.ZoomIn();'
                    }, {
                        name: 'ClearZoom()',
                        returns: types.voidType,
                        text: 'Clears zoom',
                        tags: '',
                        behavesAs: [],
                        params: [],
                        example: 'Chart.ClearZoom();'
                    }, {
                        name: 'ToPlotArea(<i class="text-muted">value</i>, <i class="text-muted">axis</i>)',
                        returns: types.dbl,
                        text: 'Scales a graph value to screen pixels according to an axis.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.dbl, text: 'value: value to scale' }, { type: types.axisTags, text: 'axis: value will be scale according to this axis range and dimension.' }],
                        example: 'var pointToScale = new Point(10, 50);\nvar leftInPixels = Chart.ToPlotArea(pointToScale.X, AxisTags.X);\nvar topInPixels = Chart.ToPlotArea(pointToScale.Y, AxisTags.Y);\n//or easier, use the second overload\nPoint scaledPoint = Chart.ToDrawMargin(pointToScale);'
                    }, {
                        name: 'FromDrawMargin(<i class="text-muted">value</i>, <i class="text-muted">axis</i>)',
                        returns: types.dbl,
                        text: 'Scales from screen pixels graph value according to an axis.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.dbl, text: 'value: value to scale' }, { type: types.axisTags, text: 'axis: value will be scale according to this axis range and dimension.' }],
                        example: 'var pointToScale = new Point(10, 50);\nvar xVal = Chart.FromDrawMargin(pointToScale.X, AxisTags.X);\nvar yVal = Chart.FromDrawMargin(pointToScale.Y, AxisTags.Y);\n//or easier, use the second overload\nPoint scaledPoint = Chart.FromDrawMargin(pointToScale);'
                    }
                ],
                iLine: [
                    {
                        name: 'LineSmoothness',
                        type: types.dbl,
                        text: 'Gets or sets line smoothness, this value goes from 0 to 1, default. is 0.8, zero will plot rect lines, 1 really curved beziers.',
                        tags: '',
                        behavesAs: [],
                        def: '0.8',
                        example: 'lineChart.LineSmothness = 0.4;'
                    }
                ],
                iBar: [
                    {
                        name: 'MaxColumnWidth',
                        type: types.dbl,
                        text: 'Gets or sets max column width in pixels.',
                        tags: '',
                        behavesAs: [],
                        def: '60',
                        example: 'barChart.MaxColumnWidth = 20px;'
                    }
                ],
                iStackedBar: [
                    {
                        name: 'MaxColumnWidth',
                        type: types.dbl,
                        text: 'Gets or sets max column width in pixels.',
                        tags: '',
                        behavesAs: [],
                        def: '40',
                        example: 'stackedBarChart.MaxColumnWidth = 20px;'
                    }
                ],
                pieChart: [
                    {
                        name: 'InnerRadius',
                        type: types.dbl,
                        text: 'Gets or sets pie inner radius to make a doughnut chart.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: '0',
                        example: 'pieChart.InnerRadius = 20px;'
                    }, {
                        name: 'PieRotation',
                        type: types.dbl,
                        text: 'Gets or sets angle in degrees that indicates pie rotation, default is 0',
                        tags: '',
                        behavesAs: [],
                        def: '0',
                        example: 'pieChart.PieRotation = 20px;'
                    }, {
                        name: 'PieTotalSum',
                        type: types.dbl,
                        text: 'Gets the total sum of the values in the chart.',
                        tags: '',
                        behavesAs: [],
                        def: '0',
                        example: 'pieChart.PieRotation = 20px;'
                    }, {
                        name: 'DrawPadding',
                        type: types.dbl,
                        text: 'Gets or sets the distance between pie and shortest chart dimnsion.',
                        tags: '',
                        behavesAs: [],
                        def: '0',
                        example: 'pieChart.DrawPaddind = 20px;'
                    }
                ],
                iChartValues: [
                    {
                        name: 'Points',
                        type: modify(types.chartPoint, 'IEnumerable<{{name}}>'),
                        text: 'Gets series points to draw.',
                        tags: '',
                        behavesAs: [],
                        def: 'Enumerable.Empty<ChartPoint>',
                        example: 'var seriesPoints = lineSeries.Values.Points.ToArray();'
                    }, {
                        name: 'MaxChartPoint',
                        type: types.point,
                        text: 'Gets max X and Y values',
                        tags: '',
                        behavesAs: [],
                        def: 'new Point(0,0)',
                        example: 'var max = lineSeries.Values.MaxChartPoint;\n//max.X will store max value in X axis and max.Y max value in Y axis'
                    },
                    {
                        name: 'MinChartPoint',
                        type: types.point,
                        text: 'Gets minX and Y values',
                        tags: '',
                        behavesAs: [],
                        def: 'new Point(0,0)',
                        example: 'var min = lineSeries.Values.MinChartPoint;\n//min.X will store min value in X axis and min.Y min value in Y axis'
                    },
                    {
                        name: 'Series',
                        type: types.iChartSeries,
                        text: 'Gets or sets series that owns the values',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var owner = lineSeries.Values.Series;\n//will return lineSeries instance.'
                    },
                    {
                        name: 'GetLimits()',
                        returns: types.voidType,
                        text: 'Forces values to calculate max and min values, and index data.',
                        tags: '',
                        behavesAs: [],
                        def: 'true',
                        example: 'var requires = lineSeries.Values.RequiresEvaluation;'
                    }
                ],
                iChartSeries: [
                    {
                        name: 'Values',
                        type: types.iChartValues,
                        text: 'Gets or sets series values to plot.',
                        tags: '',
                        behavesAs: [],
                        def: 'varies',
                        example: 'var vals = lineSeries.Values.ToArray();\nvar lineSeries = new LineSeries { Values = new ChartValues(); }\n//ChartValues class implements IChartValues'
                    }, {
                        name: 'Collection',
                        type: types.seriesCollection,
                        text: 'Gets SeriesCollection that owns this series',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var owner = lineSeries.Collection;'
                    }, {
                        name: 'Configuration',
                        type: types.iSeriesConfiguration,
                        text: 'Gets or sets series configuration. If this property is not null then SeriesCollection.Configuration will be ignored.',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'LineSeries.Configuration = new SeriesConfiguration();'
                    }
                ],
                series: [
                    {
                        name: 'Title',
                        type: types.string,
                        text: 'Gets or sets series title.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'nulll',
                        example: 'lineSeries.Title = "John sales;"'
                    }, {
                        name: 'Stroke',
                        type: types.brush,
                        text: 'Gets or sets series stroke, if this property is null then a SolidColorBrush will be assigned according to series position in collection and Chart.Colors property',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'null (auto)',
                        example: 'lineSeries.Stroke = Brushes.Red;'
                    }, {
                        name: 'StrokeThickness',
                        type: types.dbl,
                        text: 'Gets or sets series stroke thickness',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: '2.5',
                        example: 'lineSeries.StrokeThickness = 4.28;'
                    }, {
                        name: 'Fill',
                        type: types.brush,
                        text: 'Gets or sets series fill color, if this property is null then a SolidColorBrush will be assigned according to series position in collection and Chart.Colors property, also Fill property has a default opacity according to chart type.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'null (auto)',
                        example: 'lineSeries.Stroke = Brushes.Red;'
                    }, {
                        name: 'DataLabels',
                        type: types.bool,
                        text: 'Gets or sets if series should include a label over each data point.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'false',
                        example: 'lineSeries.DataLabels = true;'
                    }, {
                        name: 'FontFamily',
                        type: types.fontFamily,
                        text: 'Gets or sets DataLabels font family',
                        tags: 'labels',
                        behavesAs: ['Dependency Property'],
                        def: 'Calibri',
                        example: 'Axis.FontFamily = new FontFamily("Arial");'
                    }, {
                        name: 'FontSize',
                        type: types.dbl,
                        text: 'Gets or sets DataLabels font size.',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: '11.0',
                        example: 'Axis.FontSize = 16;'
                    }, {
                        name: 'FontWeight',
                        type: types.bool,
                        text: 'Gets or sets DataLabels font weight.',
                        tags: 'label',
                        behavesAs: ['dependency Property'],
                        def: 'FontWeights.Normal',
                        example: 'Axis.FontWeight = FontWeights.Bold;'
                    }, {
                        name: 'Gets or sets labels font style',
                        type: types.fontStyle,
                        text: 'Gets or sets DataLabels font style.',
                        tags: 'labels',
                        behavesAs: ['Dependency Property'],
                        def: 'FontStyles.Normal',
                        example: 'Axis.FontStyle = FontStyles.Italic;'
                    }, {
                        name: 'FontStrech',
                        type: types.bool,
                        text: 'Gets or sets DataLabels font stretch',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: 'FontStretches.Normal',
                        example: 'Axis.FontStretch = FontStretches.ExtraExpanded;'
                    }, {
                        name: 'Foreground',
                        type: types.bool,
                        text: 'Gets or sets DataLabels foreground.',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: 'Color.FromRgb(150, 150, 150)',
                        example: 'Axis.Foreground = Color.FromRgb(55, 55, 55);'
                    }, {
                        name: 'Chart',
                        type: types.chart,
                        text: 'Gets chart that own the series.',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var ownerChart = lineSeries.Chart;'
                    }, {
                        name: 'GetColorByIndex(<i class="text-muted">index</i>)',
                        returns: types.series,
                        text: 'Returns a Color according to an index and Chart.Colors property.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.integer, text: 'index to lookup.' }]
                    }, {
                        name: 'Setup(<i class="text-muted">configuration</i>)',
                        returns: types.series,
                        text: 'Setup a configuration for this collection, notice this method returns the current instance to support fleunt syntax. if Series.Cofiguration is not null then SeriesCollection.Configuration will be ignored.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.seriesConfiguration, text: 'configuration to apply' }],
                        example: 'var config = new SeriesConfiguration<double>().X(val => val);\nmySeriesCollection.Setup(config)'
                    }
                ],
                lineSeries: [
                    {
                        name: 'LineSmoothness',
                        type: modify(types.dbl, "{{name}}?"),
                        text: 'Gets or sets this series line smoothness this property overrides LineChart LineSmoothness property',
                        tags: '',
                        behavesAs: [''],
                        def: 'null',
                        example: 'lineSeries.LineSmoothness = 0;'
                    }, {
                        name: 'PointRadius',
                        type: modify(types.dbl, "{{name}}?"),
                        text: 'Gets or sets every point radius in the series',
                        tags: '',
                        behavesAs: [''],
                        def: '4',
                        example: 'lineSeries.PointRadius = 2;'
                    }
                ],
                seriesCollection: [
                    {
                        name: 'Chart',
                        type: types.chart,
                        text: 'Gets owner chart.',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var chart = mySeriesCollection.Chart;'
                    }, {
                        name: 'Configuration',
                        type: types.iSeriesConfiguration,
                        text: 'Gets or sets chart Series configuration, ',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var chart = mySeriesCollection.Chart;'
                    }, {
                        name: 'Setup(<i class="text-muted">configuration</i>)',
                        returns: types.seriesCollection,
                        text: 'Setup a configuration for this collection, notice this method returns the current instance to support fleunt syntax. if a series has its own setup then series collection setup will be ignored.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: types.seriesConfiguration, text: 'configuration to apply' }],
                        example: 'var config = new SeriesConfiguration<double>().X(val => val);\nmySeriesCollection.Setup(config)'
                    }
                ],
                iSeriesConfiguration: [
                    {
                        name: 'Chart',
                        type: types.chart,
                        text: 'Gets owner chart, even you can set this property it will be overriden when live charts is plotting.',
                        tags: '',
                        behavesAs: [],
                        def: 'internal setter',
                        example: 'var chart = configuration.Chart;\n//where configuration implements ISeriesConfiguration.'
                    }
                ],
                seriesConfiguration: [
                    {
                        name: 'DataOptimization',
                        type: null,
                        text: 'this property is under construction and might change, docs will be updated when this is ready (wait for high performance release).',
                        tags: 'high performance',
                        example: '//nothing to see here :('
                    }, {
                        name: 'XValueMapper',
                        type: { name: 'Func<T, int, double>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' },
                        text: 'Gets or sets the current function that pulls out X value from T',
                        tags: '',
                        def: '(model, index) => index;',
                        example: 'XValueMapper = (model, index) => model.ToPlotProperty;'
                    }, {
                        name: 'YValueMapper',
                        type: { name: 'Func<T, int, double>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' },
                        text: 'Gets or sets the current function that pulls out Y value from T',
                        tags: '',
                        def: '(model, index) => index;',
                        example: 'YValueMapper = (model, index) => model.ToPlotProperty;'
                    }, {
                        name: 'X(<i class="text-muted">predicate</i>)',
                        returns: types.seriesConfiguration,
                        text: 'Sets XValueMapper property, notice this property returns current SeriesConfiguration to support fluent syntax.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: { name: 'Func<>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'predicate, function that pulls out plot target property, this method has 2 overloads, first: (model, index) => <i>predicate</i>, second: model => <i>predicate</i>' }],
                        example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);'
                    }, {
                        name: 'Y(<i class="text-muted">predicate</i>)',
                        returns: types.seriesConfiguration,
                        text: 'Sets YValueMapper, notice this property returns current SeriesConfiguration to support fluent syntax.',
                        tags: '',
                        behavesAs: [],
                        params: [{ type: { name: 'Func<>', ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' }, text: 'predicate, function that pulls out plot target property, this method has 2 overloads, first: (model, index) => <i>predicate</i>, second: model => <i>predicate</i>' }],
                        example: 'var config = new SeriesConfiguration()\n\t\t\t.X(model => model.XProperty)\n\t\t\t.Y(model => model.DesiredProperty);\n Chart.Series = new SeriesCollection(config);'
                    }, {
                        name: 'HasHighPerformanceMethod(<i class="text-muted">method</i>)',
                        type: null,
                        text: 'This property is under construction and might change, docs will be updated when this is ready (wait for high performance release).',
                        tags: 'high performance',
                        behavesAs: [],
                        def: 'null',
                        example: '//nothing to see here :('
                    }
                ],
                chartPoint: [
                    {
                        name: 'X',
                        type: types.dbl,
                        text: 'Gets or sets X value.',
                        tags: '',
                        behavesAs: [],
                        def: '0',
                        example: 'var x = ChartPoint.X;'
                    }, {
                        name: 'Y',
                        type: types.dbl,
                        text: 'Gets or sets Y value.',
                        tags: '',
                        behavesAs: [],
                        def: '0',
                        example: 'var y = ChartPoint.Y;'
                    }, {
                        name: 'Instance',
                        type: types.object,
                        text: 'Gets or sets instance where point pulled X and Y values',
                        tags: '',
                        behavesAs: [],
                        def: 'see ChartValues class',
                        example: 'var instance = ChartPoint.Instance;'
                    }, {
                        name: 'Key',
                        type: types.integer,
                        text: 'Gets or sets ChartPoint index value, LiveCharts indexes all values to improve perfomance.',
                        tags: '',
                        behavesAs: [],
                        def: 'see ChartValues class',
                        example: 'var pointIndex = ChartPoint.Key;'
                    }, {
                        name: 'IsMocked',
                        type: types.bool,
                        text: 'Gets or sets if a point is fake.',
                        tags: '',
                        behavesAs: [],
                        def: "false",
                        example: 'var isFake = ChartPoint.IsMocked;'
                    }
                ],
                axis: [
                    {
                        name: 'Labels',
                        type: modify(types.string, "IList<{{name}}>"),
                        text: 'Gets or sets axis labels, labels property stores the array to map for each index and value, for example if axis value is 0 then label will be labels[0], when value 1 then labels[1], value 2 then labels[2], ..., value n labels[n], use this property instead of a formatter when there is no conversion between value and label for example names, if you are ploting sales vs salesman name.',
                        tags: 'label formatter',
                        behavesAs: ['Dependency Property'],
                        def: 'null',
                        example: 'Axis.Labels = new[] {"John", "Mark", "Susan"};'
                    }, {
                        name: 'Label Formatter',
                        type: { name: "Func<double, string>", ref: 'https://msdn.microsoft.com/en-us/library/bb549151(v=vs.110).aspx' },
                        text: 'Gets or sets the function to convet a value to label, for example when you need to display your chart as curency ($1.00) or as degrees (10°), if Labels property is not null then formatter is ignored, and label will be pulled from Labels prop.',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: 'null',
                        example: 'Axis.LabelFormatter = val => val.ToString("C"); //as currency\nLabelFormatter = val => val + "°"; //as degrees\nLabelFormatter = val => val + " items sold"; //or any other custom format'
                    }, {
                        name: 'Color',
                        type: types.color,
                        text: 'Gets or sets axis color, axis means only the zero value, if you need to highlight where zero is. to change separators color, see Axis.Separator.',
                        tags: 'separator zero',
                        behavesAs: ['Dependency Property'],
                        def: 'Color.FromRgb(242, 242, 242)',
                        example: 'Axis.Color = Color.FromRgb(55, 55, 55);'
                    }, {
                        name: 'StrokeThickness',
                        type: types.dbl,
                        text: 'Gets or sets axis thickness, this only changes thickness where zero value is, if you need to change all separators thickness please see Axis.Separator',
                        tags: 'separator zero',
                        behavesAs: ['Dependency Property'],
                        def: '1',
                        example: 'Axis.StrokeThickness = 3;'
                    }, {
                        name: 'ShowLabels',
                        type: types.bool,
                        text: 'Gets or sets if labels are visible.',
                        tags: 'labels',
                        behavesAs: ['Dependency Property'],
                        def: 'true',
                        example: 'Axis.ShowLabels = false;'
                    }, {
                        name: 'MaxValue',
                        type: modify(types.dbl, "{{name}}?"),
                        text: 'Gets or sets chart max value, set it to null to make this property Auto, default value is null.',
                        tags: 'range',
                        behavesAs: ['Dependency Property'],
                        def: 'null (auto)',
                        example: 'Axis.MaxValue = 10;'
                    }, {
                        name: 'MinValue',
                        type: modify(types.dbl, "{{name}}?"),
                        text: 'Gets or sets chart min value, set it to null to make this property Auto, default value is null.',
                        tags: 'tange',
                        behavesAs: ['Dependency Property'],
                        def: 'null (auto)',
                        example: 'Axis.MinValue = 0;'
                    }, {
                        name: 'Title',
                        type: types.string,
                        text: 'Gets or sets axis title, if this property is not null then the axis will print a new label that shows this property value.',
                        tags: '',
                        behavesAs: [],
                        def: '',
                        example: ''
                    }, {
                        name: 'FontFamily',
                        type: types.fontFamily,
                        text: 'Gets or sets labels font family, font to use for labels in this axis',
                        tags: 'labels',
                        behavesAs: ['Dependency Property'],
                        def: 'Calibri',
                        example: 'Axis.FontFamily = new FontFamily("Arial");'
                    }, {
                        name: 'FontSize',
                        type: types.dbl,
                        text: 'Gets or sets labels font size.',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: '11.0',
                        example: 'Axis.FontSize = 16;'
                    }, {
                        name: 'FontWeight',
                        type: types.bool,
                        text: 'Gets or sets labels font weight.',
                        tags: 'label',
                        behavesAs: ['dependency Property'],
                        def: 'FontWeights.Normal',
                        example: 'Axis.FontWeight = FontWeights.Bold;'
                    }, {
                        name: 'Gets or sets labels font style',
                        type: types.fontStyle,
                        text: 'Gets or sets labels font style.',
                        tags: 'labels',
                        behavesAs: ['Dependency Property'],
                        def: 'FontStyles.Normal',
                        example: 'Axis.FontStyle = FontStyles.Italic;'
                    }, {
                        name: 'FontStrech',
                        type: types.bool,
                        text: 'Gets or sets axis font stretch',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: 'FontStretches.Normal',
                        example: 'Axis.FontStretch = FontStretches.ExtraExpanded;'
                    }, {
                        name: 'Foreground',
                        type: types.bool,
                        text: 'Gets or sets axis foreground for labels',
                        tags: 'label',
                        behavesAs: ['Dependency Property'],
                        def: 'Color.FromRgb(150, 150, 150)',
                        example: 'Axis.Foreground = Color.FromRgb(55, 55, 55);'
                    }, {
                        name: 'Separator',
                        type: types.separator,
                        text: 'Gets or sets axis separator, separators are the parallel lines to an axis.',
                        tags: '',
                        behavesAs: ['Dependency Property'],
                        def: 'varies',
                        example: 'Axis.Separator = new Separator();'
                    }
                ],
                separator: [
                    {
                        name: 'IsEnabled',
                        type: types.bool,
                        text: 'Gets or sets if separators are enabled (will be drawn)',
                        tags: '',
                        behavesAs: [],
                        def: 'true',
                        example: 'Separator.IsEnabled = false;'
                    }, {
                        name: 'Color',
                        type: types.color,
                        text: 'Gets or sets separators color',
                        tags: '',
                        behavesAs: [],
                        def: 'varies',
                        example: 'Separator.Color = Color.FromRgb(55,55,55);'
                    }, {
                        name: 'StrokeThickness',
                        type: types.integer,
                        text: 'Gets or sets separator line thickness',
                        tags: '',
                        behavesAs: [],
                        def: 'varies',
                        example: 'Separator.Thickness = 2;'
                    }, {
                        name: 'Step',
                        type: modify(types.dbl, "{{name}}?"),
                        text: 'Gets or sets sepator step, this means the value between each line, use null for auto.',
                        tags: '',
                        behavesAs: [],
                        def: 'null (auto)',
                        example: 'Separato.Step = 1;'
                    }
                ],
                zoomingOptions: [],
                chartLegend: [],
                legendlocation: []
            };
        };
    }
]);