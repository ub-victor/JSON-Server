// the way of fetching data from the JSON server
// we need to attach an event listener to a window to wait until the dom is fully loaded.

const  container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');
const renderPosts = async(term) =>{
    // Set the API endpoint (JSON Server running locally on port 3000)
    let url = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    /*
    Checks if a search term was provided (not empty).

    If yes → add &q=term to the URL.

    q is a special filter in JSON Server: it searches across all fields (title, body, etc.).

    👉 Example:
    If term = "javascript", the URL becomes:
       http://localhost:3000/posts?_sort=likes&_order=desc&q=javascript
    */
    
    if(term){
        url += `&q=${term}`;
    }

    // Fetch (make an HTTP GET request) to the API endpoint
    const res = await fetch(url);
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

}

searchForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
});

window.addEventListener('DOMContentLoaded', ()=> renderPosts()); 

// lsof -i :3000    kill -9 105101