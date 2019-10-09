    /*Line chart*/
    var optionslinechart = {
        chart: {
            toolbar: {
                show: false
            },
            dropShadow: {
              enabled: true,
              top: 5,
              left: 0,
              blur: 8,
              opacity: 0.4,
              color: '#655af3'
            },
            height: 120,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [ 3 ]
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: false,
        },

        colors:['#655af3'],
        series: [
            {
                name: 'series1',
                data: [1.5, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
            }
        ],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };

    var chartlinechart = new ApexCharts(
        document.querySelector("#chart-widget1"),
        optionslinechart
    );
    chartlinechart.render();

    /*Line chart2*/
    var optionslinechart = {
        chart: {
            toolbar: {
                show: false
            },
            dropShadow: {
              enabled: true,
              top: 5,
              left: 0,
              blur: 8,
              opacity: 0.4,
              color: '#fd2e64'
            },
            height: 120,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [ 3 ]
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        colors:['#fd2e64'],
        series: [
            {
                name: 'series1',
                data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
            }
        ],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };

    var chartlinechart = new ApexCharts(
        document.querySelector("#chart-widget2"),
        optionslinechart
    );
    chartlinechart.render();


    /*Line chart3*/
    var optionslinechart = {
        chart: {
            toolbar: {
                show: false
            },
            dropShadow: {
              enabled: true,
              top: 5,
              left: 0,
              blur: 8,
              opacity: 0.4,
              color: '#51bb25'
            },
            height: 120,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [ 3 ]
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        colors:['#51bb25'],
        series: [
            {
                name: 'series1',
                data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
            }
        ],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };

    var chartlinechart = new ApexCharts(
        document.querySelector("#chart-widget3"),
        optionslinechart
    );
    chartlinechart.render();


    /*Line chart4*/
    var optionslinechart = {
        chart: {
            toolbar: {
                show: false
            },
            dropShadow: {
              enabled: true,
              top: 5,
              left: 0,
              blur: 8,
              opacity: 0.4,
              color: '#7a15f7'
            },
            height: 120,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [ 3 ]
        },
        xaxis: {
            show: false,
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        colors:['#7a15f7'],
        series: [
            {
                name: 'series1',
                data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
            }
        ],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };

    var chartlinechart = new ApexCharts(
        document.querySelector("#chart-widget4"),
        optionslinechart
    );
    chartlinechart.render();

// column chart

var colors = ['#655af3', '#fd2e64'];
        var options = {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                },
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '35%',
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30, 24, 26, 28]
            }],
            xaxis: {
                categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily', 'Wilson', 'Calvin', 'Ronny'],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '14px'
                    }
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#chart-widget5"),
            options
        );

        chart.render();



// earning chart

