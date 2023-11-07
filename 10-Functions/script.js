'use strict';
/* ***************************** Default Parameters ***************************** */
/*
const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('LH123');
createBookings('LH123', 2, 800);
createBookings('LH123', 2);
createBookings('LH123', 5);

createBookings('LH123', undefined, 1000);

console.log('**********************************************************');
*/
/* ***************************** How Passing Arguments Works: Value vs. Reference ***************************** */
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked In...');
  } else {
    alert('Wrong Passport!!!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

console.log('**********************************************************');
*/

/* ***************************** Functions Accepting Callback Functions ***************************** */
/*

//take a string remove space and convert to lowercase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//take a string transform first the word of the input string to UppersCase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function = HOF
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  // Function (name)property
  console.log(`Transformed by: ${fn.name}`);

  console.log('-------------------------------------------');
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

/* ***************************** Functions Returning Functions ***************************** */
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Riyaz');
greet('Hello')('Riyaz');

console.log('-----------------------------------------');

// Using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi')('Riyaz');

console.log('*****************************************');
*/
/* ***************************** The call and apply Methods ***************************** */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
console.log('-----------------------------------------');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
console.log('-----------------------------------------');

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
console.log('-----------------------------------------');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);
console.log('-----------------------------------------');

// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
console.log('-----------------------------------------');

//this is same as apply method
book.call(swiss, ...flightData);

console.log('**********************************************');

/* ***************************** The BIND Method ***************************** */

// BIND Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williamns');

// Preset 23 so now we only need to to specify name
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listner
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
console.log('-----------------------------------------');

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

console.log('-----------------------------------------');
// same as above using the technique of one function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
