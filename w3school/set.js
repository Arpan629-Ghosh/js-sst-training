const mySet = new Set();

const a = "a";
const b = "b";
const c = "c";

mySet.add(a);
mySet.add(b);
mySet.add(c);

mySet.forEach((values) => console.log(values));
console.log(mySet.size);
console.log(mySet.has("d"));

let iterator = mySet.values();

let text = "";

for (const entry of iterator) {
  text += entry;
}

console.log(text);
let it = mySet.values();

let text1 = "";

for (const entry of it) {
  text1 += entry;
}

console.log(text1);

// weakset()

const newSet = new Set();

const user = {
  name: "Arpan Ghosh",
  age: "21",
};

newSet.add(user);
console.log(newSet.has(user));
console.log(newSet.delete(user));
console.log(newSet.has(user));

async function apiCall() {
  let apiText = await fetch("https://random-word-api.herokuapp.com/word");
  console.log(apiText);

  if (!apiText.ok) {
    console.log("HTTP error");
  }

  let jsontext = await apiText.json();
  console.log(jsontext);
}

apiCall();
