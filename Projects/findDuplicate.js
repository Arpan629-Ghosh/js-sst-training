const numbers = [1, 2, 3, 2, 4, 5, 1, 6];
const seen = new Set();
const duplicate = new Set();
numbers.forEach((num) => {
  if (seen.has(num)) {
    duplicate.add(num);
  } else {
    seen.add(num);
  }
});

console.log([...duplicate]);
