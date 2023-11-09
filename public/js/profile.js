var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBtn = document.getElementById("postButton");
//var modalForm = document.getElementById("modal-form");
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

//click the addPost button to display the form 
const addPost = async (event) => {
    event.preventDefault();
    //document.location.replace('/profile')
}

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});

const postFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const type = document.querySelector('#typeOfWorkout');
    const rating = document.querySelector('#radio');
    const video = document.querySelector('#videoLink');

    if(title && description && type && rating && video) {
        const response = await fetch('/api/workout/', {
            method:'POST',
            body: JSON.stringify({title, description, type, rating, video}),
            headers: {
                'content-Type': 'application/json',
            },
        })

        if(response.ok){
            document.location.replace('/profile')
        }
    }
}

document.querySelector('#Logout').addEventListener('click', logout);
document.querySelector('#post-workout').addEventListener('click', delButtonHandler);
document.querySelector('#modal-form').addEventListener('submit', postFormHandler);
