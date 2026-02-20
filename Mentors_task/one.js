function reverseArray(numbers) {
  const result = numbers.reverse();
  return result;
}

function sortArray(numbers) {
  const result = numbers.sort();
  return result;
}

function demonstrateSliceAndSplice(numbers) {
  const result = {};
  console.log(numbers);
  // result.originalArray = numbers;
  const arraySlice = numbers.slice(1, 3);
  result.sliceOperation = arraySlice;
  result.OriginalArrayAfterSlice = { ...numbers };
  const arraySplice = numbers.splice(1, 3);
  result.spliceOperation = arraySplice;
  result.OriginalArrayAfterSplice = numbers;
  return result;
}

function arrayMap(numbers) {
  const result = numbers.map((twoX) => twoX * 2);
  return result;
}

function arrayFilter(numbers) {
  const result = numbers.filter((greaterFifty) => greaterFifty > 50);
  return result;
}

function arraySum(numbers) {
  const result = numbers.reduce((acc, sum) => (sum += acc), 0);
  return result;
}

function evenCheck(numbers) {
  const allEven = numbers.every((even) => even % 2 == 0);
  const atLeastOneEven = numbers.some((someEven) => someEven % 2 == 0);
  const result = {
    isAllEven: allEven,
    atLeastOneEven: atLeastOneEven,
  };
  return result;
}

function stringOperation(str) {
  const result = str.split(" ").join("-");
  return result;
}

function replaceWord(str) {
  const result = str.replace("Ghosh", "Arpan");
  return result;
}

function cleanString(str) {
  const result = str.trim().toUpperCase();
  return result;
}

function operationOnObject(myObj) {
  const keys = Object.keys(myObj);
  const values = Object.values(myObj);
  const entries = Object.entries(myObj);
  return (newObj = {
    keys: keys,
    values: values,
    entries: entries,
  });
}

function objectDestructuring(myObj) {
  const { name, age } = myObj;
  console.log(name);
  console.log(age);
}

function removeDuplicates(numbers) {
  const noDuplicate = [...new Set(numbers)];
  return noDuplicate;
}
const numbers = [403, 305, 51, 15, 27];
// console.log(reverseArray(numbers));
// console.log(sortArray(numbers));
// console.log(demonstrateSliceAndSplice(numbers));
// console.log(arrayMap(numbers));
// console.log(arrayFilter(numbers));
// console.log(arraySum(numbers));
// console.log(evenCheck(numbers));
const str = "   Arpan Ghosh    ";
// console.log(stringOperation(str));
// console.log(replaceWord(str));
// console.log(cleanString(str));

const myObject = {
  name: "Arpan Ghosh",
  age: 21,
  city: "Kolkata",
};

const myNewObject = {
  name: "Subhayan Mishra",
  age: 22,
  city: "Egra",
};
console.log({ ...myObject, ...myNewObject });
const { name, ...others } = myObject;
console.log(name);
console.log(others);
// console.log(operationOnObject(myObject));
// objectDestructuring(myObject);

const numbersArray = [2, 2, 3, 4, 5, 5];
console.log(removeDuplicates(numbersArray));

// Map

const myMap = new Map();
myMap.set("name", "Arpan Ghosh");
myMap.set("age", 21);

console.log(myMap.get("name"));

//optional chaining
const newObj = {
  name: "Arpan Ghsoh",
  email: "arpan@gmail.com",
  age: 21,
  address: {
    city: "kolkata",
  },
};
console.log(newObj.address?.city);

const user = null;
console.log(user ?? "Arpan");

const randomNumbers = [10, 25, 20, 30, 40];

const result = randomNumbers.find((num) => num > 25);
const ans = randomNumbers.findIndex((num) => num > 25);
console.log(result);
console.log(ans);
