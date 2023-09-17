'use strict'
/*
JavaScript Fundamentals – Part 2
Assignment 1
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

describeCountry('India', 1428, 'New Delhi')
describeCountry('China', 1425, 'Beijing')
describeCountry('United States', 336, 'Washington, D.C.')


/*
Assignment 2 LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const perINDIA = percentageOfWorld1(1428)
const perCHINA = percentageOfWorld1(1425)
const perUS = percentageOfWorld1(336)

//Using toFixed()
//The method toFixed() comes in handy when we want to remove only some of the decimal places:
console.log(`INDIA ${perINDIA.toFixed(2)}%, CHINA ${perCHINA.toFixed(2)}%, United State ${perUS.toFixed(2)}%`)


/* 
Assignment 3 LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = population => (population / 7900) * 100;
const perINDIA2 = percentageOfWorld1(1428)
const perCHINA2 = percentageOfWorld1(1425)
const perUS2 = percentageOfWorld1(336)
console.log(`INDIA ${perINDIA2.toFixed(2)}%, CHINA ${perCHINA2.toFixed(2)}%, United State ${perUS2.toFixed(2)}%`)


/* Assignment 4 LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population)
    const description = `${country} has ${population} million people,which is about ${percentage} % of the World.`
    console.log(description)
}
describePopulation('India', 1428);
describePopulation('China', 1425);
describePopulation('USA', 336);

/* Assignment 5 LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

let populationArray = [1428, 1425, 336, 276]
console.log("Contain 4 elements ", populationArray.length === 4);
const percentageArray = [percentageOfWorld1(populationArray[0]).toFixed(2), percentageOfWorld1(populationArray[1]).toFixed(2),
percentageOfWorld1(populationArray[2]).toFixed(2), percentageOfWorld1(populationArray[3]).toFixed(2)];
console.log(percentageArray)


/* Assignment 6 LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighboursArray = ['Afghanistan', 'Pakistan', 'China', 'Bhutan', 'Nepal', 'Myanmar', 'Bangladesh', 'Maldives', 'Sri Lanka']
console.log(neighboursArray)

neighboursArray.push('Utopia')
console.log(neighboursArray)

neighboursArray.pop();
console.log(neighboursArray)

if (neighboursArray.includes('Germany')) {
    console.log('Germany Probably not a central European country :D')
}

console.log('Index of China', neighboursArray.indexOf('China'))
neighboursArray[2] = 'Republic of China';
console.log(neighboursArray)