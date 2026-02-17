const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0];
  text += cars[1];
  break list;
  text += cars[2];
  text += cars[3];
}
console.log(text);
