var pieData = [
 {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];
var pieOptions = {
        labelAlign: 'center'
};

var barData = {
    labels: ["HTML", "CSS/SASS", "Javascript", "Angular","Gulp/Grunt","Node.js", "Ruby On Rails", "MongoDB", "MySQL","PostgreSQL","Java", "Python", "C++", "Product Management","JIRA","Marketing","UX Design","User Research","Visual Design"],
    datasets: [
        {
            label: "skills",
            fillColor: '#46BFBD',
            strokeColor: '#46BFBD',
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [1,2,3.5,4,3.5,4,1,2,3.5,4,3.5,4,3.5,4,3,2,3,3,2]
        }
    ]
};
var level = ["Weak","Basic","Moderate","Strong","Expert","Jedi"];
var type = ["Programming","Product Management","Business"];
var barOptions = {
  scaleLabel : "<%= level[value] %>",
  scaleOverride:true,
  scaleSteps:5,
  scaleStartValue:0,
  scaleStepWidth:1,scaleShowHorizontalLines: false,
  customTooltips: function (tooltip) {
        var tooltipEl = $('#chartjs-tooltip');
        
        if (!tooltip) {
            tooltipEl.css({
                opacity: 0
            });
            return;
        }
        
        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);
        
        // split out the label and value and make your own tooltip here
        var parts = tooltip.text.split(":");
        var innerHtml = '<span style="">' + parts[0].trim() + '</span> : <span><b>' + level[Math.floor(parts[1].trim())] + '</b></span>';
        tooltipEl.html(innerHtml);
        
        tooltipEl.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
            top: tooltip.chart.canvas.offsetTop + tooltip.y -10 + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            zIndex: 2,
            fontStyle: tooltip.fontStyle,
        });
    }
};

var colors =["#46BFBD","#5AD3D1","#F7464A","#FF5A5E","#FDB45C","#FFC870"];
var softwareInd = [0,1,2,3,4,5,6,7,8,9];
var pmInd = [13,14,15];
var designInd = [16,17,18];
window.onload = function(){
    window.pieChart = new Chart(document.getElementById("pieChart").getContext("2d")).Pie(pieData, pieOptions);
    window.barChart = new Chart(document.getElementById("barChart").getContext("2d")).Bar(barData,barOptions);
    for (var i in softwareInd) {
        barChart.datasets[0].bars[softwareInd[i]].fillColor = colors[0];
        barChart.datasets[0].bars[softwareInd[i]].strokeColor = colors[0];
        barChart.datasets[0].bars[softwareInd[i]].highlightFill = colors[1];
        barChart.datasets[0].bars[softwareInd[i]].highlightStroke = colors[1];
    }
    for (var i in pmInd) {
        barChart.datasets[0].bars[pmInd[i]].fillColor = colors[2];
        barChart.datasets[0].bars[pmInd[i]].strokeColor = colors[2];
        barChart.datasets[0].bars[pmInd[i]].highlightFill = colors[3];
        barChart.datasets[0].bars[pmInd[i]].highlightStroke = colors[3];
    }
    for (var i in designInd) {
        barChart.datasets[0].bars[designInd[i]].fillColor = colors[4];
        barChart.datasets[0].bars[designInd[i]].strokeColor = colors[4];
        barChart.datasets[0].bars[designInd[i]].highlightFill = colors[5];
        barChart.datasets[0].bars[designInd[i]].highlightStroke = colors[5];
    }
    barChart.update();
}

