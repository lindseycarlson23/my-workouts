//Logout button that will show from main.handlebars  
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