$(document).ready(function(){

var dataArray = [];
var labelArray = [];
// RAN OUT OF TIME
// function latestSessions(dataPull) {
//   dataArray = [];
//   labelArray = [];
//   $.get("/api/sessions", function(sessionData) {
//     console.log(sessionData)
//     for (i = 0; i < sessionData.length; i++) {
//       labelArray.push(sessionData[i].id);
//       dataArray.push(sessionData[i].time_worked);
//     }
//   });

function activeProjects(dataPull) {
$.get("/api/projects", function(projectData) {
  dataArray = [];
  labelArray = [];
  console.log(projectData)
  for (i = 0; i < projectData.length; i++) {
    labelArray.push(projectData[i].project_desc);
    dataArray.push(projectData[i].expected_time);
  }
});
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Active Projects vs Expected Completion Time',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};

 //////////////////////
/// Chart Hiding/Rendering
///////////////////////
$("#myChart").hide();


// Chart event listeners
$('#controls-container').hide();
$('#display-buttons').on('click', function() {
  $('#controls-container').show();
})
$("#active-projects").on('click', function() {
  $("#myChart").show()
  activeProjects();
} )

});
