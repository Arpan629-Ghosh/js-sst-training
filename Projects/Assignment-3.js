const str = " placement ";
console.log(str.trim());

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(capitalize("arpan"));

const email = "arpan@gmail.com";
console.log(email.includes("@"));

const pH = "6296981663";
const maskedPH = pH.slice(0, 2) + "******" + pH.slice(-2);
console.log(maskedPH);
