//Login form function on Login/Signup page - need to add correct fetch route 
const loginFormHandler = async (event) => {
    event.preventDefault();

    //Get the email/password values from the login form 
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    console.log(email);
    console.log(password);
//If email and password are filled out 
    if (email && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response);
        if (response.ok){
            document.location.replace('/profile');
        }
        
    }
}

//Signup function on Login/Signup page - need to add correct fetch route 
const signupFormHandler = async (event) => {
    event.preventDefault();

    //Get full name/email/password from signup form 
    const name = document.querySelector('#name-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    console.log(email);
    console.log(password);
    console.log(name)
//if full name/email/password are filled out 
    if (name && email && password){
        const response = await fetch('/api/users', {
            method:'POST',
            body:JSON.stringify({name, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok){
            document.location.replace('/profile');
        }
    }
};

document.querySelector('#mainLogIn').addEventListener('submit', loginFormHandler);
document.querySelector('#signup').addEventListener('submit', signupFormHandler);