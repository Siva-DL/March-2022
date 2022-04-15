// Single Line Comments
/* mutli Line Comments */

var signInBtn = "button";
var signInBtn = "button";

var userName, age, gender, contact, email;

var _string;

// userName = "somey";
// not with Number
// starts With Alphabets or _ or $;
// camelHope
// CaseSenstive
// avoid reserved Keyword

console.log(userName); // somey

// var userName1;
userName = "somex"; // somex

// somey

// ES6

// let, const

// can change the value once decalred but with in scope
let demo = 123123;
demo = "asdasd";

// can not change the value once decalred
const bgColor = "red";

let page1 = "page1 bg Color " + bgColor;

console.log(page1);

// Data Types
// Primitive Data Types:

// String

var _name = "dummy@gmailc.om";
var _contact = "12312312123";
var _passcode = "_Aaaassd@@#@13123";
var bgColor1 = "red";

// Number

var num1 = 1231231231232;
var num1 = 0.23423;
var num1 = -10.23423;
var num1 = Infinity;
var num1 = NaN;

// Boolean

true;
false;

// null

// null is empty value;

var empTyValue; // undefined
var empTyValue = ""; // empty String
// var empTyValue = null; // empty String

// undefined
// decalred a var but never defined a value
var _declaring; // undefined

// --------------------- ***** typeof ******* -----------------------

console.log(typeof empTyValue); // string
console.log(typeof 10 > 11); // boolean
console.log(typeof 11); // number
console.log(typeof null); // object
console.log(typeof undefined); // object

// --------------------- ***** Operators ******* -----------------------

var num_1 = 10;

console.log(num_1++);
console.log(num_1++);

console.log(num_1--);
console.log(num_1--);

var num_2 = 30;
var num_3 = "Test";

console.log(num_1 + num_2 + num_3); //

// ++, --, +=, -=, *=
// =, ==, ===

var abc = 10;
var user_name = "somex";

user_name = userName + " is my Name";
user_name += " is my Name";

abc = abc - 5;
abc -= 5;
abc *= 5;

console.log(abc); // 20;
console.log(user_name);

// --------------- comparison -----------------------
// =, ==, ===
var a = "test";

// 10 - 10 // true
// number - string // false
console.log(10 == "10"); // true(==) | false if (===)

// NON Primitive Data Types:

// Object - object and Array
// functions
