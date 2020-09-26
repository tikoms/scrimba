const post = document.querySelector(".post");
post.style.background = "orange";
console.log(post.className);

// post.classList.remove("post");
// post.classList.add("post");

post.classList.toggle("post");
post.classList.add("post");