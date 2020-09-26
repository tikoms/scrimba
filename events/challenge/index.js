const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", (event) => {
    alert(mainHeading.innerText);
});

const subHeading1 = document.querySelector("h2");

subHeading1.addEventListener("click", (event) => {
    alert(subHeading1.innerText);
});

const subHeading3 = document.querySelector("h3");

subHeading3.addEventListener("click", (event) => {
    alert(subHeading3.innerText);
});

mainHeading.addEventListener("mouseover", (event) => {
    alert(mainHeading.innerText);
});

subHeading1.addEventListener("mouseover", (event) => {
    alert(subHeading1.innerText);
});

subHeading3.addEventListener("mouseover", (event) => {
    // alert(subHeading3.innerText);
    alert(event.target.textContent);
});