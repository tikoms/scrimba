const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

// alert(promise);

// promise.then(() => alert("success")).catch(() => alert("failure"));
promise.then((value) => alert(value)).catch(() => alert("failure"));