/*
let age = prompt("Enter your age: ");
console.log("Age: " + age);
let name = prompt("Enter your name: ");
console.log("Name: " + name);
console.log(age, name);
*/
/*
let a = '2.5';
let b = '3';
console.log(Number(a) + Number(b));
console.log(+a + (+b));
console.log(parseInt(a) + parseInt(b));
*/
/*
let a = prompt("a = ");
let b = prompt("b = ");
console.log(Number(a) + Number(b));
console.log(Number(a) - Number(b));
console.log(Number(a) * Number(b));
console.log(Number(a) / Number(b));
console.log(Number(a) % Number(b));
*/
/*
let num = Number(prompt("Enter number: "));
console.log(num);
    if (typeof num === 'number' && !isNaN(num)) {
    if (num > 5) {
        console.log(num);
        } else {
            console.log("Number less than or equal to 5 ");
        }
    } else {
        console.log("is not number!");
    } 
*/

let test1 = prompt("Enter test1: ");
let test2 = prompt("Enter test2: ");
if (test1 === test2) {
    console.log('values are equal');
}
let test3 = Number(prompt("Enter test3: "));
let test4 = Number(prompt("Enter test4: "));
if (test3 > test4) {
    console.log(test3);
} else {
    console.log(test4);
}