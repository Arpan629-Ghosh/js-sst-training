function operationArray(numbers) {
  return numbers.filter((num) => num > 10).map((twox) => twox * 2);
}

function reverseString(str) {
  return str.trim().split("").reverse().join("");
}

function sortArrayOfObject(data) {
  return data.sort((a, b) => b.score - a.score);
}

function wordCount(data) {
  const result = {};
  const word = data.trim().split(/\s+/);
  word.forEach((word) => {
    result[word] = (result[word] || 0) + 1;
  });
  return result;
}

function palindromeCheck(str) {
  const original = str.trim().toLowerCase();
  const reverse = original.trim().split("").reverse().join("");
  console.log(original);
  console.log(reverse);
  console.log(str);
  if (original === reverse) console.log("Palindrome");
  else console.log("Not Palindrome");
}

function removeDuplicates(numbers1) {
  return numbers1.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
}

function capitalizeFirstWord(data) {
  const eachWord = data.split(" ");
  console.log(eachWord);
  const tempSentence = eachWord.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return tempSentence.join(" ");
}

function frequencyCnt(str) {
  const charecters = str.replace(/\s+/g, "");
  const result = {};
  for (let char of charecters) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}
const str = "  ABcdEF ";
console.log(reverseString(str));
const numbers = [2, 4, 8, 10, 23, 21, 12, 45];

console.log(operationArray(numbers));

const students = [
  { name: "Arpan", score: 85 },
  { name: "Rahul", score: 72 },
  { name: "Amit", score: 90 },
  { name: "Sneha", score: 68 },
  { name: "Priya", score: 95 },
];

console.log(sortArrayOfObject(students));

const sentence = "who why how where who why where that";
console.log(wordCount(sentence));
palindromeCheck(" ABbA ");
const number1 = [1, 1, 2, 2, 3];
console.log(removeDuplicates(number1));

const text = "there was a brown crow";
console.log(capitalizeFirstWord(text));

const str1 = "aabc ccdde";

console.log(frequencyCnt(str1));

const nestedArray = [1, 2, [3, 4, [5]], 6, 7];
console.log(nestedArray.flat(Infinity));
const sample = [2, 3, 4, 5, 7, 9, 6];
console.log(Math.max(...sample));
console.log(Math.min(...sample));

const arr1 = [2, 3, 4, 5];
const arr2 = [3, 4, 6, 8, 9];

const ans = arr1.filter((num) => arr2.includes(num));
console.log(ans);
