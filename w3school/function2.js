"use strict";

// js strictmode doesn't allow default binding

function add(x, y) {
  return this;
}

console.log(add(2, 3));

let x = this;
console.log(x);

// borrowing a method from another object

const person = {
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Arpan",
  lastName: "Ghosh",
};

const person2 = {
  firstName: "Ayush",
  lastName: "Gupta",
};

console.log(person.fullname.call(person2));

//apply()
const user1 = { name: "Arpan" };
const user2 = { name: "Ayush" };
const user3 = { name: "Debangshu" };

function greet(greeting) {
  return greeting + " " + this.name;
}

console.log(greet.apply(user1, ["Hello"]));

// IIFE --> Immediately Invoked Function Expression

// Function called itself when js engine reads it (compiled it)

// Everything within an IIFE is private to that function

// Variable inside IIFE cannot be access from outside

(() => {
  console.log(2 + 3);
})();

((name) => {
  console.log(name);
})("Virat Kohli");

(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
})(5);
