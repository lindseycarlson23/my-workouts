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

//click the addPost button to display the form 
const addPost = async (event) => {
    event.preventDefault();
    document.location.replace('/form handlebar')
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

document.querySelector('#Logout').addEventListener('click', logout);
document.querySelector('#post-workout').addEventListener('click', delButtonHandler);
document.querySelector('#open-btn').addEventListener('click', addPost);