// console.log(this);

demo();
function demo() {
  console.log(this); // window
}

const pets = {
  name: "Cat",
  age: "30days",
};

pets.petDetails = function (color) {
  console.log(`the Pet is ${this.name} the color of the pet is ${color}`);
};

const dog = {
  name: "dog",
  age: "1Yr",
};

pets.petDetails.call(dog, "white");
pets.petDetails.apply(dog, ["white"]);

const copyOfPetDetails = pets.petDetails.bind(dog, "white");

console.log(copyOfPetDetails());

// console.log(dog.petDetails());

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    return `Here@36 ${this.name}`;
  };
}

function Employee(salary) {
  this.salary = salary;
}

const p1 = new Person("x", 30);
const p2 = new Employee(121231);

console.log(p2.getDetails());
