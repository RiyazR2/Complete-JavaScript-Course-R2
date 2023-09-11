/* 
// V1
let js = "Amazing";
if (js === "Amazing") alert("Hello World ! \nJavaScript is FUN!");
*/

/*
 // V2 :-Values and Variables
console.log(40 + 8 + 9 - 7 * 2 + 7);
console.log("String :- JavaScript");
console.log(11);

let firstName = "Riyaz"; //Variable Creation
console.log(firstName);

//only _underscore and $doller symbol is allowed with variable name and Digit not allowed at starting name of variable
let $doller = 1;
let _Rupee = 82.984;
console.log($doller, "Doller = India Rupee", _Rupee);
*/

/*
// V3 Datatypes

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof false);
console.log(typeof JavaScriptIsFun);
JavaScriptIsFun = "Riyaz"; //automatically change the type of JavaScriptIsFun Variable type to String
console.log(typeof JavaScriptIsFun);
console.log(typeof 33);
console.log(typeof 10.23);
console.log(typeof "Pathan");

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);

console.log(typeof null); //type of null is Object
*/

/*
// V4 Let Const Var

//var and let create variables that can be reassigned another value.
// const creates "constant" variables that cannot be reassigned another value.
// developers shouldn't use var anymore. They should use let or const instead.
// if you're not going to change the value of a variable, it is good practice to use const.

const BirthYear = 1997;
let Age = 26;
var Company = "ABC";
jsCourseBy = "Jonas";

console.log(BirthYear, Age, Company, jsCourseBy);
*/

// V5
// Math Operators
const now = 2040;
let ageRiya = now - 1997;
let ageBande = now - 1999;
console.log(ageRiya, ageBande);

console.log(ageRiya * 2, ageBande / 4, 2 ** 3);
// 2**3 Means 2 to the power 3 = 2*2*2

const firstName = "Riyaz_Ahmed";
const lastName = "Pathan";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

//Assignment Operator
let x = 10 + 5;
x += 5; //x = x + 5
x--;
x++;
console.log(x);

// Comparison Operators <, >, <=, >=;
console.log(ageRiya > ageBande);
console.log(ageRiya < ageBande);
console.log(ageBande <= 41);

console.log(now - 1997 > now - 1999);
