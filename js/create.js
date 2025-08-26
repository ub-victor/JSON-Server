const form = document.querySelector('form');
const createPost = async (e) =>{
    e.preventDefault();
    // You can add your submission logic here (e.g., fetch to your API)
    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    // Sends an HTTP request and waits for the response.
    // the endpoint to create a new post.
    await fetch('http://localhost:3000/posts',{
        //The HTTP method to use for the request.
        method: 'POST',// creates a new resource.
        // (recommended) tell the server you’re sending JSON or Indicates the format of the request body
        headers: { 
            'Content-Type': 'application/json'
        }, 
        //The payload (the data) sent with the request.
        body: JSON.stringify(doc)// sends the doc object as a JSON string.
        
    })
    /*Action: Replaces the current page in the session history with /index.html.
        Effect: User cannot go back to the form page using the back button (use with intention). */
    window.location.replace('/index.html');
}

form.addEventListener('submit', createPost)