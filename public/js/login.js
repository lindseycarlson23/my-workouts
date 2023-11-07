//Login form function on Login/Signup page - need to add correct fetch route 
const loginFormHandler = async (event) => {
    event.preventDefault();

    //Get the email/password values from the login form 
    const email = document.querySelector()
    const password = document.querySelector()
//If email and password are filled out 
    if (email && password){
        const response = await fetch('/', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/profile');
        }
    }
}

//Signup function on Login/Signup page - need to add correct fetch route 
const signupFormHandler = async (event) => {
    event.prevant.defualt();

    //Get full name/email/password from signup form 
    const fullName = document.querySelector()
    const email = document.querySelector()
    const password = document.querySelector()
//if full name/email/password are filled out 
    if (fullName && email && password){
        const response = await fetch('/', {
            method:'POST',
            body:JSON.stringify({fullName, email, password}),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/profile')
        }
    }
}

document.querySelector('').addEventListener('submit', loginFormHandler)
document.querySelector('').addEventListener('submit', signupFormHandler)