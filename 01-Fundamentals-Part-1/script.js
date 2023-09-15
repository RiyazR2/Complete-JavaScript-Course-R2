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

/*
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

*/
/*

// V6

//Operator Precedence Values
//Expressions in parentheses are computed before the rest of the expression
//Function are executed before the result is used in the rest of the expression
Val	Operator	Description	Example
18	( )	Expression Grouping	(100 + 50) * 3
17	.	Member Of	person.name
17	[]	Member Of	person["name"]
17	?.	Optional Chaining ES2020	x ?. y
17	()	Function Call	myFunction()
17	new	New with Arguments	new Date("June 5,2022")
16	new	New without Arguments	new Date()


// Increment Operators
// Postfix increments are executed before prefix increments
15	++	Postfix Increment	i++
15	--	Postfix Decrement	i--
14	++	Prefix Increment	++i
14	--	Prefix Decrement	--i


// NOT Operators
14	!	Logical NOT	!(x==y)
14	~	Bitwise NOT	~x


// Unary Operators
14	+	Unary Plus	+x
14	-	Unary Minus	-x
14	typeof	Data Type	typeof x
14	void	Evaluate Void	void(0)
14	delete	Property Delete	delete myCar.color


// Arithmetic Operators
// Exponentiations are executed before multiplications
// Multiplications and divisions are executed before additions and subtractions
13	**	Exponentiation ES2016	10 ** 2
12	*	Multiplication	10 * 5
12	/	Division	10 / 5
12	%	Division Remainder	10 % 5
11	+	Addition	10 + 5
11	-	Subtraction	10 - 5
11	+	Concatenation	"John" + "Doe"


//Shift Operators
10	<<	Shift Left	x << 2
10	>>	Shift Right (signed)	x >> 2
10	>>>	Shift Right (unsigned)	x >>> 2


// Relational Operators
9	in	Property in Object	"PI" in Math
9	instanceof	Instance of Object	x instanceof Array


// Comparison Operators
9	<	Less than	x < y 
9	<=	Less than or equal	x <= y
9	>	Greater than	x > y
9	>=	Greater than or equal	x >= Array
8	==	Equal	x == y
8	===	Strict equal	x === y
8	!=	Unequal	x != y
8	!==	Strict unequal	x !== y


// Bitwise Operators
7	&	Bitwise AND	x & y
6	^	Bitwise XOR	x ^ y
5	|	Bitwise OR	x | y


//Logical Operators
4	&&	Logical AND	x && y
3	||	Logical OR	x || y
3	??	Nullish Coalescing ES2020	x ?? y


//Conditional (ternary) Operator
2	? :	Condition	? "yes" : "no"


//Assignment Operators
//Assignments are executed after other operations
2	=	Simple Assignment	x = y
2	:	Colon Assignment	x: 5
2	+=	Addition Assignment	x += y
2	-=	Subtraction Assignment	x -= y
2	*=	Multiplication Assignment	x *= y
2	**=	Exponentiation Assignment	x **= y
2	/=	Division Assignment	x /= y
2	%=	Remainder Assignment	x %= y
2	<<=	Left Shift Assignment	x <<= y
2	>>=	Right Shift Assignment	x >>= y
2	>>>=	Unsigned Right Shift	x >>>= y
2	&=	Bitwise AND Assignment	x &= y
2	|=	Bitwise OR Assignment	x |= y
2	^=	Bitwise XOR Assignment	x ^= y
2	&&=	Logical AND Assignment	x &&= y
2	||=	Logical OR Assignment	x ||= y
2	=>	Arrow	x => y
2	yield	Pause / Resume	yield x
2	yield*	Delegate	yield* x
2	...	Spread	... x
1	,	Comma	x , y

*/

/*
// V7 String Literal
const firstName = "Riyaz";
let Hobbie = "Cricket";
const BirthYear = 1997;
let currentYear = 2023;

//without Using Template Literals
const Riyaz =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - BirthYear) +
  " year old" +
  " Hobbie " +
  Hobbie;

console.log(Riyaz);

//Using Template Literals
const newRiyaz = `I'm ${firstName}, a ${
  currentYear - BirthYear
} year old Hobbie ${Hobbie}`;
console.log(newRiyaz);

console.log(`Multi
Line
String`);

*/

/*
// V8 Taking Decision : if/else statements

const sarahAge = 14;
if (sarahAge >= 18) {
  console.log(`Sarah is Eligible for Driving License 🚗`);
} else {
  const yearLeft = 18 - sarahAge;
  console.log(
    `Sarah is too younger for Driving License she need to wait for atleast ${yearLeft} year`
  );
}
*/

/*
// V9 Type Conversion and Type Coercion
// this conversion cannot be apply original varible
// only can to that expresion only
const inputYear = "1991";
console.log(inputYear);
console.log(Number(inputYear)); //string is converted into number
const name = "Jonas";
console.log(Number(name)); //:- O/P NaN(Not a Number) but NaN its Actully means 'Invalid Number'

let strNum = 23;
console.log(strNum);
console.log(String(strNum)); //Number is converted into String
console.log(strNum + 7);

//Type Coercion

//  23 is a number so we have different types here, right?
//  we have a string, a number and another string
//  so in JavaScript, the plus operator that we used here triggers a coercion to strings
//  and 'So whenever there is an operation between a string and number, the NUMBER WILL BE CONVERTED TO A STRING'

console.log("I am " + 26 + " years old");
console.log("I am " + "26" + " years old");
console.log("37" - "10" - "7"); //20
console.log(("2" * "5") / 2); // 5

//Game => Gues the Output
let n = "1" + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // 10
*/

