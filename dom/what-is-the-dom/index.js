/*  
What can we do with the DOM?
    - Dynamically add static html
*/

const p = document.createElement("p");
p.innerText = "Hello world!";
document.body.append(p);

document.body.style.background = "palegoldenrod";
p.style.color = "#05f";

/*  
Aside from getting or changing static html or CSS, we can also add
javaScript to the page.
*/

p.addEventListener("click", () => alert("clicked"));