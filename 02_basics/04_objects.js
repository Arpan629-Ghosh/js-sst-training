// const tinderUser = new Object(); //singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Arpan",
      lastname: "Ghosh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const temp = [
  {
    name: "Arpan",
    age: 21,
  },
  {
    name: "Ram",
    age: 22,
  },
];

const result = temp.filter((person) => person.age > 20);
console.log(result);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
