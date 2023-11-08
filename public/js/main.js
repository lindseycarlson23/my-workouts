//Chart structure - have to test to see if it will show up (not sure yet)
const ctx = document.getElementById('myChart');
      
       var myChart = new Chart(ctx, {
        type: 'bar',
            data: {
            labels: [],
            datasets: [{
            label: '# Calories burned',
            borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks:{
                    display:false
                }
              }
            }
          }
        });

        function addData(chart) {
            chart.data.labels.push(document.getElementById("date").value);
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(document.getElementById("calories").value*1);
            });
            chart.update();
        }

        function removeData(chart) {
            chart.data.labels.pop();
            chart.data.datasets.forEach((dataset) => {
                dataset.data.pop();
            });
            chart.update();
        }