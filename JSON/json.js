const user = {
  name: "Arpan",
  role: "Developer",
};

const jsonData = JSON.stringify(user);
console.log(jsonData);
const parsed = JSON.parse(jsonData);
console.log(parsed);
