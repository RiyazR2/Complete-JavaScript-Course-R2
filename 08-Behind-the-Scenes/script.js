'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   console.log(firstName); //firstName is not present in this scope so it find for Lookup then find it in Global Scope

//   function printDetails() {
//     const output = `Name is ${firstName}, You are born in ${birthYear} and your age is ${age}`;
//     console.log(output);

//     //Actually Millenial is from 1981 to 1996
//     if (birthYear >= 1981 && birthYear <= 1997) {
//       var Millenial = true;
//       const str = `Oh, and you're a Millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log('add function', add(2, 8)); //this function scope is only in this block i.e if block,
//     }
//     console.log(Millenial); //No Error Becouse Var is not a block scope, Var is a Function Scope i.e we can use where we want only in this function

//     // console.log(str); //Error:
//     /*
//     Uncaught ReferenceError: str is not defined
//     at printDetails (script.js:16:17)
//     at calcAge (script.js:21:3)
//     at script.js:26:1

//     Becouse let and const are block scope
//     */

//     // console.log(add(2, 8)); //Error : add is not defined But if we rempve STRICT MODE this callfunction will work
//   }

//   printDetails();
//   return age;
// }

// const firstName = 'Riyaz'; //Global Variable
// calcAge(1997);
// // printDetails(); // Error : printDetails is not defined at(becouse its in the inside the another block so outside the block we cannot access)

/********************** Hoisting and TDZ(Temporal Dead Zone) Practice********************* */
/*
// Variables
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas'; //undefined
let job = 'teacher'; //Uncaught ReferenceError: Cannot access 'job' before initialization at script.js:47:13
const year = 1991;
*/

/*
// Functions
console.log(addDecl(2, 5));
console.log(addExp(2, 5)); //Uncaught ReferenceError: Cannot access 'addExp' before initialization
console.log(addArrow(2, 5)); //Uncaught TypeError: addArrow is not a function i.e its actully look like this :- undefined(2,5)

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

/*
//Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart(); //Here numProduct is Undefined so its Falsy Value that means conditions is true

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products are Deleted..!');
}

var x = 1; // var x is Global property
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/* ********************************* The this Keyword in Practice ******************************** */
/*
console.log(this); // Pointing to window Object

function calcAge1(birthYear) {
  console.log(2023 - birthYear);
  console.log(this); //undefined
}

const calcAge2 = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); //undefined
};

const calcAge3 = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); //Pointing to window i.e it use this keyword from its parent function or its parent Scope
};

calcAge1(1997);
calcAge2(1997);
calcAge3(1997);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
Jonas.calcAge();

const Riyaz = {
  year: 1997,
};

Riyaz.calcAge = Jonas.calcAge;

Riyaz.calcAge();
*/

/* ********************************* Regular Function vs Arrow Function ******************************** */
/*
const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
  //Arrow Function doesn't get its own this keyword
  // it simply use this keyword from its surroundings i.e from it parent this keyword
};

Jonas.greet(); // Hey undefined
*/
/* ********************** Primitives vs. Objects (Primitive vs. Reference Types) ************/

/*
//PRIMITIVE TYPES
Number, String, Boolean, Undefined, Null, Symbol, BigInt


OBJECTS: REFERENCE TYPES
Object literal, Arrays, Functions, Many more...
*/
let age = 26;
let oldAge = age;
age = 27;

console.log(oldAge);
console.log(age);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;

friend.age = 25;
console.log('Me', me);
console.log('Friend', friend);

// End of Part 8
