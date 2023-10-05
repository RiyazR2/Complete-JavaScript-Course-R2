'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName); //firstName is not present in this scope so it find for Lookup then find it in Global Scope

  function printDetails() {
    const output = `Name is ${firstName}, You are born in ${birthYear} and your age is ${age}`;
    console.log(output);

    //Actually Millenial is from 1981 to 1996
    if (birthYear >= 1981 && birthYear <= 1997) {
      var Millenial = true;
      const str = `Oh, and you're a Millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log('add function', add(2, 8)); //this function scope is only in this block i.e if block,
    }
    console.log(Millenial); //No Error Becouse Var is not a block scope, Var is a Function Scope i.e we can use where we want only in this function

    // console.log(str); //Error:
    /* 
    Uncaught ReferenceError: str is not defined
    at printDetails (script.js:16:17)
    at calcAge (script.js:21:3)
    at script.js:26:1

    Becouse let and const are block scope
    */

    // console.log(add(2, 8)); //Error : add is not defined But if we rempve STRICT MODE this callfunction will work
  }

  printDetails();
  return age;
}

const firstName = 'Riyaz'; //Global Variable
calcAge(1997);
// printDetails(); // Error : printDetails is not defined at(becouse its in the inside the another block so outside the block we cannot access)
