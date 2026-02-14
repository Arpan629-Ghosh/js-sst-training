const accountId = 144553;
let accountEmail = "arpan@gmail.com";
var accountPassword = "12345";
accountCity = "Ahamedabad";
let accountState;

// accountId = 2; // not allowed
accountEmail = "ag@gmail.com";
accountPassword = "234";
accountCity = "Kolkata";
console.log(accountId);

/*
  Prefer not to use var 
  because of issue in block scope and functional scope
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
