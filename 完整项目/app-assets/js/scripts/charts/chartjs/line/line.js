/*=========================================================================================
    File Name: line.js
    Description: Chartjs simple line chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeforest.net/user/themeselect
==========================================================================================*/

// Line chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#line-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: true,
            text: 'Line Chart of Sales in Genres'
        }
    };

    // Chart Data
    var chartData = {
        labels: [	1980, 1981, 1982, 1983, 1984, 
        			1985, 1986, 1987, 1988, 1989, 
        			1990, 1991, 1992, 1993, 1994, 
        			1995, 1996, 1997, 1998, 1999, 
        			2000, 2001, 2002, 2003, 2004, 
        			2005, 2006, 2007, 2008, 2009, 
        			2010, 2011, 2012, 2013, 2014, 
        			2015, 2016, 2017, 2018, 2019],
        datasets: [{
            label: "Role-Playing",
            data: [	0.0, 0.0, 0.0, 0.0, 0.0, 
            		0.0, 2.52, 4.65, 5.88, 2.2, 
            		4.52, 3.25, 6.86, 5.59, 7.11, 
            		14.26, 43.96, 21.79, 28.09, 49.09, 
            		29.03, 22.06, 45.13, 30.28, 53.95, 
            		28.55, 57.73, 43.89, 59.83, 47.9, 
            		70.52, 53.37, 47.81, 44.92, 45.86, 
            		36.44, 6.76, 0.04, 0.0],
            fill: false,
            borderDash: [5, 5],
            borderColor: "#C0362C",
            pointBorderColor: "#C0362C",
            pointBackgroundColor: "#FFF",
           	pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Simulation",
            data: [	0.0, 0.45, 0.0, 0.0, 0.0, 
            		0.03, 0.0, 0.0, 0.03, 0.0, 
            		1.14, 2.14, 2.14, 0.19, 2.73, 
            		4.18, 11.33, 9.65, 7.11, 11.44, 
            		3.38, 19.54, 10.81, 21.21, 10.85, 
            		49.27, 21.77, 48.97, 46.76, 33.71, 
            		22.15, 15.28, 13.38, 8.67, 5.55, 
            		5.62, 0.39, 0.0, 0.29],
            fill: false,
            borderDash: [5, 5],
            borderColor: "#FF8642",
            pointBorderColor: "#FF8642",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Adventure",
            data: [	0.0, 0.0, 0.0, 0.4, 0.0, 
            		0.0, 0.0, 4.38, 0.0, 0.0, 
            		0.0, 2.24, 12.24, 0.07, 3.74, 
            		0.72, 4.19, 4.96, 9.05, 7.6, 
            		2.98, 9.12, 11.05, 2.14, 8.7, 
            		8.53, 11.47, 24.47, 25.02, 20.68, 
            		16.57, 15.98, 5.99, 6.61, 6.06, 
            		8.03, 1.81, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#F4DC85",
            pointBorderColor: "#F4DC85",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Action",
            data: [	0.34, 14.84, 6.52, 2.86, 1.85, 
            		3.52, 13.74, 1.12, 1.75, 4.64, 
            		6.39, 6.76, 3.83, 1.81, 1.55, 
            		3.57, 20.58, 27.58, 39.44, 27.78, 
            		34.04, 59.39, 86.77, 67.93, 76.26, 
            		85.69, 66.58, 106.5, 136.39, 139.36, 
            		117.64, 118.96, 122.04, 125.22, 99.02, 
            		70.7, 19.91, 0.01, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#816C5B",
            pointBorderColor: "#816C5B",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Shooter",
            data: [	7.07, 10.04, 3.79, 0.48, 31.1, 
            		1.0, 3.89, 0.71, 0.51, 1.2, 
            		0.0, 2.0, 0.29, 3.08, 8.3, 
            		4.15, 6.91, 22.17, 9.8, 12.25, 
            		6.81, 24.77, 48.58, 27.14, 46.95, 
            		41.6, 38.37, 71.04, 59.51, 69.89, 
            		77.41, 99.36, 72.86, 62.8, 66.0, 
            		66.15, 18.22, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#C3B7AC",
            pointBorderColor: "#C3B7AC",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Puzzle",
            data: [	0.0, 2.24, 10.03, 0.78, 3.14, 
            		3.21, 0.0, 0.0, 5.58, 37.75, 
            		6.0, 3.24, 4.84, 3.17, 1.53, 
            		2.71, 3.91, 5.89, 6.34, 1.36, 
            		3.82, 8.0, 5.34, 2.42, 8.43, 
            		20.45, 10.9, 24.0, 15.59, 20.31, 
            		11.18, 5.11, 1.76, 0.99, 1.5, 
            		0.7, 0.0, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#E7E3D7",
            pointBorderColor: "#E7E3D7",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Strategy",
            data: [	0.0, 0.0, 0.0, 0.0, 0.0, 
            		0.0, 0.0, 0.0, 0.0, 0.0, 
            		0.0, 0.94, 0.36, 0.81, 3.56, 
            		6.51, 5.61, 7.71, 13.47, 18.46, 
            		8.5, 7.55, 5.56, 7.99, 7.19, 
            		5.37, 4.27, 9.42, 11.69, 12.56, 
            		13.87, 9.06, 3.33, 6.33, 0.99, 
            		1.82, 0.5, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#668D3C",
            pointBorderColor: "#668D3C",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Misc",
            data: [	2.71, 0.0, 0.87, 2.14, 1.45, 
            		0.0, 0.0, 0.0, 0.0, 1.28, 
            		0.0, 0.08, 4.94, 0.3, 2.86, 
            		6.4, 10.68, 5.69, 11.94, 20.65, 
            		15.54, 16.4, 15.67, 23.82, 31.32, 
            		61.24, 67.35, 92.27, 87.03, 76.94, 
            		96.86, 56.08, 22.92, 25.65, 23.68, 
            		11.69, 1.17, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#B1DDA1",
            pointBorderColor: "#B1DDA1",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Platform",
            data: [	0.0, 6.93, 5.03, 6.93, 0.69, 
            		43.17, 9.39, 1.74, 27.73, 20.66, 
            		22.97, 7.64, 13.42, 18.67, 28.74, 
            		16.69, 28.23, 21.85, 29.88, 20.82, 
            		16.06, 39.28, 45.97, 42.89, 47.34, 
            		23.56, 49.8, 35.59, 35.7, 41.09, 
            		31.9, 28.11, 18.55, 25.12, 8.89, 
            		6.05, 2.07, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#E5F3CF",
            pointBorderColor: "#E5F3CF",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Sports",
            data: [	0.49, 0.79, 1.05, 3.2, 6.18, 
            		1.96, 5.57, 3.72, 3.6, 5.72, 
            		2.11, 2.41, 2.95, 3.18, 8.39, 
            		7.98, 17.45, 30.02, 41.79, 30.29, 
            		41.19, 51.43, 65.42, 56.11, 63.68, 
            		59.54, 136.16, 98.2, 95.34, 138.52, 
            		92.53, 56.99, 30.93, 41.55, 46.66, 
            		41.54, 14.6, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#0097AC",
            pointBorderColor: "#0097AC",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Fighting",
            data: [	0.77, 0.0, 0.0, 0.0, 0.0, 
            		1.05, 0.0, 5.42, 0.0, 0.0, 
            		0.0, 0.39, 15.25, 8.75, 8.47, 
            		14.85, 18.06, 11.76, 31.66, 14.26, 
            		20.22, 18.12, 25.02, 23.73, 16.78, 
            		19.72, 22.55, 17.61, 35.38, 32.15, 
            		14.89, 22.68, 9.51, 7.21, 16.15, 
            		7.78, 3.86, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#3CD6E6",
            pointBorderColor: "#3CD6E6",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }, {
            label: "Racing",
            data: [	0.0, 0.48, 1.57, 0.0, 5.95, 
            		0.0, 1.96, 0.0, 2.14, 0.0, 
            		6.26, 1.14, 9.04, 0.36, 2.19, 
            		6.09, 28.24, 31.91, 27.9, 37.27, 
            		19.99, 55.81, 30.2, 52.19, 47.86, 
            		56.42, 34.09, 39.17, 70.66, 34.19, 
            		34.93, 35.01, 14.46, 13.04, 16.69, 
            		7.92, 1.64, 0.0, 0.0],
            lineTension: 0,
            fill: false,
            borderColor: "#97EAF4",
            pointBorderColor: "#97EAF4",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointHoverBorderWidth: 5,
            pointRadius: 4,
        }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});