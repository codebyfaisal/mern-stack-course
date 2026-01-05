import getData from "./axios.js";

getData().then((data) => {
    const posts = data.map((post) => {
        return `
            <div class="post">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
    });

    document.querySelector('#app').innerHTML = posts.join('');
})
