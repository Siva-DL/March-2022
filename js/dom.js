// console.log(document.children[0].children[0]);
// ID, CLASS, ELEMENT NAME

console.log(document.getElementById("demoId"));
console.log(document.getElementsByClassName("demoClass")[0]);
console.log(document.getElementsByTagName("p")[0]);

// QuerySelector:

console.log("query:", document.querySelector("p"));
console.log("query:", document.querySelectorAll("p"));

// get/set Text

document.querySelector(
  "p"
).innerHTML = `<h1>This is Inside Span Element...</h1>`;

console.log(document.querySelector("p").innerHTML);
