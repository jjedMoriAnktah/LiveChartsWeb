app.factory('typesService', [
    function() {
        return {
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
            point: { name: 'Point', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.point(v=vs.110).aspx' },
            object: { name: 'object', ref: 'https://msdn.microsoft.com/en-us/library/9kkx3h3c.aspx' },
            voidType: { name: 'void', ref: 'https://msdn.microsoft.com/en-us/library/yah0tteb.aspx' },
            chart: { name: 'Chart', ref: '#/documentation/chart' },
            iSeriesConfiguration: { name: 'ISeriesConfiguration', ref: '#/documentation/iseriesconfiguration' },
            iChartSeries: { name: 'IChartSeries', ref: '#/documentation/ichartseries' },
            seriesConfiguration: { name: 'SeriesConfiguration<T>', ref: '#/documentation/seriesconfiguration' },
            iChartValues: { name: 'IChartValues', ref: '#/documentation/ichartvalues' },
            chartPoint: { name: 'ChartPoint', ref: '#/documentation/chartpoint' },
            axis: { name: 'Axis', ref: '#/documentation/axis' },
            separator: { name: 'Separator', ref: "#/documentation/separator" },
            zoomingOptions: { name: 'ZoomingOptions', ref: '#/documentation/zoomingoptions' },
            legendLocation: { name: 'LegendLocation', ref: '#/documentation/legendlocation' },
            chartLegend: { name: 'ChartLegend', ref: '#/documentation/chartlegend' },
            series: { name: 'Series', ref: '#/documentation/series' },
            seriesCollection: { name: 'SeriesCollection', ref: '#/documentation/seriescollection' },
            axisTags: { name: 'AxisTags', ref: '#/documentation/axistags' }
        };
    }
]);