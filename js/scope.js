// Scope: Global and Local

var demo = 123; // global
// var demo123;
function demoFn() {
  demo123 = 234; // local
  console.log(demo123);
}

demoFn();

console.log(demo123);

// let and const;

let abc = 10;

{
}

function demoLet() {
  let abcd = 101;
  console.log(abcd);
}

demoLet();
