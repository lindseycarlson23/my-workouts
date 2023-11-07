// use express session to take user to their profile page with all their info when user profile button is clicked
   
// Log-in/Sign-up button - this button will take the user to login/signup page
    // Make a function that will take users to the Log-in/sign-up page 
        const loginPage = async (event) => {
            event.preventDefault();
            document.location.replace('/loginPage')
        }
// Intialize the Event Listner when user click the login page button on the start page
document.querySelector('Login/Signup button').addEventListener('click', loginPage);

