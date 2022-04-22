const arr = [1, 2];
arr[2] = 3;

console.log(arr); //[(1, 2, 3)];

//  Add values arrays : push, unshift
const basket = ["apple"];

basket.unshift("banana");
basket.unshift("banana1");
basket.unshift("banana2");

basket.push("Orange");
basket.push("Orange1");
basket.push("Orange2");

console.log(basket);

// remove Array Values: pop(), shift(), delete, splice, slice(same as string);

basket.pop();
basket.shift();
delete basket[0]; // x
console.log(basket);
basket.splice(0, 2); // Deleting

const slicedVal = basket.slice(1, 3);
console.log(slicedVal);
console.log(basket);
basket.splice(1, 1, "apple1", "Orange"); // replacing

console.log(basket);

// locate a value from an arr: indexof/lastIndexOf, includes

console.log(basket.includes("Orange11"));

if (basket.includes("Kiwi")) {
  console.log("Kiwi is there in basket");
} else {
  basket.push("Kiwi");
}

console.log(basket);

//

var a = [1];

var b = [2];

var c = a.concat(b);
console.log(c);

var str = "demo | demo1 | demo2";
var splitVal = str.split("|");

console.log(splitVal.join("#"));
