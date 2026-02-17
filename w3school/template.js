let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;

console.log(total);
