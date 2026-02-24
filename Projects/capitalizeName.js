const users = ["arpan ghosh", "raM kumar", "sITA devi"];

const capital = users.map((name) => {
  const properFormat = name
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  return properFormat;
});

console.log(capital);
