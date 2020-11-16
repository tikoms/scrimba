/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(() => alert("success")).catch(() => alert("failure"));
promise.then((value) => alert(value)).catch(() => alert("failure"));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(Error("Promise failed")), 1000);
});
promise.then((value) => alert(value)).catch((Error) => alert(Error));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(Error("Promise failed")), 1000);
});

promise
    .then((value) => alert(value))
    .catch((Error) => alert(Error))
    .finally(() => alert("done"));
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(reject(Error("Promise failed")), 1000);
});

promise.then((value) => alert("value")).catch(() => alert("failure"));
promise
    .then((value) => alert(value))
    .catch((Error) => alert(Error))
    .finally(() => alert("done"));
*/

const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            resolve(position);
        },
        (error) => {
            reject(error);
        },
    );
});

promise
    .then((position) => alert(position))
    .catch((error) => alert(error))
    .finally(() => alert("done"));