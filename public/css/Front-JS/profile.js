//Logout button on profile page 
const logout = async () => {
    const response = await fetch ('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.locaion.replace('/mainpage')
    }
}
//Delete button for deleting posts 
const delButtonHandler = async (event) => {
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id'); // need to assign data-id="{{post.id}} to the post delete button

        const response = await fetch(`delete workout post route ${id}`, {
            method:'DELETE',
        });

        if (response.ok){
            document.location.replace('/profile')
        }
    }
}

const addPost = async (event) => {

}

document.querySelector('').addEventListener9('click', logout);
document.querySelector('').addEventListener('click', delButtonHandler);