const removeDuplicate = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!result.includes(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  console.log(result);
};

let numbers = [2, 2, 3, 4, 4, 5];
removeDuplicate(numbers);
