var _name = "12345";

// if, if-else, if-else If-else
//   true

// if (_name !== undefined) {
//   console.log("_name does not have a value..");
// } else {
//   console.log("_name does have a value..");
// }

if (_name !== undefined && _name.length >= 5) {
  console.log("_name does have a value..");
}

if (typeof _name === "string" || typeof _name === "number") {
  console.log("_name is a string or a number");
} else {
  console.log("_name is not a string or a number");
}

var _day = "Monday";

if (_day !== "Monday") {
  console.log("today is Monday..!");
} else if (_day == "Tuesday") {
  console.log("today is Tuesday..!");
} else if (_day == "Tuesday") {
  console.log("today is Tuesday..!");
} else if (_day == "Tuesday") {
  console.log("today is Tuesday..!");
} else {
  console.log("Nothing is matching..!");
}

// switch

var _time = 80;

switch (_time) {
  case 60:
    console.log("the time is 60 sec..!");
    break;
  case 70:
    console.log("the time is 70 sec..!");
    break;
  case 90:
    console.log("the time is 90 sec..!");
    break;
  default:
    console.log("This time should be min 60 sec...!");
}

// ternary Operator
let currentMonth = "April";
let _month =
  currentMonth === "April" ? (true ? true : false) : "no it is not April";

console.log(_month);

// Task

// 1. write a function to return a value of Users
// 2. check for the Ids, if Id is Matching with given value it needs to print the name

// ex: if (id == 1) // Leanne Graham
