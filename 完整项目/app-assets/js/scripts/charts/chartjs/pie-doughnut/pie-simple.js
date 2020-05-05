/*=========================================================================================
    File Name: pie.js
    Description: Chartjs pie chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeforest.net/user/themeselect
==========================================================================================*/

// Pie chart
// ------------------------------
$(window).on("load", function(){
	
    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-pie-chart");
	debugger;
	var scriptArgs = document.getElementById('pie-simple').getAttribute('data');
    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        title: {
            display: true,
            text: 'Pie Charts for Sales of Genres in each year'
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Role-Playing ", "Simulation ", "Adventure ", "Action ", "Shooter ", "Puzzle ", "Strategy ", "Misc ", "Platform ", "Sports ", "Fighting ", "Racing "],
        datasets: [{
            label: "My First dataset",
            data: [0, 0.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [	'#C0362C', '#FF8642', '#F4DC85', '#816C5B', '#C3B7AC',
            					'#E7E3D7', '#668D3C', '#B1DDA1', '#E5F3CF', '#0097AC',
            					'#3CD6E6', '#97EAF4'],
        }]
    };

    var config = {
        type: 'pie',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var pieSimpleChart = new Chart(ctx, config);
});