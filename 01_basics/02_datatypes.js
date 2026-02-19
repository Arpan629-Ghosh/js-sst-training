let name = "Arpan";
let age = 21;
let isLoggedIn = true;

// number
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not assigned any value
// symbol => unique

// object

console.log(typeof null);
console.log(typeof undefined);

// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
const bigNumber = 34239844538823110n;
// Non Primitive (Reference type)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
  name: "arpan",
  age: 21,
};

const myFunction = function () {
  console.log("Arpan Ghosh");
};

console.log(typeof bigNumber);

const arr = [20, 40, 50, 60, 70, 80];
const result = arr.filter((temp) => temp > 40 && temp < 70);
console.log(result);
