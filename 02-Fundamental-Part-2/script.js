/* V1 use strict mode
Benefits of using ‘use strict’: Strict mode makes several changes to normal JavaScript semantics. 

Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.
Strict mode makes it easier to write “secure” JavaScript.

*/
'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)')

//Unexpected strict mode reserved word
// const private = "pvt"
// const interface = 87;

//Unexpected token 'if'
// const if = 'you';
*/

/* V2 Functions

*/
/*
function logger() {
    console.log('My Name is Pathan')
}

logger();
console.log(logger)
console.log(logger())

function fruitProcessor(apples, mango) {
    console.log(apples, mango)
    const makingJuice = `juice with ${apples} apples and ${mango} mangoes`
    return makingJuice;
}

const juice = fruitProcessor(2, 4);
console.log(juice)
console.log(fruitProcessor(1, 3))
*/

/*
// V3 Function Declaration and Expression

//Function Declaration
// We can call function before declaration

// const age1 = calAge(1997)
function calAge(birthYear) {
    return 2023 - birthYear;
}

const age1 = calAge(1997)
console.log(age1)

//Function Expression
// we cannot call function before Function Expression
// const age2 = calAge2(2000)//Error: cannot access 'calAge2' before initialization

const calAge2 = function (birthYear) { //Anonymous Function
    return 2023 - birthYear;
}
const age2 = calAge2(2000)
console.log(age1, age2)


// V4 Arrow Function

// this is same function as a above function expression and its only get single line of code
const calAge3 = birthYear => 2023 - birthYear;
const age3 = calAge3(1995);
console.log(age3)

//Another example

const yearUntilRetirement = (birthYear, name) => {
    let age = 2023 - birthYear;
    let retirement = 60 - age;
    return `${name} has ${retirement} years remaining until Retirenment`;
}

const age4 = yearUntilRetirement(1997, 'Riyaz')
console.log(age4)

*/

// V5 Function Calling Function


/*
function fruitProcessor(apples, mango) {
    console.log(apples, mango)
    const makingJuice = `juice with ${apples} apples and ${mango} mangoes`
    return makingJuice;
}

const juice = fruitProcessor(2, 4);
console.log(juice)
console.log(fruitProcessor(1, 3))
*/

/*
const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor2 = function (apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    console.log(apples, oranges)
    const makingJuice2 = `Juice with ${applePieces} Pieces of Apples and ${orangePieces} Pieces of Oranges`
    return makingJuice2;
}

const juice2 = fruitProcessor2(2, 3)
console.log(juice2)
*/

/*
// V5 Arrays

let f1 = 'Michael'
let f2 = 'John'
let f3 = 'Steven'

let friends = ['Michael', 'John', 'Steven', 'Peter', 'Rock'];
console.log(f1, f2, f3)
console.log(friends)
console.log(friends[0])
console.log(friends[1])
console.log(friends.length) // Exact length of an Array
console.log(friends[friends.length - 1]) // Accessing last element in an array
friends[friends.length - 1] = 'Rahul' // Replacing friend Rock to Rahul
console.log(friends)

const lastName = 'Pathan'
const Riyaz = ['Riyaz', lastName, 2023 - 1997,]

//Exercise
const calAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1997, 2000, 2010, 2014, 2018, 2021]
const age1 = calAge(years[0])
const age2 = calAge(years[2])
const age3 = calAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calAge(years[0]), calAge(years[2]), calAge(years[years.length - 1])]
console.log(ages)

//Another method of creating Array
const num = new Array(1, 2, 3)
console.log(num)
*/

/*
// V6 Basic Array Operation (Methods)

// add element in array
let friends = ['Michael', 'John', 'Steven', 'Peter', 'Rock'];
console.log(friends)


friends.push('Rushikesh') // add element at end of an array
console.log(friends)

friends.unshift('Rizwan') //add element at start of an array
console.log(friends)

// Remove element in array
let popp = friends.pop() // remove last element of an array
console.log(friends, 'Removed item ->', popp)

popp = friends.shift() // remove first element of an array
console.log(friends, 'Removed item ->', popp)


//index of item in an array
console.log(friends.indexOf('Peter'))
console.log(friends.indexOf('Riyaz')) //when item is not available -1

//Check item is available or Not
console.log(friends.includes('Peter'))
console.log(friends.includes('Riyaz'))

// its check through Strict Equality Operator ===
friends.push(23);//Number
console.log(friends.includes('23'))//string
console.log(friends.includes(23))//number

*/


