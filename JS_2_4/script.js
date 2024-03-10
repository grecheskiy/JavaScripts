// const blockE1 = document.querySelector("div.block");
// const item1 = document.createElement("div");
// item1.setAttribute("class", "item");
// item1.innerText = "Element inside 1";
// blockE1.appendChild(item1);
// item1.setAttribute("class", item1.classList + " item_1");

// const textE1 = document.querySelector("div.elem div.content p.text");
// console.log(textE1.previousElementSibling);
// console.log(textE1.parentElement);
// console.log(document.querySelector("div.elem img"));
// console.log(document.querySelector("div.elem img").parentElement.parentElement);

// const h2E1 = document.querySelector("h2.subtitle");
// let curE1 = h2E1;
// while (curE1.parentNode != null) {
//     curE1 = curE1.parentNode;
//     console.log(curE1);
// }

const inputE1 = document.querySelector("form input");
const btnE1 = document.querySelector("form button.btn");
btnE1.addEventListener("click", () => {
    if (inputE1.value === "") {
      const h2E1 = document.querySelector("h2");
      h2E1.innerHTML = "Please enter something!";
      h2E1.style.border = "1px solid red";
      inputE1.parentElement.appendChild(h2E1);  
    }
});