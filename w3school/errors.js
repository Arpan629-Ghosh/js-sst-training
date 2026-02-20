// Reference Error
let x = 5;

try {
  x = y + 1;
} catch (error) {
  let text = error.name;
  console.log(text);
}

// Type Error
try {
  Anna(5);
} catch (error) {
  let text = error.name;
  console.log(text);
}

let num = 1;
try {
  num.toUpperCase();
} catch (error) {
  let text = error.name;
  console.log(text);
}

// Range Errors

try {
  new Array(-1);
} catch (error) {
  let text = error.name;
  console.log(text);
}

let number = 1;

try {
  number.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
  let text = err.name;
  console.log(text);
}

// URI errors
try {
  decodeURI("%%%");
} catch (error) {
  console.log(error.name);
}

// syntax errors are not catchable
