/*=========================================================================================
    File Name: column-stacked.js
    Description: Chartjs column stacked chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeforest.net/user/themeselect
==========================================================================================*/

// Column stacked chart
// ------------------------------
$(window).on("load", function(){

    // Get the context of the Chart canvas element we want to select
    var ctx = $("#column-stacked");

    // Chart Options
    var chartOptions = {
        title:{
            display:true,
            text:"Column Stacked Chart of Sales in Four Regions"
        },
        tooltips: {
            mode: 'label'
        },
        responsive: true,//动态改变图的大小
        maintainAspectRatio: false,//图像出框
        responsiveAnimationDuration:500,//响应动画持续时间
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: [	"1980  ", "1981  ", "1982  ", "1983  ", "1984  ",  
        			"1985  ", "1986  ", "1987  ", "1988  ", "1989  ", 
					"1990  ", "1991  ", "1992  ", "1993  ", "1994  ",
        			"1995  ", "1996  ", "1997  ", "1998  ", "1999  ",
        			"2000  ", "2001  ", "2002  ", "2003  ", "2004  ",
        			"2005  ", "2006  ", "2007  ", "2008  ", "2009  ",
        			"2010  ", "2011  ", "2012  ", "2013  ", "2014  ",
        			"2015  ", "2016  ", "2017  ", "2018  ", "2019  ","2020  "],
        datasets: [{
            label: "NA_salessum",
            data: [	10.59, 33.4, 26.92, 7.76, 33.28, 
            	   	33.73, 12.5, 8.46, 23.87, 45.15, 
            	   	25.46, 12.76, 33.87, 15.12, 28.15, 
            	   	24.82, 86.76, 94.75, 128.36, 126.06, 
            	   	94.49, 173.98, 216.19, 193.59, 222.59, 
            	   	242.61, 263.12, 312.05, 351.44, 338.85, 
            	   	304.24, 241.06, 154.96, 154.77, 131.97, 
            	   	102.82, 22.66, 0.0, 0.27],
            backgroundColor: "#1E9FF2",
            hoverBackgroundColor: "#1E9FE2",
            borderColor: "transparent"
        }, {
            label: "EU_salessum",
            data: [	0.67, 1.96, 1.65, 0.8, 2.1, 
            		4.74, 2.84, 1.41, 6.59, 8.44, 
            		7.63, 3.95, 11.71, 4.65, 14.88, 
            		14.9, 47.26, 48.32, 66.9, 62.67, 
            		52.75, 94.89, 109.74, 103.81, 107.32, 
            		121.94, 129.24, 160.5, 184.4, 191.59, 
            		176.73, 167.44, 118.78, 125.8, 125.65, 
            		97.71, 26.76, 0.0, 0.0],
            backgroundColor: "#FF4961",
            hoverBackgroundColor: "#FF4951",
            borderColor: "transparent"
        }, {
            label: "JP_salessum",
            data: [	0.0, 0.0, 0.0, 8.1, 14.27, 
            		14.56, 19.81, 11.63, 15.76, 18.36, 
            		14.88, 14.78, 28.91, 25.33, 33.99, 
            		45.75, 57.44, 48.87, 50.04, 52.34, 
            		42.77, 39.86, 41.76, 34.2, 41.65, 
            		54.28, 73.73, 60.29, 60.26, 61.89, 
            		59.49, 53.04, 51.74, 47.59, 39.46, 
            		33.72, 13.7, 0.05, 0.0],
            backgroundColor: "#28D094",
            hoverBackgroundColor: "#28D084",
            borderColor: "transparent"
        }, {
            label: "Other_salessum",
            data: [	0.12, 0.32, 0.31, 0.14, 0.7, 
            		0.92, 1.93, 0.2, 0.99, 1.5, 
            		1.4, 0.74, 1.65, 0.89, 2.2, 
            		2.64, 7.69, 9.13, 11.03, 10.05, 
            		11.62, 22.76, 27.28, 26.01, 47.29, 
            		40.58, 54.43, 77.6, 82.39, 74.77, 
            		59.9, 54.39, 37.82, 39.82, 40.02, 
            		30.01, 7.75, 0.0, 0.02],
            backgroundColor: "#FF9234",
            hoverBackgroundColor: "#FF9224",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});