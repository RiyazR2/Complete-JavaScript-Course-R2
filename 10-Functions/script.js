'use strict';
/* ***************************** Default Parameters ***************************** */

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
*/
console.log('**********************************************************');

/* ***************************** Functions Accepting Callback Functions ***************************** */
