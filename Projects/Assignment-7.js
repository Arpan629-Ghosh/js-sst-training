const marks = [45, 67, 89, 32, 76];

const add = marks.reduce((acc, curr) => acc + curr, 0);
console.log(add / marks.length);
