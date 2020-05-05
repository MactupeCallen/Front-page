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
    var ctx = $("#column-stacked2");

    // Chart Options
    var chartOptions = {
        title:{
            display:true,
            text:"Column Stacked Chart of Sales in each Genre"
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
backgroundColor: "#FF8642",
hoverBackgroundColor: "#FF8642",
borderColor: "transparent"
},{
label:"PS4",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.3, 42.84, 31.76, 8.16, 0, 0],
backgroundColor: "#F4DC85",
hoverBackgroundColor: "#F4DC85",
borderColor: "transparent"
},{
label:"2600",
data:[0.34, 14.84, 6.52, 2.86, 0, 0, 0, 1.12, 0.24, 0.47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#816C5B",
hoverBackgroundColor: "#816C5B",
borderColor: "transparent"
},{
label:"SNES",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.56, 5.31, 0, 1.31, 1.55, 0.35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#C3B7AC",
hoverBackgroundColor: "#C3B7AC",
borderColor: "transparent"
},{
label:"PSP",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51, 9.97, 10.78, 9.55, 7.82, 8.55, 9.04, 2.64, 2.93, 0.67, 0.08, 0.12, 0, 0, 0],
backgroundColor: "#E7E3D7",
hoverBackgroundColor: "#E7E3D7",
borderColor: "transparent"
},{
label:"GEN",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.6, 0, 0, 0.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#668D3C",
hoverBackgroundColor: "#668D3C",
borderColor: "transparent"
},{
label:"GBA",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.72, 14.86, 10.62, 13.12, 7.43, 0.55, 1.96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#B1DDA1",
hoverBackgroundColor: "#B1DDA1",
borderColor: "transparent"
},{
label:"PS2",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.39, 35.06, 46.66, 40.32, 49.4, 42.74, 20.27, 17.01, 11.51, 4.66, 1.35, 0.06, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#E5F3CF",
hoverBackgroundColor: "#E5F3CF",
borderColor: "transparent"
},{
label:"3DS",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12.22, 11.44, 11.94, 3.64, 12.97, 4.4, 0, 0],
backgroundColor: "#0097AC",
hoverBackgroundColor: "#0097AC",
borderColor: "transparent"
},{
label:"SAT",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41, 0, 0.24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#3CD6E6",
hoverBackgroundColor: "#3CD6E6",
borderColor: "transparent"
},{
label:"PS",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.81, 16.64, 22.51, 29.3, 22.34, 19.7, 9.82, 2.62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#97EAF4",
hoverBackgroundColor: "#97EAF4",
borderColor: "transparent"
},{
label:"XB",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.28, 11.5, 11.11, 7.31, 13.06, 3.02, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#FFA500",
hoverBackgroundColor: "#FFA500",
borderColor: "transparent"
},{
label:"PSV",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.76, 7.6, 2.68, 3.75, 3.45, 1.76, 0.01, 0],
backgroundColor: "#FF00FF",
hoverBackgroundColor: "#FF00FF",
borderColor: "transparent"
},{
label:"WiiU",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.42, 4.8, 6.24, 2.34, 1.55, 0, 0],
backgroundColor: "#FFE7BA",
hoverBackgroundColor: "#FFE7BA",
borderColor: "transparent"
},{
label:"XOne",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.15, 16.5, 8.74, 2.4, 0, 0],
backgroundColor: "#F5DEB3",
hoverBackgroundColor: "#F5DEB3",
borderColor: "transparent"
},{
label:"PCFX",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#F0FFF0",
hoverBackgroundColor: "#F0FFF0",
borderColor: "transparent"
},{
label:"GB",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.06, 3.83, 0, 0, 0, 0, 0, 0, 0.31, 0.07, 3.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#F08080",
hoverBackgroundColor: "#F08080",
borderColor: "transparent"
},{
label:"NG",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#EED5D2",
hoverBackgroundColor: "#EED5D2",
borderColor: "transparent"
},{
label:"X360",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.26, 8.77, 11.09, 43.61, 29.32, 33.61, 28.63, 34.36, 35.81, 9.59, 3.14, 0.48, 0, 0],
backgroundColor: "#CDCD00",
hoverBackgroundColor: "#CDCD00",
borderColor: "transparent"
},{
label:"WS",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#CD00CD",
hoverBackgroundColor: "#CD00CD",
borderColor: "transparent"
},{
label:"3DO",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#C0FF3E",
hoverBackgroundColor: "#C0FF3E",
borderColor: "transparent"
},{
label:"DS",
data:[0, 0, 0, 0, 0, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 3.21, 9.48, 27.03, 17.07, 32.82, 14.72, 7.14, 1.53, 0.65, 0.02, 0, 0, 0, 0],
backgroundColor: "#A52A2A",
hoverBackgroundColor: "#A52A2A",
borderColor: "transparent"
},{
label:"TG16",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#8B814C",
hoverBackgroundColor: "#8B814C",
borderColor: "transparent"
},{
label:"PC",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.03, 2.29, 1.03, 0.07, 0, 0.06, 0.1, 0.05, 0.04, 1.06, 0.17, 0.15, 2.35, 0.9, 2.16, 6.43, 5.9, 2.02, 2.55, 2.12, 0.19, 0, 0],
backgroundColor: "#8E388E",
hoverBackgroundColor: "#8E388E",
borderColor: "transparent"
},{
label:"NES",
data:[0, 0, 0, 0, 1.85, 3.5, 13.74, 0, 1.51, 4.17, 2.23, 1.39, 0, 0.36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#71C671",
hoverBackgroundColor: "#71C671",
borderColor: "transparent"
},{
label:"Wii",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8.35, 22.23, 15.89, 18.93, 16.94, 16.49, 8.41, 1.76, 1.13, 0.35, 0, 0, 0],
backgroundColor: "#6E6E6E",
hoverBackgroundColor: "#6E6E6E",
borderColor: "transparent"
},{
label:"DC",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08, 0, 1.14, 0.04, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#473C8B",
hoverBackgroundColor: "#473C8B",
borderColor: "transparent"
},{
label:"PS3",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92, 17.12, 38.14, 44.18, 39.82, 44.59, 45.45, 54.44, 12.68, 5.71, 0.97, 0, 0],
backgroundColor: "#528B8B",
hoverBackgroundColor: "#528B8B",
borderColor: "transparent"
},{
label:"GG",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#228B22",
hoverBackgroundColor: "#228B22",
borderColor: "transparent"
},{
label:"N64",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.91, 2.54, 9.03, 5.06, 9.74, 0.16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#0A0A0A",
hoverBackgroundColor: "#0A0A0A",
borderColor: "transparent"
},{
label:"SCD",
data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
backgroundColor: "#00B2EE",
hoverBackgroundColor: "#00B2EE",
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