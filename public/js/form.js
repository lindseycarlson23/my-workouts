const newFormHandler = async (event) => {
    event.preventDefault();
    alert('I am running!');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const type = document.querySelector('#typeOfWorkout');
    const rating = document.querySelector('');
    const video = document.querySelector('#videoLink');

    if(title && description && type && rating && video) {
        const response = await fetch('/api/workout/', {
            method:'POST',
            body: JSON.stringify({title, description, type, rating, video}),
            headers: {
                'content-Type': 'application/json',
            },
        })
        if(response.ok){
            // document.location.replace('/userpage')
        }
    }
}


// document.querySelector('#postButton').addEventListener('submit', newFormHandler);