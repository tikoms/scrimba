/*
alert(fetch("https://jsonplaceholder.typicode.com/posts/1")).then((response) =>
    alert(response),
);
*/

/*
// GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => alert(data.title));
*/

/*
// POST request
const blogPost = {
    title: "Cool Post",
    body: "lkajsdflkjasjlfda",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
    })
    .then((response) => response.json())
    .then((data) => alert(data.id));
*/

/*
// Cathcing errors
fetch("https://jsonplaceholder.typicode.com/pots/1")
    .then((response) => response.json())
    .then((data) => alert(data.title))
    .catch((Error) => alert(Error));


fetch("https://jsonplaceholder.typicode.com/pots/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
    })
    .then((data) => alert(data))
    .catch((Error) => alert(Error));
*/

/*
fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => response.json())
    .then((data) => {
        alert(data.name);
        alert(data.company.name);
    });
*/

fetch("https://jsonplaceholder.typicode.com/user/3")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
    })
    .then((data) => {
        alert(data.name);
        alert(data.company.name);
    })
    .catch((error) => alert(error));