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
// const age2 = calAge2(2000)
console.log(age1, age2)
