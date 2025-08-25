//  javascript  for details.html
// It reads the current page's query string (the part after the question mark in the URL).
// window.location.search gives that query string, e.g. "?id=123"
//new URLSearchParams(...) creates a helper object to work with the query parameters.
//.get('id') fetches the value associated with the key id.
// The result is assigned to the constant id.
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

// let generate an endpoint URL for fetching the post details
const renderDetails = async ()=>{
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await res.json();
    // console.log(post); // Log the post details of the selected post

    const template = `<div class="details">
        <h1>${post.title}</h1>
        <p class="likes"><small>${post.likes} likes</small></p>
        <p>${post.body}</p>
    </div>`;
    container.innerHTML = template;


}

window.addEventListener('DOMContentLoaded', () => renderDetails());
