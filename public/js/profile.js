//Chart Set up
const ctx = document.getElementById('myChart');
      
       var myChart = new Chart(ctx, {
        type: 'bar',
            data: {
            labels: [],
            datasets: [{
            label: '# of Votes',
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
            chart.data.labels.push(document.getElementById("category").value);
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

//Logout button on profile page 
const logout = async () => {
    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.locaion.replace('/homepage')
    }
}
//Delete button for deleting posts 
const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id'); // need to assign data-id="{{post.id}} to the post delete button

        const response = await fetch(`/api/workout/${id}`, {
            method:'DELETE',
        });

        if (response.ok){
            document.location.replace('/userpage')
        }
    }
}

//click the addPost button to display the form 
const addPost = async (event) => {
    event.preventDefault();
    document.location.replace('/form handlebar')
}

document.querySelector('#Logout').addEventListener9('click', logout);
document.querySelector('#post-workout').addEventListener('click', delButtonHandler);
document.querySelector('#createPost').addEventListener('click', addPost);