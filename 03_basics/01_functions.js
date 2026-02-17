function loginUserMessage(userName) {
  if (userName === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${userName} just logged in`;
}

console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "Arpan",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

handleObject(user);

const values = [200, 300, 400, 500];
function returnSecondValue(values) {
  return values[1];
}

console.log(returnSecondValue(values));
