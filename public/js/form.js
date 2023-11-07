const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('title input on form handlebar');
    const description = document.querySelector('description input on form handlebar');
    const type = document.querySelector('type input on form handlebar');
    const rating = document.querySelector('rating input on form handlebar');
    const video = document.querySelector('video input on form handlebar');

    if(title && description && type && rating && video) {
        const response = await fetch('/api/workout/', {
            method:'POST',
            body: JSON.stringify({title, description, type, rating, video}),
            headers: {
                'content-Type': 'application/json',
            },
        })
        if(response.ok){
            document.location.replace('/userpage')
        }
    }
}

document.querySelector('form submit button').addEventListener('submit', newFormHandler);