// resolve small chart

new Chartist.Bar('.small-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11],
        [4, 12, 14, 8, 13.6, 6, 8, 13.8, 11, 13.8, 11, 12, 14, 14]
    ]
}, {
    plugins: [
        Chartist.plugins.tooltip({
            appendToBody: false,
            className: "ct-tooltip"
        })
    ],
    stackBars: true,
    low: 0,
    offset: 0,
    chartPadding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    axisX: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    }
}).on('draw', function(data) {
    if(data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 3px'
        });
    }
});

// complain chart
var options = {
            chart: {
                height: 282,
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 90, 50]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            legend: {
                show: false,
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -15,
                    top: -40
                }
            },
            colors: ['#655af3', '#fd2e64'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.9,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.40,
                    stops: [20, 100, 100, 100]
                  },
            },
            xaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                labels: {
                    low: 0,
                    offsetX: 0,
                    offsetY: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -15,
                    top: -40
                }
            },
            yaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                labels: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#complain"),
            options
        );

        chart.render();
// mixed chart
var options1 = {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: 'series1',
                data: [
                  [1351202400000,40.40],
                  [1351638000000,40.35],
                  [1351724400000,40.40],
                  [1352256400000,40.65],
                  [1352342800000,40.60],
                  [1352429200000,40.60],
                  [1352515600000,40.50],
                  [1352624000000,40.60],
                  [1352761200000,40.50],
                  [1352834000000,40.55],
                  [1353220400000,40.45],
                  [1353466000000,40.23],
                  [1353632400000,40.41],
                  [1353757200000,40.38],
                  [1353857200000,40.40],
                  [1353957200000,40.38],
                  [1354021500000,40.40],
                  [1354175600000,40.28],
                  [1354262000000,40.28],
                  [1354748400000,40.12],
                  [1354834800000,40.28],
                  [1354894000000,40.28],
                  [1355080400000,40.50],
                  [1355166800000,40.45],
                  [1355353200000,40.50],
                  [1355439600000,40.45],
                  [1355698800000,40.51],
                ]
            }, {
                name: 'series2',
                data: [
                  [1351202400000,37.30],
                  [1351638000000,37.60],
                  [1351724400000,37.50],
                  [1351810800000,37.55],
                  [1352070000000,37.40],
                  [1352256400000,37.55],
                  [1352342800000,37.45],
                  [1352429200000,37.60],
                  [1352515600000,37.50],
                  [1352624000000,37.30],
                  [1352761200000,37.20],
                  [1353134000000,37.25],
                  [1353220400000,37.22],
                  [1353279600000,37.30],
                  [1353466000000,37.23],
                  [1353632400000,37.30],
                  [1353757200000,37.28],
                  [1353857200000,37.30],
                  [1353957200000,37.28],
                  [1354021500000,37.10],
                  [1354175600000,37.28],
                  [1354262000000,37.22],
                  [1354748400000,37.50],
                  [1354834800000,37.55],
                  [1354894000000,37.65],
                  [1355080400000,37.50],
                  [1355166800000,37.40],
                  [1355353200000,37.50],
                  [1355439600000,37.45],
                  [1355698800000,37.51],
                  [1355785200000,37.40],
                ]
            }],
            legend: {
                show: false,
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -15,
                    top: -40
                }
            },
            colors: ['#efeefe', '#fd2e64'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.9,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.40,
                    stops: [20, 100, 100, 100]
                  },
            },
            xaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                labels: {
                    low: 0,
                    offsetX: 0,
                    offsetY: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -15,
                    top: -40
                }
            },
            yaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                labels: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart1 = new ApexCharts(
            document.querySelector("#mix1"),
            options1
        );

        chart1.render();
// bar chart
var data = {
  labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '120', '130'],
  series: [
    [1, 5, 7, 6, -5, -6, -9, -6, 4, 5, 6, 5, 2],
    [3, 2.6, 9, 3, -3, -4, -7, -4, 6, 8.5, 10, 3, 1],
  ]
};

var options = {
  high: 10,
  low: -10,
  seriesBarDistance: 25,
  axisY: {
        showGrid: true,
        showLabel: false,
        offset: 0
  },
  axisX: {
    showGrid: false,
  }
};

new Chartist.Bar('.ct-chartbar', data, options);
