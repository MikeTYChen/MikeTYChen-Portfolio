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

var myPie = new Chart(document.getElementById("pieChart").getContext("2d")).Pie(pieData, {
    labelAlign: 'center'
});
var num=-1;
var getColors = function () { 
    num++;
    console.log(num);
    return colors[num]; 
};
var colors = ["#46BFBD","46BFBD","#F7464A","#46BFBD"];
var barData = {
    labels: ["HTML", "CSS", "Javascript", "Java", "Node.js", "PM"],
    datasets: [
        {
            label: "skills",
            fillColor: getColors(),
            strokeColor: getColors(),
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [1,2,3.5,4,3.5,4]
        }
    ]
};
console.log(barChart.datasets[0].bars[0]);
        barData.update();
var level = ["Weak","Basic","Moderate","Strong","Expert","Jedi"];
var type = ["Programming","Product Management","Business"];
var barChart = new Chart(document.getElementById("barChart").getContext("2d")).Bar(barData,{
  scaleLabel : "<%= level[value] %>",
  scaleOverride:true,
  scaleSteps:5,
  scaleStartValue:0,
  scaleStepWidth:1,
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
        var innerHtml = '<span style="">' + parts[0].trim() + '</span> : <span><b>' + level[Math.ceil(parts[1].trim())] + '</b></span>';
        tooltipEl.html(innerHtml);
        
        tooltipEl.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
            top: tooltip.chart.canvas.offsetTop + tooltip.y -10 + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            fontStyle: tooltip.fontStyle,
        });
    }
});