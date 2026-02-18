const sumofArray = (numbers) => {
  const result = numbers.reduce((acc, curr) => acc + curr, 0);

  console.log(result);
};

let numbers = [2, 3, 4, 5, 6];
sumofArray(numbers);
