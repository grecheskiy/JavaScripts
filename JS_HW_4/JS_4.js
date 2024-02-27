console.log("task1");
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
let x = 0;
console.log(x, ` - это ноль`); 
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i, ` - четное число`);
    } else if (i % 2 != 0) {
        console.log(i, ` - нечетное число`);
    }   
}

console.log("task2");
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);
arr2.splice(3,2);
console.log(arr2);

console.log("task3");
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const arr3 = [];
for(let i = 0; i < 5; i++) {
   arr3[i] = Math.round(Math.random() * 10);
}
console.log(arr3);
let sum = arr3.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
let result = arr3.filter(x => x === 3);
console.log(result);
console.log(`В массиве имеется число 3, в кол-ве ${result.length} штук`);

console.log("task4");
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов
let str = "x";
console.log(str);
for(let x = 0; x < 20; x++){
console.log(str += "xx");
}