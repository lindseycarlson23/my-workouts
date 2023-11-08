//Login form function on Login/Signup page - need to add correct fetch route 
const loginFormHandler = async (event) => {
    event.preventDefault();

    //Get the email/password values from the login form 
    const email = document.querySelector('#email-login')
    const password = document.querySelector('#password-login')
//If email and password are filled out 
    if (email && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/userpage');
        }
    }
}

//Signup function on Login/Signup page - need to add correct fetch route 
const signupFormHandler = async (event) => {
    event.prevant.defualt();

    //Get full name/email/password from signup form 
    const fullName = document.querySelector('#name-signup')
    const email = document.querySelector('#email-signup')
    const password = document.querySelector('#password-signup')
//if full name/email/password are filled out 
    if (fullName && email && password){
        const response = await fetch('/api/users', {
            method:'POST',
            body:JSON.stringify({fullName, email, password}),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/userpage')
        }
    }
}

document.querySelector('#mainLogIn').addEventListener('submit', loginFormHandler)
document.querySelector('#signup').addEventListener('submit', signupFormHandler)