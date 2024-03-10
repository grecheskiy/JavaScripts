const container = document.querySelector('div.container');
// const checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// checkbox.id = 'agreement';
// const label = document.createElement('label');
// label.innerHTML = 'Agree with it!';
// label.for = 'agreement';
// container.appendChild(checkbox);
// container.appendChild(label);
// const btbE1 = document.createElement('button');
// btbE1.innerHTML = 'Sent';
// container.appendChild(btbE1);
// btbE1.addEventListener('click', function (e) {
//     if (!checkbox.checked) {
//         const textE1 = document.createElement('p');
//         textE1.textContent = 'You must agree!';
//         container.appendChild(textE1);
//     }
// });
// const radioE1 = document.createElement('input');
// radioE1.type = 'radio';
// radioE1.id = 'radio_1';
// radioE1.name = 'drink';
// const labelE1 = document.createElement('label');
// labelE1.innerHTML = 'tea';
// labelE1.for = 'tea';
// const radioE2 = document.createElement('input');
// radioE2.type = 'radio';
// radioE2.id = 'radio_2';
// radioE2.name = 'drink';
// const labelE2 = document.createElement('label');
// labelE2.innerHTML = 'coffe';
// labelE2.for = 'coffe';
// container.appendChild(radioE1);
// container.appendChild(labelE1);
// container.appendChild(radioE2);
// container.appendChild(labelE2);
// btbE1.addEventListener('click', function (e) {
//     const textE1 = document.createElement('p');
//     if (radioE1.checked) {
//         textE1.textContent = 'tea has finished';
//         container.appendChild(textE1);
//     } else if (radioE2.checked) {
//         textE1.textContent = 'coffe has finished';
//         container.appendChild(textE1);
//     }
// });
// const inputE1 = document.createElement('input');
// inputE1.type = 'text';
// const btnE3 = document.createElement('button');
// btnE3.innerHTML = 'Sent';
// container.appendChild(inputE1);
// container.appendChild(btnE3);
// btnE3.addEventListener('click', function (e) {
//     if (inputE1.value.toLocaleLowerCase() === 'password') {
//         inputE1.classList.remove('red-board');
//         inputE1.classList.add('green-board');
//     } else {
//         inputE1.classList.remove('green-board');
//         inputE1.classList.add('red-board');
//     }
// });
const inputE2 = document.createElement('input');
inputE2.type = 'text';
container.appendChild(inputE2);
const titleE2 = document.createElement('h1');
titleE2.innerHTML = 'Title';
container.appendChild(titleE2);
// inputE2.addEventListener('change', function (e) {
//     titleE2.innerHTML = e.target.value;
// });
inputE2.addEventListener('input', function (e) {
    titleE2.innerHTML = e.target.value;
});