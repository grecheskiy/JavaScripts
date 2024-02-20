console.log("task1");
const arr1 = [1, 2, 3];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

console.log("task2");
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.length);

console.log("task3");
const arr3 = ['a', 'b', 'c'];
arr3[0] = 1;
arr3[1] = -2;
arr3[2] = -3;
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);

console.log("task4");
const arr4 = [1, 2, 3];
for (let i = 0; i < arr4.length; i++) {
    arr4[i]++;    
}
console.log(arr4);

console.log("task5");
const arr5 = [];
arr5[3] = 'a';
arr5[8] = 'b';
console.log(arr5.length);
console.log(arr5);

console.log("task6");
const arr6 = [1, 2, 3];
arr6.push(4);
arr6.push(5);
console.log(arr6);

console.log("task7");
const arr7 = [1, 2, 3, 4, 5, 6, 7];
arr7.pop();
arr7.pop();
console.log(arr7.length);

console.log("task8");
//for (let i = 11; i <= 33; i++) {
//    console.log(i);
//}

console.log("task9");
//for (let i = 1; i <= 99; i += 2) {
//    console.log(i)
//}
    
console.log("task10");
//for (let i = 100; i >= 0; i--) {
//    console.log(i);
//}

console.log("task11");
let num = 4;
let count = 0;
while (num < 1000) {
    console.log(num);
    num *= 3;
    count++;
}
console.log("count = ", count);
console.log("num= ", num);

console.log("task12");
const arr12 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr12.length; i++) {
    arr12[i] > 3 && arr12[i] < 10 ? console.log(arr12[i]) : null;
}

console.log("task13");
let sum = 0;
for(let i = 2; i <= 100; i+=2) {
    sum += i;
}
console.log(sum);

console.log("task14");
const arr14 = [2, 5, 9, 3, 1, 4];
console.log(arr14.reduce((acc,cur) => (
    acc + cur
),0))

console.log("task15");
let str = '-';
for (let i = 1; i <= 9; i++) {
    str += `${i}-`
}
console.log(str);

console.log("task16");
const arr16 = [2, 5, 9, 0, 3, 1, 4];
let i = 0;
while (arr16[i] !== 0 && i < arr16.length) {
    i++;
}
console.log(i);

console.log("task17");
const arr17 = [];
for(let i = 0; i < 10; i++) {
    arr17[i] = Math.floor(Math.random() * 10);
    if (arr17[i] % 2 === 0) {
        console.log(`${arr17[i]}^2`, Math.pow(arr17[i], 2));
    } else if (arr17[i] % 3 === 0) {
        console.log(`${arr17[i]}^3`, Math.pow(arr17[i], 3));
    } else {
        console.log(`${arr17[i]} = `, arr17[i]);
    }
}
console.log(arr17);

console.log("task18");
const arr18 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count2 = 0;
let result = arr18.filter(x => x === 3);
console.log(result.length);
console.log(result);

console.log("task19");
const arr19 = [1, 2, 3, 4, 5];
arr19.splice(1,2);
console.log(arr19);
