const newPost = document.createElement("div");
newPost.className = "top-post";
newPost.innerHTML = "<strong>This is a new post</strong>";

const post = document.querySelector(".post");
post.prepend(newPost);
// console.log(post);

// document.body.prepend(newPost);