/*
V10 Truth and Falsy Values

5 falsy values:- 0, undefined, null, NaN, ""(emptyString).
All of these Five Values will be converted to false when we attempt to convert them to a boolean.
they are not exactly false initially but they will become when converted to a boolean. so, that's the definition of falsy values.
Everything else are our so-called truthy values. So, Values that will be converted to true for Example
any number that is not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0; //100
if (money) {
  console.log("Don't Spend it all !");
} else {
  console.log("You Should get a Job!");
}

let height; //undefined variable, we know undefined is also a falsy value
if (height) {
  console.log("Height is Defined !");
} else {
  console.log("Height is Undefined");
}
*/

/*

// V11 Equaltiy Operators , Prompt , Different Operator(=! & ==!) and else if 
// == Loose Equality Operator
// === Strict Equality Operator


let age = "26";

if (age == 26) console.log("Age is 26 (Loose Equality)");
if (age === 26) console.log("Age is 26 (Strict Equality)");

// let favourite = prompt("What's Your Favourite Number?");
// console.log(favourite, "is a ", typeof favourite);

// if (favourite == 30) {
//   console.log(
//     "Cool! 30 is an Amazing Number!\n......... Checked by Loose Equality Operator"
//   );
// }

favourite = Number(prompt("What's Your Favourite Number?"));
console.log(favourite, "is a ", typeof favourite);
if (favourite === 30) {
  console.log(
    "Cool! 30 is an Amazing Number!\n......... Checked by Strict Equality Operator"
  );
} else if (favourite === 20) {
  console.log(
    "Cool! 20 is also an Amazing Number!\n......... Checked by Strict Equality Operator"
  );
} else if (favourite === 10) {
  console.log(
    "Cool! 10 is also an Amazing Number!\n......... Checked by Strict Equality Operator"
  );
} else {
  console.log("Number is Not 10, 20 or 30");
}

if (favourite !== 30) {
  console.log("But Why not 30!");
}

*/

/*
// V12 Logical Operator
const hasDrivingLicense = true; // A
const hasGoodVision = true; // B
const hasCar = false; // C

//AND
console.log("AND operations");
console.log(hasDrivingLicense && hasGoodVision);
console.log(hasCar && hasGoodVision);

//OR
console.log("OR Operations");
console.log(hasDrivingLicense || hasGoodVision);
console.log(hasCar || hasGoodVision);

//NOT
console.log("NOT Operation");
console.log(!hasDrivingLicense);

if (!hasDrivingLicense && hasGoodVision) {
  console.log("Sarah is able to drive !");
} else {
  console.log("Someone else should drive!");
}

const isTired = false;
if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive !");
} else {
  console.log("Someone else should drive!");
}

*/

/*
V 13 Switch case Statments
its compare with strict Equality ===
*/

/*
let day = "monday"; // 'day === monday'
switch (day) {
  case "monday":
    console.log("1st Day working");
    break;
  case "tuesday":
    console.log("Practicing JavaScript exercises");
    break;
  case "wednesday":
    console.log("Weekly Meeting with Dinesh SNP Mphasis");
    break;
  case "thursday":
  case "friday":
    console.log("Remaining JavaScript Course Content and Assignments");
    break;
  case "saturday":
    console.log("Home work like groceries and Maintaining");
    break;
  case "sunday":
    console.log("Enjoy and Sleeping 😅");
    break;
  default:
    console.log("not a Valid Day");
}

//Same code Using if else if statements
if (day === "monday") {
  console.log("1st Day working");
} else if (day === "tuesday") {
  console.log("Practicing JavaScript exercises");
} else if (day === "wednesday") {
  console.log("Weekly Meeting with Dinesh SNP Mphasis");
} else if (day === "thursday" || day === "friday") {
  console.log("Remaining JavaScript Course Content and Assignments");
} else if (day === "saturday") {
  console.log("Home work like groceries and Maintaining");
} else if (day === "sunday") {
  console.log("Enjoy and Sleeping 😅");
} else {
  console.log("not a Valid Day");
}
*/

/*
V 14 Statments and Expressions
An Expression is a Piece of Code that produces a value
*/

/*
V 15 Conditional Operator (Ternary Operator)
its has 3 parts:- 1 is Condition, 2 is if part , 3 is else part
ternary operator is an expression that we can use it in template literal
*/
/*
let age = 18;
age >= 18
  ? console.log("Able to Voter Id Card")
  : console.log("wait atleat", 18 - age, "Year");

console.log(`${age >= 18 ? console.log("Able to Voter Id Card") : console.log("wait atleat", 18 - age, "Year")}`)
*/






/*--------------------------------- End Of JavaScript Fundamental Part 1 ------------------------------------  */