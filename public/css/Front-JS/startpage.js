// User button - this button will take users to their profile
    // Make a function that will show the user's profile page when button is clicked 
        const showProfile = async (event) => {
            if(event.target.hasAttribute('data-id')){
                const id = event.target.getAttribute('data-id');  // The User botton on the HTML needs data-id assigned
                const response = await fetch (`/profile/${id}`, { // Need a home route /profile/:id that is a GET request that gets the user's profile 
                    method: 'GET', 
                });
            // If the the above getch request is completed it will return to the profile page and it should have the user's information 
                if (response.ok) { 
                    document.location.replace(`/profile`);
                }
            }
        };
        
    // Intialize the Event Listner when user click the user page button on the start page
        document.querySelector('userButton').addEventListener('click', showProfile);

// Log-=in/Create Account button - this button will take the user to login/signup page
    // Make a function that will show the profile page when button is clicked 
        const userPage = async (event) => {
            event.preventDefault();
            document.location.replace('/')
        }

