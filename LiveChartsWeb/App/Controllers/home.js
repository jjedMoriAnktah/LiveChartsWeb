'use strict';

app.controller('homeController', [
    '$scope', function($scope) {
        $scope.basicExample = '//create a new SeriesCollection\n' +
            'var seriesCollection = new SeriesCollection();\n' +
            '//create some LineSeries if you need so\n' +
            'var charlesSeries = new LineSeries\n' +
            '{\n' +
            '\tTitle = "Charles",\n' +
            '\tValues = new ChartValues<double> {10, 5, 7, 5, 7, 8}\n' +
            '};\n' +
            'var jamesSeries = new LineSeries\n' +
            '{\n' +
            '\tTitle = "James",\n' +
            '\tValues = new ChartValues<double> { 5, 6, 9, 10, 11, 9 }\n' +
            '};\n' +
            '//add series to seriesCollection\n' +
            'seriesCollection.Add(charlesSeries);\n' +
            'seriesCollection.Add(jamesSeries);\n' +
            '//now just assing this seriesCollectionto your chart\n' +
            '//you can use wpf bindings if you need it\n' +
            'myChart.Series = seriesCollection\n' +
            '//create some labels if necessary\n' +
            'var labels = new string[] {"Jan", "Feb" , "Mar", "Apr", "May", "Jun"};\n' +
            'myChart.AxixX.Labels = labels;';
        $scope.liveDataExample = '//Define a class as follows\n' +
            'public class WeatherViewModel\n' +
            '{\n' +
            '\tpublic double Temperature { get; set; }\n' +
            '\tpublic DateTime DateTime { get; set; }\n' +
            '}\n\n' +
            '//In this case we will not only plot double values\n' +
            '//to make it easier to handle "live-data" we are going to use WeatherViewModel class\n' +
            '//we need to let LiveCharts know how to use this model\n' +
            '\n' +
            '//first we create a new configuration for WeatherViewModel\n' +
            'var config = new SeriesConfiguration<WeatherViewModel>();\n\n' +
            '//now we map X and Y\n' +
            '//we will use Temperature as Y\n' +
            'config.Y(model => model.Temperature);\n' +
            '//and DateTime as X, we convert to OADate so we can plot it easly.\n' +
            'config.X(model => model.DateTime.ToOADate());\n\n' +
            '//now we create our series with this configuration\n' +
            'var seriesCol = new SeriesCollection(config)\n' +
            '{\n' +
            'new LineSeries {Values = new ChartValues<WeatherViewModel>()}\n' +
            '};\n\n' +
            '//to display a custom label we will use a formatter,\n' +
            '//formatters are just functions that take a double value as parameter\n' +
            '//and return a string, in this case we will convert the OADate to DateTime\n' +
            '//and then use a custom date format\n' +
            'XFormatter = val => DateTime.FromOADate(val).ToString("hh:mm:ss tt");\n' +
            '//now for Y we are rounding and adding ° for degrees\n' +
            'YFormatter = val => Math.Round(val) + " °";\n' +
            '//Now you just assing this properties to our chart\n' +
            '//use wpf binding if necessary\n' +
            'myChart.Series = seriesCol;\n' +
            'myChart.AxisY.LabelFormatter = YFormatter;\n' +
            'myChart.AxisX.LabelFormatter = XFormatter;';
    }
]);