/*
let weeks = {
    "1" : "Monday",
    "2" : "Tuesday",
    "3" : "Wednesday",
    "4" : "Thursday",
    "5" : "Friday",
    "6" : "Saturday",
    "7" : "Sunday"
};

console.log(weeks, weeks["2"]);
// ---------------------------------------------------------------------------------
let user = {
    name: 'Max',
    surname: 'Greek',
    age: '25'
};

user.fatherName = prompt('Enter father name: ');

console.log(user.name + '-' + user.surname + '-' + user.age + '-' + user.fatherName);

delete user.surname;

console.log(user);

const arr1 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];   
}

console.log(obj);
// ------------------------------------------------------------------------------------
const obj2 = {x: 1, y: 2, z: 3};
//for (const key in obj2) {
//    obj2[key] = obj2[key] * obj2[key];
//}
//for (let [key, value] of Object.entries(obj2)) {
//    obj2[key] = value * value;
//    console.log(key, value);
//}
for (let key of Object.keys(obj2)) {
    obj2[key] = obj2[key] * obj2[key];
}

console.log(obj2);
// ------------------------------------------------------------------------------------
const obj3 = {
    key1:{
        key1:1,
        key2:2,
        key3:3,
    },
    key2:{
        key1:4,
        key2:5,
        key3:6,
    },
    key3:{
        key1:7,
        key2:8,
        key3:9,
    },
};

let sum = 0;
for (let [key, value] of Object.entries(obj3)) {
    for (let [key1, value1] of Object.entries(value)) {
        sum = sum + value1;
    }
}
console.log(sum);
*/
// ----------------------------------------------------------------------------------------
let riddles = {
    question: "How are your name?",
    answer: "Max",
    tries: 0,
    askQuestion: function (str = '') {
        let possibleAnswer = prompt(str + ' ' + this.question);
        if (possibleAnswer === this.answer) {
            alert('Correct');
        } else {
            alert('Incorrect');
            this.tries++;
            if (this.tries <= 3) {
                this.askQuestion('Try else one');
            }
        }
    }
};

riddles.askQuestion();