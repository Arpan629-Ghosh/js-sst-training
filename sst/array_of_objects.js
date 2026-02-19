const details = [
  { name: "Arpan", score: 30 },
  { name: "Pritam", score: 40 },
  { name: "Rajesh", score: 20 },
];

const result = details.sort((a, b) => b.score - a.score);
console.log(result);
