// Stack(primitive) and Heap(non-primitive)
let name = "ArpanGhosh";
let title = "Ghosh";

let userOne = {
  name: "Arpan",
  email: "arpan@gmail.com",
  password: 123456,
};

let userTwo = userOne;
console.log(userOne.email);
userTwo.password = 654321;
console.log(userOne.password);
