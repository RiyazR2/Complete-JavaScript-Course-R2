'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your Delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* ******************************** Array Destructing ********************************************************* */

/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Without 3rd Variable
[secondary, main] = [main, secondary];
console.log(main, secondary);
console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Array Destructing
const nested = [2, 4, [6, 8]];
console.log(nested);

const [x, , z] = nested;
console.log(x, z);

const [a, b, [c, d]] = nested;
console.log(a, b, c, d);

// Default Values
const [p = 1, q = 1, r = 1] = [7, 8];
console.log(p, q, r);
*/

/* ******************************** Obeject Destructing ********************************************************* */
/*

//Here no need to skip through comma's, Just mention property name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Alternative Variable Name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default Value

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 99;
let b = 111;
console.log(a, b);
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b);


//Nested Object
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: opn, close: cls },
} = openingHours;
console.log(opn, cls);

*/

/* ******************************** Spread Operator ********************************************************* */

const arr = [6, 7, 8, 9, 10];
const badArr = [2, 3, 4, 5, arr[0], arr[1], arr[2], arr[3], arr[4]];
console.log(badArr);

const goodArr = [2, 3, 4, 5, ...arr];
console.log(goodArr); // its just one 1 big value i.e Array

//But if we use spread operator to expand new array,
console.log(...goodArr); // So Now logged the individual elements of the array i.e
console.log(2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(restaurant.mainMenu);
// Adding New Menu in New Array using previous menu through SpreadOperator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Real World Example
const ingredients = [
  // prompt("let's make Pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

// Without Spread Operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// With Spread Operator
restaurant.orderPasta(...ingredients);

//OBJECT Spreding with additional data
const newRestourant = { Founded: 1998, ...restaurant, Founder: 'Guiseppe' };
console.log(newRestourant);
