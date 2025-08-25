// the way of fetching data from the JSON server
// we need to attach an event listener to a window to wait until the dom is fully loaded.

const  container = document.querySelector('.blogs');
const renderPosts = async() =>{
    // Set the API endpoint (JSON Server running locally on port 3000)
    let uri = 'http://localhost:3000/posts';

    // Fetch (make an HTTP GET request) to the API endpoint
    const res = await fetch(uri);
    const posts = await res.json(); 
    
    let template = '';
    posts.forEach(post => {
        template += `
        <div class = "post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0,150)}...</p>
        <a href="/details.html?id=${post.id}">Read more</a>
        </div>
        `;
    });

    container.innerHTML = template;

};

window.addEventListener('DOMContentLoaded', ()=> renderPosts()); 