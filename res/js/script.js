document.addEventListener("DOMContentLoaded", function () {
    const binId = "67238323acd3cb34a8a01d2c";
    const masterKey = "$2a$10$0LLmrO5RfjHiIskzW.pqtOUIUTtPR5/0UbdfWCAXyf4QK1PSU10tG";

    /*
    fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        method: "GET",
        headers: {
            "X-Master-Key": masterKey,
            "Content-Type": "application/json"
        }
    })
    */
    fetch('./data/posts.json')

        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {

            const posts = data;
            // const posts = data.record;
            displayPosts(posts);
        })
        .catch(error => console.error("Failed to load posts:", error));
});

function displayPosts(posts) {
    const postsSection = document.querySelector(".posts-section");

    posts.forEach(post => {
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        const postHTML = `
            <article class="post">
                <div class="post-header">
                    <span class="post-user">${post.author}</span>
                    <span class="post-date">${formattedDate}</span>
                </div>
                ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ""}
                <p class="post-content">${post.content}</p>
                <div class="post-footer">
                    <button class="like-button">Like ❤️</button>
                </div>
            </article>
        `;
        postsSection.innerHTML += postHTML;
    });
}