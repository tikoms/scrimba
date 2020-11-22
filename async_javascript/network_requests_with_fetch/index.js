/*
alert(fetch("https://jsonplaceholder.typicode.com/posts/1")).then((response) =>
    alert(response)
);
*/

/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => alert(data.userId));
*/

/*
const blogPost = {
    title: "Cool post",
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
fetch("https://jsonplaceholder.typicode.com/pots/1")
    .then((response) => response.json())
    .then((data) => alert(data));
*/

fetch("https://jsonplaceholder.typicode.com/pots/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
    })
    .then((data) => alert(data))
    .catch((Error) => alert(Error));