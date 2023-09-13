//Assignment 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "INDIA";
let continent = "Asia";
let PopulationINDIA = 1431127090;
console.log(
  country,
  "Country\n",
  continent,
  "Continent\n",
  PopulationINDIA,
  "Population of India"
);

//Assignment 2
// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = false;
let language;
PopulationINDIA = 1428627663;

console.log(
  "Country = ",
  country,
  typeof country,
  "\nis Island = ",
  isIsland,
  typeof isIsland,
  "\nLanguage = ",
  language,
  typeof language,
  "\nPopulation = ",
  PopulationINDIA,
  typeof PopulationINDIA
);

/*
// Assignments 3
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/
language = "Hindi";
// const country = "INDIA"; //
// const continent = "Asia"; //
// const isIsland = false; //
console.log(language);

/*
Assignment 4
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
let half_PopulationINDIA = PopulationINDIA / 2;
console.log(half_PopulationINDIA, "Half of the Population of India");
half_PopulationINDIA++;
console.log(
  half_PopulationINDIA,
  " After Increase the population of country by 1"
);

let Finland = 6000000;
console.log(
  "Population of Finland ",
  Finland,
  "\nIndia have more people than Finland?",
  PopulationINDIA > Finland
);
console.log(
  "Average Population of Country is 33 Millions",
  3300000,
  "\n India have less people than the average country?",
  PopulationINDIA < 3300000
);

let Description =
  country +
  " is in " +
  continent +
  " and its more than Half of Population " +
  half_PopulationINDIA +
  " can speak " +
  language;
console.log(Description);

//Assignment 5 LECTURE: Strings and Template Literals
//  1. Recreate the 'description' variable from the last assignment, this time
//  using the template literal syntax

Description = `${country} is in ${continent} and its more than Half of Population ${half_PopulationINDIA} can speak ${language}`;
console.log(Description);

/*
// Assognment 6 LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
*/

//this temporary data for task 2 of this assignment
// PopulationINDIA = 1300000;
// PopulationINDIA = 13000000;

if (PopulationINDIA > 3300000) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country} population is 22 million below average`);
}

/*
// Assignment 7 LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617 or 191317 (right ans: 617)
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //NaN (right ans: false)
console.log(5 + 6 + "4" + 9 - 4 - 2); //11442 (right ans: 1143)
