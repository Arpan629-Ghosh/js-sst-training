const m_heros = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// m_heros.push(dc);
// console.log(m_heros);

// console.log(m_heros[3][1]);

// const allHeros = m_heros.concat(dc);
// console.log(allHeros);

const all_new_Heros = [...m_heros, ...dc];
console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Arpan"));
console.log(Array.from("Arpan"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
