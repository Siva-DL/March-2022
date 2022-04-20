// string Based Number into number
// parseInt, parseFloatm toFixed,

var num1 = "100.123";

console.log(+num1 + 100);

console.log(parseInt(num1) + 10);
console.log(parseFloat(num1) + 10);

let sumVal = parseFloat(num1) + 10;

console.log(sumVal.toFixed(2));

// Math.random, Math.ceil, Math.floor, Math.round;

var m_num = 10.00001; // 11
console.log(Math.round(m_num)); // 11

console.log(Math.floor(m_num)); // 10

console.log(Math.ceil(m_num)); // 11

// 0-9
var arr = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
];
// console.log(Math.floor(Math.random() * 10));
var randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
console.log(arr[randomNum]);

// 1- 10
console.log(Math.ceil(Math.random() * 10));

console.log(Math.random() * 10);

// Task:

// Dice1: 1 - 6 (random)
// Dice2: 1 - 6 (random)

// sum of Both Dice:
