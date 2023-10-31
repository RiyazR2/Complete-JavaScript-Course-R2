'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //[weekdays[`${2 + 3}`]]
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    // Enhanced method
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is Your Delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // openingHours: openingHours,
  openingHours, // ES6 Enhanced Object Literals
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

/*
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

*/

/* ******************************** Rest Parameter ********************************************************* */
/*
/// 1] Destructuring

// SPREAD because on RIGHT side of Assignment = Operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because on LEFT side of assignment = Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// this is above object data just put here for better understanding as comment
//starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//3 dots ... on boths sides of the assignment operator
const [pizza, , risotto, ...otherFood] = [
  restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays, sat);

/// 2] Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2);
add(3, 4, 5);
const storeNum = [0, 1, 2, 3, 4, 5];
add(...storeNum);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

/* ******************************** Short Circuiting ( && and || )********************************************************* */

/*
//they can use any data type
//they can return any data type
// and they do Short Circuiting

// Result of the OR || operator Doesn't Always have tobe Boolean
console.log(10 || 'Riyaz');
console.log('', 'Riyaz'); // falsy value ''
console.log(true, 0);
console.log(undefined, null);

//Short Circuit :- falsy value ignore direct jump to first true value then ignore remaining true and falsy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

console.log('------AND------');
console.log(0 && 'Riyaz'); // 0
console.log(10 && 'Riyaz'); // Riyaz

//Short Circuit :- check all truthy value if all are turthy then it return last thruth value and if their is some true value and then comes the falsy value it stop execution and return falsy value
console.log('Hello' && 23 && null && 'Riyaz'); // null

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mashrom', 'spinach');
}

// same work as above

restaurant.orderPizza && restaurant.orderPizza('mushrom', 'spinach');
*/

/* ******************************** Nullish Coalescing Operator ?? ********************************************************* */

/*
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

*/

/* ******************************** Logical Assignment Operators ********************************************************* */
/*
const rest1 = {
  name: 'capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/// OR Assignment Operator
// rest1.numGuest = rest1.numGuest || 10; //20
// rest2.numGuest = rest2.numGuest || 10; //10

// rest1.numGuest ||= 10; //20
// rest2.numGuest ||= 10; //10

// console.log(rest1.numGuest, rest2.numGuest);

rest1.numGuest ??= 10; //20
rest2.numGuest ??= 10; //10

console.log(rest1.numGuest, rest2.numGuest);
*/

/* ******************************** Looping Arrays: The for-of Loop ********************************************************* */
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item); // Each item is an array now with an index
}

console.log(menu.entries()); // Array Iterator{}
console.log([...menu.entries()]);

for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}
*/
/* ******************************** Optional Chaining ********************************************************* */

/*
Optional Chaining is a feature in Javascript that allows you to access properties of an object or elements of an array without having to check whether the object or array is null or undefined first. It is represented by the ?. Operator and can be used to concisely access deeply nested properties without having to write a long chain of if statements to check for null or undefined values.

Optional Chaining can also be used to access elements of an array in javascript. It works in a similar way to accessing properties of an object, but using the ?.[ ] operator instead of the ?. operator. 
*/

/*
console.log(restaurant.openingHours.mon); //undefined
// console.log(restaurant.openingHours.mon.open); // Error : Cannot read properties of undefined (reading 'open')

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Examples

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // we want to use variable name as property name, We need to use bracket notation
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
  // console.log(day);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// console.log(restaurant.orderRisotto(0, 1) ?? 'Method does not exist'); // Error

//Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

// const users =[];

console.log(users[0]?.name ?? 'User Array empty');

// for more details refer .Docx file
*/
/* ******************************** Looping Objects: Object Keys, Values, and Entries ******************************* */
/*
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;

for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

// [Key, Value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/* ****************************************** SET in JavaScript ****************************************** */
/*

console.log(new Set('Riyaz')); //Set(5) {'R', 'i', 'y', 'a', 'z'}
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
0;

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];
console.log(staff);

const staffUnique = new Set(staff);
console.log(staffUnique);

*/

/* ****************************************** MAP Fundamentals ****************************************** */
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organnic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get('Categories'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2); // here 2 is key
console.log(rest);

console.log(rest.size);
// rest.clear() // now size is 0 of rest

rest.set([1, 2], 'Test');
console.log(rest);

//We cannot access Test using key[1,2]
console.log(rest.get([1, 2])); // undefined

//we can do like this
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test
*/
/******************************* Maps : Iterations *********************************/
/*
const question = new Map([
  ['question', 'What is the best programming Language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//covert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//*********************************************************************************************************************************** */

/******************************* Working With Strings - Part 1 *********************************/

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1 (not found this function is case Sensitive)

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air (7 is not include it Excluded)

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got Lucky 😎');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(
  '***************************************************************************'
);
/******************************* Working With Strings - Part 2 *********************************/
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('riyaz'.toUpperCase());

// Fix Capitalization
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@jonas.io';
console.log(email);
const loginEmail = '   Hello@Jonas.Io  \n';
console.log(loginEmail);

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// OR

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

/// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const announcement =
  'All Passengers come to boarding door 23. Boarding door  23!';

console.log(announcement.replace('door', 'gate')); // only for single occurance
console.log(announcement.replace(/door/g, 'gate')); // it for all occurance Global

// Bolleans

const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

// Practice Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT Allowed on Board');
  } else {
    console.log('Welcome Aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

console.log(
  '***************************************************************************'
);

/******************************* Working With Strings - Part 3 *********************************/

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = ' Go to gate 23! ';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log(' Jonas '.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(648395765623));
console.log(maskCreditCard(932475658324657));
console.log(maskCreditCard(62784306788484859));

//Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(14);
