const findLargest = (numbers) => {
  const largest = Math.max(...numbers);
  console.log(largest);
};

const numbers = [4, 3, 7, 1, 9, 23];

findLargest(numbers);
