/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
});

alert("done");
*/

/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
    alert("done");
});
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

alert(promise);
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(() => alert("success")).catch(() => alert("failure"));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

promise.then((value) => alert(value)).catch(() => alert("failure"));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 1000);
});

promise.then(() => alert("success")).catch(() => alert("failure"));
*/

/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
});

alert("done");
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(() => alert("Success")).catch(() => alert("failure"));
promise.then((value) => alert(value)).catch(() => alert("failure"));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(Error("Promise failed")), 1000);
});

promise.then((value) => alert(value)).catch(() => alert("failure"));
promise.then((value) => alert(value)).catch((Error) => alert(Error));
promise
    .then((value) => alert(value))
    .catch((Error) => alert(Error))
    .finally(() => alert("done"));
*/

/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
});
*/

/*
const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            resolve(position);
        },
        (Error) => {
            reject(Error);
        },
    );
});

promise
    .then((value) => alert(value))
    .catch((Error) => alert(Error))
    .finally(() => alert("done"));
*/

const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((resolve, reject));
});

promise
    .then((value) => alert(value))
    .catch((Error) => alert(Error))
    .finally(() => alert("done"));