var options = {
    chart: {
        width: 350,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [44, 55, 13],
    responsive: [{
        breakpoint: 200,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    legend: {
        position: 'bottom'
    },
    fill: {
        opacity: 1
    },
    colors:['#655af3', '#fd2e64', '#51bb25'],

}

var chart = new ApexCharts(
    document.querySelector("#chart-widget6"),
    options
);

chart.render()



// product chart
var optionsLine = {
  chart: {
    height: 360,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
        show: false
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 8,
      opacity: 0.4,
      color: 'colors'
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ["#655af3", '#fd2e64', '#51bb25'],
  series: [{
      name: "Music",
      data: [1, 15, 26, 20, 33, 27]
    },
    {
      name: "Photos",
      data: [3, 33, 21, 42, 19, 32]
    },
    {
      name: "Files",
      data: [0, 39, 52, 11, 29, 43]
    }
  ],
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true
  },
  labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var chartLine = new ApexCharts(document.querySelector('#chart-widget7'), optionsLine);
chartLine.render();


// small-widget-chart-1
var options = {
    chart: {
        height: 150,
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.4,
          color: '#655af3'
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#655af3'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 3.5
    },
    series: [{
            name: "High - 2013",
            data: [20, 25, 20, 36, 32]
        },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#smallchart-widget1"),
    options
);

chart.render();

// small-widget-chart-2
var options = {
    chart: {
        height: 150,
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.4,
          color: '#fd517d'
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#fd517d'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 3.5
    },
    series: [{
            name: "High - 2013",
            data: [30, 20, 40, 28, 36]
        },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#smallchart-widget2"),
    options
);

chart.render();

// small-widget-chart-3
var options = {
    chart: {
        height: 150,
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.4,
          color: '#51bb25'
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#51bb25'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 3.5
    },
    series: [{
            name: "High - 2013",
            data: [10, 30, 22, 36, 24]
        },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#smallchart-widget3"),
    options
);

chart.render();

// small-widget-chart-4
var options = {
    chart: {
        height: 150,
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.4,
          color: '#148df6'
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#148df6'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 3.5
    },
    series: [{
            name: "High - 2013",
            data: [20, 35, 20, 26, 20]
        },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#smallchart-widget4"),
    options
);

chart.render();


// area spaline chart
var colors = ['#655af3', '#fd2e64']
var options1 = {
    chart: {
        height: 380,
        type: 'line',
        toolbar:{
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.4,
          color: 'colors'
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
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],

    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
}

var chart1 = new ApexCharts(
    document.querySelector("#chart-widget8"),
    options1
);

chart1.render();






    var trigoStrength = 3
    var iteration = 11

    function getRandom() {
        var i = iteration;
        return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
    }

    function getRangeRandom(yrange) {
        return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    }

    function generateMinuteWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

            series.push([x, y]);
            baseval += 300000;
            i++;
        }
        return series;
    }



    function getNewData(baseval, yrange) {
        var newTime = baseval + 300000;
        return {
            x: newTime,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        }
    }

    var optionsColumn = {
        chart: {
            height: 350,
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },

            events: {
                animationEnd: function (chartCtx) {
                    const newData = chartCtx.w.config.series[0].data.slice()
                    newData.shift()
                    window.setTimeout(function () {
                        chartCtx.updateOptions({
                            series: [{
                                data: newData
                            }],
                            xaxis: {
                                min: chartCtx.minX,
                                max: chartCtx.maxX
                            },
                            subtitle: {
                                text: parseInt(getRangeRandom({min: 1, max: 20})).toString() + '%',
                            }
                        }, false, false)
                    }, 300)
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0,
        },
        series: [{
            name: 'Load Average',
            data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
                min: 10,
                max: 110
            })
        }],
        title: {
            text: 'Load Average',
            align: 'left',
            style: {
                fontSize: '12px'
            }
        },
        subtitle: {
            text: '20%',
            floating: true,
            align: 'right',
            offsetY: 0,
            style: {
                fontSize: '22px'
            }
        },

        fill: {
            colors:[XoloAdminConfig.primary],
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100]
            }
        },
        xaxis: {
            type: 'datetime',
            range: 2700000,

        },

        legend: {
            show: true
        },
    }



    var chartColumn = new ApexCharts(
            document.querySelector("#columnchart"),
        optionsColumn
    );
    chartColumn.render()


    var optionsLine = {
        chart: {
            height: 350,
            type: 'line',
            stacked: true,
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            events: {
                animationEnd: function (chartCtx) {
                    const newData1 = chartCtx.w.config.series[0].data.slice()
                    newData1.shift()
                    const newData2 = chartCtx.w.config.series[1].data.slice()
                    newData2.shift()
                    window.setTimeout(function () {
                        chartCtx.updateOptions({
                            series: [{
                                data: newData1
                            }, {
                                data: newData2
                            }],
                            subtitle: {
                                text: parseInt(getRandom() * Math.random()).toString(),
                            }
                        }, false, false)
                    }, 300)
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 5,
        },
        grid: {
            padding: {
                left: 0,
                right: 0
            }
        },
        fill: {

            opacity: 0.9

        },
        colors:[XoloAdminConfig.primary, XoloAdminConfig.secondary],
        markers: {
            size: 0,
            hover: {
                size: 0
            }
        },
        series: [{
            name: 'Running',
            data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
                min: 30,
                max: 110
            })
        }, {
            name: 'Waiting',
            data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
                min: 30,
                max: 110
            })
        }],
        xaxis: {
            type: 'datetime',
            range: 2700000,
        },
        title: {
            text: 'Processes',
            align: 'left',
            style: {
                fontSize: '12px'
            }
        },
        subtitle: {
            text: '20',
            floating: true,
            align: 'right',
            offsetY: 0,
            style: {
                fontSize: '22px'
            }
        },
        legend: {
            show: true,
            floating: true,
            horizontalAlign: 'left',
            onItemClick: {
                toggleDataSeries: false
            },
            position: 'top',
            offsetY: -33,
            offsetX: 60
        },
    }

    var chartLine = new ApexCharts(
        document.querySelector("#linechart"),
        optionsLine
    );
    chartLine.render()


//small-column-chart-1
    var options = {
        chart: {
            height: 200,
            type: 'bar',
            toolbar:{
              show: false
            }
        },
        plotOptions: {
            bar: {
              columnWidth: '15%',
                dataLabels: {
                    position: 'bottom', // top, center, bottom
                },
            }
        },
        colors:['#655af3'],
        dataLabels: {
            enabled: false,
        },
        series: [{
            name: 'Inflation',
            data: [2.0, 3.5, 1.5, 3.5, 2.2, 1.4, 4.0, 1.5, 2.8, 3.8, 1.8, 3.8]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            labels: {
                offsetY: 60,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: true,
                offsetY: -50,

            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#chart-widget9"),
        options
    );

    chart.render();


//small-column-chart-2
    var options = {
        chart: {
            height: 200,
            type: 'bar',
            toolbar:{
              show: false
            }
        },
        plotOptions: {
            bar: {
              columnWidth: '15%',
                dataLabels: {
                    position: 'bottom', // top, center, bottom
                },
            }
        },
        colors:['#fd2e64'],
        dataLabels: {
            enabled: false,
        },
        series: [{
            name: 'Inflation',
            data: [2.0, 3.5, 1.5, 3.5, 2.2, 1.4, 4.0, 1.5, 2.8, 3.8, 1.8, 3.8]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            labels: {
                offsetY: 60,

            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: true,
                offsetY: -50,

            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#chart-widget10"),
        options
    );

    chart.render();

//small-column-chart3
var options = {
    chart: {
        height: 200,
        type: 'bar',
        toolbar:{
          show: false
        }
    },
    plotOptions: {
        bar: {
          columnWidth: '15%',
            dataLabels: {
                position: 'bottom', // top, center, bottom
            },
        }
    },
    colors:['#51bb25'],
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: 'Inflation',
        data: [2.0, 3.5, 1.5, 3.5, 2.2, 1.4, 4.0, 1.5, 2.8, 3.8, 1.8, 3.8]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        labels: {
            offsetY: 60,

        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        tooltip: {
            enabled: true,
            offsetY: -50,

        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#chart-widget11"),
    options
);

chart.render();
