const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person.name());
console.log(person.fullName());

console.log(person.age);
// console.log(person["firstName"]);
console.log(person.firstName);
delete person.age;
console.log(person.age);

// check if a property exist
let result = "age" in person;
console.log(result);

myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars.car2);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car2"]);
let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2]);
myObj["myCars"]["car2"] = "Thar";
console.log(myObj["myCars"]["car2"]);

// properties collection using loop

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);
console.log(Object.keys(person));

const fruits = {
  Bananas: 300,
  Oranges: 200,
  Apples: 500,
};

let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text1 += fruit + ": " + value;
}
console.log(text1);

console.log(JSON.stringify(person));

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
myFather.nationality = "English";

//Adding a Method to an Object

myMother.changeName = function (name) {
  this.lastName = name;
};
