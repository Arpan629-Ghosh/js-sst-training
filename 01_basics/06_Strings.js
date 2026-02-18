const gameName = "ABBA";

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("p"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const newStringOne = "    arpan    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arpan.com/arpan%20ghosh";

console.log(url.replace("%20", "-"));
console.log(url.includes("arpan"));
console.log(url.includes("rahul"));

let str1 = gameName;
console.log(str1);
let str2 = gameName.split("").reverse().join("");
console.log(str2);
if (str1 === str2) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}
