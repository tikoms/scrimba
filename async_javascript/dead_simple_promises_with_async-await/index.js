/*
async function getBlogPost() {}

getBlogPost().then(() => alert("works as a promise"));
*/

/*
async function getBlogPost() {
    return "works here too!";
}

getBlogPost().then((value) => alert(value));
*/

/*
// traditional way of writing promises
function getBlogPost() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("blog post"), 1000);
    });
    promise.then((value) => alert(value)).finally(() => alert("done"));
}

getBlogPost();
*/

/*
// writing promise using "async" and "await"
async function getBlogPost() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("blog post"), 1000);
    });
    const result = await promise;
    alert(result);
    alert("done");
}

getBlogPost();
*/

/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
*/

/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
*/

async function getBlogPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    alert(data.body);
    alert("done");
}

getBlogPost();