/*
// V7 Introduction to Objects
const riyazArray = ['Riyaz', 'Pathan', 2023 - 1997, 'XYZ', ['Kirat', 'Gandhmal', 'Sunki', 'Hangargekar']]

const riyazObject = { firstName: 'Riyaz', lastName: 'Pathan', age: 2023 - 1997, company: 'XYZ', friends: ['Kirat', 'Gandhmal', 'Sunki', 'Hangargekar'] }
console.log(riyazArray)
console.log(riyazObject)

// V8 Dot and Bracket Notations


console.log(riyazObject.firstName);
console.log(riyazObject['firstName'])

// add key and value
riyazObject.country = 'INDIA'
riyazObject['Github'] = 'RiyazR2'

const nameKey = 'Name'
console.log(riyazObject['last' + nameKey])
console.log(riyazObject['first' + nameKey])



// const userInterest = prompt("what do you want to know about Riyaz? choose between firstName, lastName, age, company and friends");

// // console.log(riyazObject.userInterest) //Undefined
// console.log(riyazObject[userInterest])

// if (riyazObject[userInterest]) {
//     console.log(riyazObject[userInterest])
// } else {
//     console.log('Wrong Choose !!!! Please choose between firstName, lastName, age, company and friends')
// }

*/

/*
// V9 Object Methods
const riyazObject = {
    firstName: 'Riyaz',
    lastName: 'Pathan',
    birthYear: 1997,
    company: 'XYZ',
    friends: ['Kirat', 'Gandhmal', 'Sunki', 'Hangargekar'],
    hasDriversLincense: true,
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // // this method (this is equal to object calling method)
    // calcAge: function () {
    //     console.log(this) // shows whole object
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear; //object age property created
        return this.age
    },
    getSummary: function () {
        return console.log(`${this.firstName} is a ${this.calcAge()}-year old working in ${this.company}, and he has ${this.hasDriversLincense ? 'a' : 'no'} driver's License `)
    }
}
////for normal function
// console.log(riyazObject.calcAge(2000))
// console.log(riyazObject['calcAge'](2000))

// //using this method
// console.log(riyazObject.calcAge())

//after creating property age
console.log(riyazObject.calcAge())

console.log(riyazObject.age)
console.log(riyazObject.age)
console.log(riyazObject.age)

//Challenge : 'Riyaz is a 26-year old working in XYZ, and he has a driver's License'

console.log(riyazObject.getSummary())
*/

// V10 For Loop

console.log('Lifting weights repetition 1 🏋️');
console.log('Lifting weights repetition 2 🏋️');
console.log('Lifting weights repetition 3 🏋️');
console.log('Lifting weights repetition 4 🏋️');

console.log('Before using FOR LOOP ☝️\n After using FOR LOOP 👇')
//For Loop keeps running while conditions is TRUE
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`)
}


// // V11 Looping Array, Breaking and Continuing 
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]
// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i])
// }

const types = [];
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
for (let i = 0; i < jonas.length; i++) {
    //Reading from Jonas Array
    console.log(jonas[i], typeof jonas[i])

    //Filling types Array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
}

console.log(types)

//Calculating Ages

const birthYears = [1994, 1996, 1997, 2000, 2007];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
    ages.push(2023 - birthYears[i])
}
console.log(ages)



// Continue and Break
console.log(`----- ONLY STRING -----`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i])
}

console.log(`----- BREAK WHEN NUMBER COMES -----`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i])
}


// V12 Looping Backwards and Loops in loops

console.log('------ Reverse LOOP -----')
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

//Loop in Loop

for (let Exercise = 1; Exercise < 4; Exercise++) {
    console.log(`------- Starting Exercise ${Exercise} -------`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${Exercise}: Lifting Weight repetition ${rep} 🏋️`)
    }
}

// V13 WHILE LOOP
for (let rep = 1; rep <= 5; rep++) {
    console.log(`FOR : Lifting weights repetition ${rep} 🏋️`)
}

let rep = 1;
while (rep <= 5) {
    console.log(`WHILE : Lifting weights repetition ${rep} 🏋️`)
    rep++
}

//Dice Game

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end you rolled 6 .........')

}