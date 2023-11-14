"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/****************************** Simple Array Methods ******************************/

let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log("array after slice", arr);
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']

console.log(arr.slice(1, -2)); // ['b', 'c']

// Creating a shallow copy of any array
console.log(arr.slice()); //- ['a', 'b', 'c', 'd', 'e']

// SPLICE (actully deleting or Removing items)
// SPLICE same as SLICE but Difference is that it actully change the original array, i.e it MUTED array

// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log("array after Splice", arr); // ['a', 'b']

console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']
arr.splice(1, 2); // i.e b,c
console.log(arr); // ['a', 'd']

// REVERSE (Muted) change original array
arr = ["a", "b", "c", "d", "e"];

const arr2 = ["z", "y", "x", "v", "u", "r", "q"];
console.log(arr2.reverse()); // ['q', 'r', 'u', 'v', 'x', 'y', 'z']
console.log(arr2); // ['q', 'r', 'u', 'v', 'x', 'y', 'z']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'q', 'r', 'u', 'v', 'x', 'y', 'z']
console.log(...arr, ...arr2); // a b c d e q r u v x y z

// JOIN using some seprator which we specify
console.log(letters.join("-"));

// we already know PUSH, UNSHIFT, POP, INDEX OF, and INCLUDES
