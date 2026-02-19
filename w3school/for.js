const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
const len = cars.length;
for (let i = 0; i < len; i++) {
  text += " " + cars[i];
}

console.log(text);

const str = "  Arpan   Ghosh  ";
console.log(str.trim().split(/\s+/));
