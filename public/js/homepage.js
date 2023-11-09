// User profile button - this button will take the user to their profile page with their info
        const userPage = async (event) => {
            event.preventDefault();
            document.location.replace('/profile')
        }
// Log-in/Sign-up button - this button will take the user to login/signup page
    // Make a function that will take users to the Log-in/sign-up page 
        const loginPage = async (event) => {
            event.preventDefault();
            document.location.replace('/login')
        }
// Intialize the Event Listners

document.querySelector('#Login').addEventListener('click', loginPage);

