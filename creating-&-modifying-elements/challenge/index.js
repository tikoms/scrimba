const heading = document.querySelector("h1");
heading.innerText = "Creating and Modifying HTML Elements";

const subHeading = document.createElement("h2");
subHeading.className = "tagline";
subHeading.innerText = "I can create HTML elements";

document.body.append(subHeading);