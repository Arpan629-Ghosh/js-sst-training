//Function declaration

function myFunction(x, y) {
  return x * y;
}

// Function Expression (Named)

const myFunction3 = function name(x, y) {
  return x * y;
};

// Anonymous Function
const anonymous = function (x, y) {
  return x * y;
};

// Arrow Function

const myFunction1 = (x, y) => x * y;

// FUnction constructor

const myFunction2 = new Function("x", "y", "return x * y");

// Object Method

const obj = {
  myFunction(x, y) {
    return x * y;
  },
};

function multiply(a, b) {
  return arguments.length;
}

console.log(multiply());
console.log(multiply(2, 3));

function addition(a, b) {
  return a + b;
}

let text = addition.toString();
console.log(text);

function something() {
  return this;
}

console.log(something());
