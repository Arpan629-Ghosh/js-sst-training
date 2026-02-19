const fruits = ["Banana", "Apple", "Grapes", "Coconut", "Guava"];

console.log(fruits.sort());
console.log(typeof fruits);
Array.isArray(fruits);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

let x = "";
for (let i in myObj.cars) {
  x += myObj.cars[i].name + " ";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + " ";
  }
}
console.log(x);

// Properties
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(2));
console.log(fruits.join(" * "));
console.log(fruits.pop());
fruits.push("Kiwi");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Lemon"));
console.log(fruits);
console.log(Array.isArray(fruits));

//concat
const flower = ["Sunflower", "Rose", "Lili"];
console.log([...fruits, ...flower]);
console.log(fruits.concat(flower));

//Merging three arrays
const animals = ["Dog", "Cat", "Lion"];
console.log(fruits.concat(flower, animals));
console.log(fruits.concat("Watermillon"));
animals.copyWithin(1, 0);
console.log(animals);

//Flattening

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());
console.log(animals.indexOf("Cat"));
console.log(animals.includes("Cat"));

const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast((x) => x > 40));
