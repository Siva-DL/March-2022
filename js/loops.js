console.log(Users);
var appendUsers = "";
// for, for-in, for-of, while,
console.log("Users Length", Users.length);
for (let i = 0; i < Users.length; i++) {
  console.log(Users[i].name, Users[i].phone);
  appendUsers += "<h1>" + Users[i].name + "</h1>";
}

console.log(appendUsers);

// for-In
console.log("-----------------------------------------------");

for (let j in Users) {
  console.log(Users[j].name, Users[j].phone);
}

// for-Of
console.log("-----------------------------------------------");

for (let user of Users) {
  console.log(user.name, user.phone);
}

// while
console.log("-----------------------------------------------");

let x = 0;
while (x < Users.length) {
  console.log(Users[x].name);
  x++;
}

// forEach
Users.forEach(function (element, index) {
  console.log(element.name, index);
});

// SL.NO NAME, PHONE, ADDRESS
// 1     somex 123-123 someLocation
