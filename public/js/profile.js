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

//click the createPost button to display the form 

// const showPostForm = async (event) => {
//     event.preventDefault();
//     document.location.replace('/go to authentication-modal')
// }

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
//   modalForm.addEventListener("submit", async (event) => {
//     event.preventDefault();
//      console.log(event);
    
//      const title = document.querySelector('#title');
//      const description = document.querySelector('#description');
//      const type = document.querySelector('#typeOfWorkout');
//      const rating = document.querySelector('#radio');
//      const videoLink = document.querySelector('#videoLink');

//      if (title && description && type && rating && videoLink) {
//         const response = await fetch(`/api/workouts`, {
//           method: 'POST',
//           body: JSON.stringify({ title, description, type, rating, videoLink }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
    
//         if (response.ok) {
//           document.location.replace('/profile');
//         } else {
//           alert('Failed to create project');
//         }
//       }
// });

const modalFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const type = document.querySelector('#typeOfWorkout').value;
    const rating = document.querySelector('#radio').value;
    const videoLink = document.querySelector('#videoLink').value;

    if (title && description && type && rating && videoLink) {
       const response = await fetch(`/profile`, {
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
     }
    
  };



 


document.querySelector('#Logout').addEventListener('click', logout);
document.querySelector('#post-workout').addEventListener('click', delButtonHandler);
//document.querySelector('#modal-form').addEventListener('submit', modalFormHandler);