//singleton

//object literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Arpan",
  age: 21,
  [mySym]: "mykey1",
  loction: "Ahmedabad",
  email: "arpan@gmail.com",
  isLoggedIn: false,
  lastLoginDates: ["Monday", "Tuesday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "arpan@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "arpan@meta.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("HEllo");
};

console.log(JsUser.greeting);

JsUser.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};
