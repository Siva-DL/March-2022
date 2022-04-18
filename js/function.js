// console.log(demo());
console.log(demo() + " has completed 50 centuires");
function demo() {
  // code Here
  console.log("Demo Fucntion is called! with 10 + 10");
  return "MS DHONI";
}
// alert();

// calling a function, invoking a function,
// console.log(demo());

// function Expression
// getName();
const getName = function () {
  console.log("function Expression");
};

getName();

// Arrow Function...
const getDate = () => {
  console.log("Arrow function Called!");
};

getDate();

// IIFE

(function () {
  console.log("IIFE is CALLED....!");
  return "This is IIFE Returned";
})();
