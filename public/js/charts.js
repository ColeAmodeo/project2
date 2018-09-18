var dataArray = [];
var labelArray = [];
function latestSessions(dataPull) {
  $.get("/api/sessions", function(sessionData) {
    console.log(sessionData)
    for (i = 0; i < sessionData.length; i++) {
      labelArray.push(sessionData[i].project_id);
      dataArray.push(sessionData[i].time_worked);
    }
  });
//Pull individual project and all employees who worked on it, use a for loop to push their respective data into names and data
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [{
            label: 'Latest Sessions worked',
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

function activeProjects(dataPull) {
$.get("/api/projects", function(projectData) {
  console.log(projectData)
  for (i = 0; i < projectData.length; i++) {
    labelArray.push(projectData[i].project_desc);
    dataArray.push(projectData[i].expected_time);
  }
  console.log(labelArray)
});
//Pull individual project and all employees who worked on it, use a for loop to push their respective data into names and data
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

//activeProjectsGraph();
latestSessions();
