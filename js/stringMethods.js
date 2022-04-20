// slice, substring, replace

// indexOf, lastIndexOf, search,

// toUpperCase, tolowerCase, split, trim, join

var str =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, amet!";

console.log(str.length);
console.log(str.indexOf("amet", 23)); // 22/64 +ve index | -1
console.log(str.lastIndexOf("amet", 63)); // 64/22 +ve index | -1
console.log(str.search("amet")); // 22 +ve index | -1

// slice Out/ take out
// 20 + 11;
let dolor = str.slice(
  str.indexOf("adipisicing"),
  str.indexOf("adipisicing") + "adipisicing".length
);
console.log(dolor);

let adipisicing = str.substring(
  str.indexOf("adipisicing"),
  str.indexOf("adipisicing") + "adipisicing".length
);
console.log(adipisicing);

// replace

let newStr = str.replace("dolor", "pound");

console.log(newStr);

// split

var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
];

// JSON.parse();
// JSON.stringify();
var userString =
  '[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}}}#{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}}}]';
console.log(userString.split("#"));

console.log(users.join("-"));

console.log(JSON.stringify(users));

var str1 = "TestData";
console.log(str1.split(""));

// trim
var extraSpace = "                     demo                    ";
console.log(extraSpace);
console.log(extraSpace.trim());

// toUpperCase(), toLowerCase()

var userName = "Leanne Graham";

userName.toUpperCase();
userName.toLowerCase();
