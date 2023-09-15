'use strict'
/*
JavaScript Fundamentals – Part 2
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
