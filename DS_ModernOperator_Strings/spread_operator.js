const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];
console.log(...arr);
const NewArr = [1, 2, ...arr];
console.log(NewArr);

const newMenu = [...resturant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...resturant.mainMenu];
// Join 2 arrays
const menu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(menu);

const str = "jonas";
const letters = [...str, " ", "s "];
console.log(letters);

const ingredients = [
  "Let's make pasta ! Ingredient 1?",
  "  ingredients 2",
  "Ingredients 3",
];

console.log(ingredients);

resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
resturant.orderPasta(...ingredients);

const newResturant = { foundedIn: 1998, ...resturant, founder: "Guiseepe" };
console.log(newResturant);

const resturantCopy = { ...resturant };
resturantCopy.name = "Ristorante Roma";
console.log(resturantCopy.name);
console.log(resturant.name);
