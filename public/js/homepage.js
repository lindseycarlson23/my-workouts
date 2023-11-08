// User profile button - this button will take the user to their profile page with their info
        const userPage = async (event) => {
            event.preventDefault();
            document.location.replace('/userpage')
        }
// Log-in/Sign-up button - this button will take the user to login/signup page
    // Make a function that will take users to the Log-in/sign-up page 
        const loginPage = async (event) => {
            event.preventDefault();
            document.location.replace('/loginpage')
        }
// Intialize the Event Listners
document.querySelector('#USER-btn').addEventListener('click', userPage);
document.querySelector('#login').addEventListener('click', loginPage);

