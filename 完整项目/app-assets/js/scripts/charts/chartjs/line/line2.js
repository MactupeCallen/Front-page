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
    var ctx = $("#line2-chart");

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

    var chartData = {
         labels: [	1980, 1981, 1982, 1983, 1984, 
        			1985, 1986, 1987, 1988, 1989, 
        			1990, 1991, 1992, 1993, 1994, 
        			1995, 1996, 1997, 1998, 1999, 
        			2000, 2001, 2002, 2003, 2004, 
        			2005, 2006, 2007, 2008, 2009, 
        			2010, 2011, 2012, 2013, 2014, 
        			2015, 2016, 2017, 2018, 2019, 2020],
        datasets: [{ 
label:"GC", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.6, 11.03, 5.83, 5.38, 6.96, 4.27, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#FF8642", 
pointBorderColor: "#FF8642", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PS4", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.3, 42.84, 31.76, 8.16, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#F4DC85", 
pointBorderColor: "#F4DC85", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"2600", 
data:[0.34, 14.84, 6.52, 2.86, 0, 0, 0, 1.12, 0.24, 0.47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#816C5B", 
pointBorderColor: "#816C5B", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"SNES", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.56, 5.31, 0, 1.31, 1.55, 0.35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#C3B7AC", 
pointBorderColor: "#C3B7AC", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PSP", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51, 9.97, 10.78, 9.55, 7.82, 8.55, 9.04, 2.64, 2.93, 0.67, 0.08, 0.12, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#E7E3D7", 
pointBorderColor: "#E7E3D7", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"GEN", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.6, 0, 0, 0.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#668D3C", 
pointBorderColor: "#668D3C", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"GBA", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.72, 14.86, 10.62, 13.12, 7.43, 0.55, 1.96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#B1DDA1", 
pointBorderColor: "#B1DDA1", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PS2", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.39, 35.06, 46.66, 40.32, 49.4, 42.74, 20.27, 17.01, 11.51, 4.66, 1.35, 0.06, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#E5F3CF", 
pointBorderColor: "#E5F3CF", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"3DS", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12.22, 11.44, 11.94, 3.64, 12.97, 4.4, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#0097AC", 
pointBorderColor: "#0097AC", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"SAT", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41, 0, 0.24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#3CD6E6", 
pointBorderColor: "#3CD6E6", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PS", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.81, 16.64, 22.51, 29.3, 22.34, 19.7, 9.82, 2.62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#97EAF4", 
pointBorderColor: "#97EAF4", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"XB", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.28, 11.5, 11.11, 7.31, 13.06, 3.02, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#FFA500", 
pointBorderColor: "#FFA500", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PSV", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.76, 7.6, 2.68, 3.75, 3.45, 1.76, 0.01, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#FF00FF", 
pointBorderColor: "#FF00FF", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"WiiU", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.42, 4.8, 6.24, 2.34, 1.55, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#FFE7BA", 
pointBorderColor: "#FFE7BA", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"XOne", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.15, 16.5, 8.74, 2.4, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#F5DEB3", 
pointBorderColor: "#F5DEB3", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PCFX", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#F0FFF0", 
pointBorderColor: "#F0FFF0", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"GB", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.06, 3.83, 0, 0, 0, 0, 0, 0, 0.31, 0.07, 3.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#F08080", 
pointBorderColor: "#F08080", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"NG", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#EED5D2", 
pointBorderColor: "#EED5D2", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"X360", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.26, 8.77, 11.09, 43.61, 29.32, 33.61, 28.63, 34.36, 35.81, 9.59, 3.14, 0.48, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#CDCD00", 
pointBorderColor: "#CDCD00", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"WS", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#CD00CD", 
pointBorderColor: "#CD00CD", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"3DO", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#C0FF3E", 
pointBorderColor: "#C0FF3E", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"DS", 
data:[0, 0, 0, 0, 0, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 3.21, 9.48, 27.03, 17.07, 32.82, 14.72, 7.14, 1.53, 0.65, 0.02, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#A52A2A", 
pointBorderColor: "#A52A2A", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"TG16", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#8B814C", 
pointBorderColor: "#8B814C", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PC", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.03, 2.29, 1.03, 0.07, 0, 0.06, 0.1, 0.05, 0.04, 1.06, 0.17, 0.15, 2.35, 0.9, 2.16, 6.43, 5.9, 2.02, 2.55, 2.12, 0.19, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#8E388E", 
pointBorderColor: "#8E388E", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"NES", 
data:[0, 0, 0, 0, 1.85, 3.5, 13.74, 0, 1.51, 4.17, 2.23, 1.39, 0, 0.36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#71C671", 
pointBorderColor: "#71C671", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"Wii", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8.35, 22.23, 15.89, 18.93, 16.94, 16.49, 8.41, 1.76, 1.13, 0.35, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#6E6E6E", 
pointBorderColor: "#6E6E6E", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"DC", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08, 0, 1.14, 0.04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#473C8B", 
pointBorderColor: "#473C8B", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"PS3", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92, 17.12, 38.14, 44.18, 39.82, 44.59, 45.45, 54.44, 12.68, 5.71, 0.97, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#528B8B", 
pointBorderColor: "#528B8B", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"GG", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#228B22", 
pointBorderColor: "#228B22", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"N64", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.91, 2.54, 9.03, 5.06, 9.74, 0.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#0A0A0A", 
pointBorderColor: "#0A0A0A", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},{ 
label:"SCD", 
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
fill: false,
borderDash: [5, 5],
borderColor: "#00B2EE", 
pointBorderColor: "#00B2EE", 
pointBackgroundColor: "#FFF",
pointBorderWidth: 3,
pointHoverBorderWidth: 5,
pointRadius: 4},]};

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});