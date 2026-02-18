function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

reverseString("javascript");

// using loop
function reverseStringLoop(str1) {
  let result = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    result += str1[i];
  }
  return result;
}

console.log(reverseStringLoop("javascript"));
