var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBtn = document.getElementById("postButton");

//Logout button that will show from main.handlebars  
const logout = async () => {
    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/')
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

//click the createPost button to display the form 

const showPostForm = async (event) => {
    event.preventDefault();
    document.location.replace('/go to authentication-modal')
}

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
  window.addEventListener("click", async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const type = document.querySelector('#typeOfWorkout');
    const rating = document.querySelector('#radio');
    const videoLink = document.querySelector('#videoLink');

    if (event.target == modal) {
        modal.style.display = "none";
      }

    if (title && description && type && rating && videoLink) {
        const response = await fetch(`/api/workouts`, {
          method: 'POST',
          body: JSON.stringify({ title, description, type, rating, videoLink }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create project');
        }
        console.log(response);
      }
});

document.querySelector('#Logout').addEventListener('click', logout);
document.querySelector('#post-workout').addEventListener('click', delButtonHandler);
document.querySelector('#createPost').addEventListener('click', showPostForm);