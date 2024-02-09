const listMan = function(firstName, lastName, age) {
    return 'Hi ${firstName} ${lastName} with age ${age}';
}
console.log(listMan("Max", "G", 35));
// -------------------------------------------------------------
let numMinMax = function(num11, num12) {
    if (num11 > num12) {
        return '${num12} - minimal'
    } else return '${num11} - minimal'
}
console.log(numMinMax(2, 3));
// -------------------------------------------------------------
let helloGetup = nameHello => {
    let result = null;
    let time = new Date().getHours();
    if (time < 10 && time > 6) {
        result = 'Good morning ${nameHello}';
    } else if (time < 18 && time > 9) {
        result = 'Good afternoon ${nameHello}';
    } else if (time < 23 && time > 17) {
        result = 'Good evening ${nameHello}';
    } else result = 'Good night ${nameHello}, go to sleep!';
    return result;
}
console.log(helloGetup("Nastya"));
// -------------------------------------------------------------
function abc(senton) {
    t1 = senton = senton * 2;
    return 'test ${t1}' 
}
console.log(abc(3));
/*
const pow = x => x*x;
console.log(pow(5));
//const posOrNeg = num => console.log(num >= 0 ? '+++' : '---');
const posOrNeg = num => {
    let result = num >= 0 ? '+++' : '---';
    console.log(result);
}
posOrNeg(123);
posOrNeg(-123);
// -------------------------------------------------------------
const funcSum = function(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(funcSum(1, 2, 3));
// -------------------------------------------------------------
let param1 = 1;
let param2 = 2;
let param3 = 3;
console.log(funcSum(param1, param2, param3));
// -------------------------------------------------------------
function func(sum) {
    console.log(sum);
}
func(2);
func(3);
func();
// -------------------------------------------------------------
const funcSqrt = function (number) {
    if (number >= 0) {
        let numSqrt = Math.sqrt(number);
        return numSqrt
    } else throw new Error('it is not correct number')
}
console.log(funcSqrt(3));
//console.log(funcSqrt(-5));
let sumSqrt = funcSqrt(3) + funcSqrt(4);
console.log(sumSqrt);
// -------------------------------------------------------------
let week = numWeek => {
    let result = null;
    switch (numWeek) {
        case 1:
            result = "Monday"
            break;
        case 2:
            result = "Tuesday"
            break;
        case 3:
            result = "Wednesday"
            break;
        case 4:
            result = "Thursday"
            break;
        case 5:
            result = "Friday"
            break;
        case 6:
            result = "Saturday"
            break;
        case 7:
            result = "Sunday"
            break;
        default:
            result = "It's not such a day of week"
            break;
    }
    return result;
}
console.log(week(2));
console.log(week(5));
console.log(week(8));
// -------------------------------------------------------------
*/