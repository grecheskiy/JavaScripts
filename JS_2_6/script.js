document.addEventListener('DOMContentLoaded', function () {
//     console.log("window.onload");
     const divContainer = document.querySelector('div.container');
//     const btnE1 = document.createElement('button');
//     divContainer.appendChild(btnE1);
//     btnE1.innerHTML = "Button";
//     btnE1.onclick = () => console.log("btnE1.onclick");
//     btnE1.addEventListener('click', function (e) {
//         console.log("btnE1.addEventListener('click')");
//     });
    //  const btnE1 = document.createElement("button");
    //  const btnE2 = document.createElement("button");
    //  const btnE3 = document.createElement("button");
    //  btnE1.innerHTML = "Button 1";
    //  btnE2.innerHTML = "Button 2";
    //  btnE3.innerHTML = "Button 3";
    //  divContainer.appendChild(btnE1);
    //  divContainer.appendChild(btnE2);
    // divContainer.appendChild(btnE3);
    // let clickfunc = function (e) {
    //     console.log(e.target.innerHTML);
    // };
    // btnE1.addEventListener('click', clickfunc);
    // btnE2.addEventListener('click', clickfunc);
    // btnE3.addEventListener('click', clickfunc);
    // const btnE4 = document.createElement("button");
    // btnE4.innerHTML = "Button 4";
    // divContainer.appendChild(btnE4);
    // let count = 0;
    // btnE4.addEventListener('click', function (e) {
    //     count++;
    //     console.log(`counter = ${count}`);
    // });
    // const btnE5 = document.createElement("button");
    // btnE5.innerHTML = "Button 5";
    // divContainer.appendChild(btnE5);
    // btnE5.addEventListener('click', function (e) {
    //     e.target.innerHTML = "Button 5 clicked";
    // });
    // const btnE6 = document.createElement("button");
    // const btnE7 = document.createElement("button");    
    // btnE6.innerHTML = "Button 6";
    // btnE7.innerHTML = "Button 7";
    // divContainer.appendChild(btnE6);
    // divContainer.appendChild(btnE7);
    // btnE6.addEventListener('click', function (e) {
    //     const title1 = document.createElement("h1");
    //     title1.innerHTML = "Title 1";
    //     divContainer.appendChild(title1);
    // });
    // btnE7.addEventListener('click', function (e) {
    //     const titles = document.querySelectorAll("h1");
    //     if (titles.length > 0) {
    //         titles[titles.length - 1].remove();
    //     }
    // });
    // const btnE8 = document.createElement("button");
    // btnE8.innerHTML = "Button 8";
    // divContainer.appendChild(btnE8);
    // btnE8.addEventListener('mouseover', function (e) {
    //     console.log("btnE8.addEventListener('mouseover')");
    // });
    // btnE8.addEventListener('mouseout', function (e) {
    //     console.log("btnE8.addEventListener('mouseleave')");
    // });
    const btnE9 = document.createElement("button");
    divContainer.appendChild(btnE9);
    btnE9.innerHTML = "add li";
    const ulE1 = document.querySelector("ul");
    btnE9.addEventListener('click', function (e) {
        const liE1 = document.createElement("li");
        liE1.innerHTML = "New item list";
        ulE1.appendChild(liE1);
    });
    const btnDel = document.createElement("button");
    divContainer.appendChild(btnDel);
    btnDel.innerHTML = "delete li";
    btnDel.addEventListener('click', function (e) {
        const liE1 = ulE1.querySelectorAll("li");
        if (liE1.length > 0) {
            liE1[0].remove();
        }
    });
    const btnE10 = document.createElement("button");
    divContainer.appendChild(btnE10);
    btnE10.innerHTML = "add class";
    btnE10.addEventListener('click', function (e) {
        e.target.classList.add("click");
    });
});

