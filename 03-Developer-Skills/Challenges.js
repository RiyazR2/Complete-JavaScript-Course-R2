// Coding Challenge #1

/*

Given an array of forecasted maximum tempratures, the thermometer displays a string with these tempratures.

Example: [17, 21, 23]] will print "...17°C in 1 Days ... 21°C in 2 Days ... 23°C in Days 3 ..."

Create a function 'printForecast which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understand the problem
// -  Array tronsformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string wit °C
// -  String needs to contain day (index + 1)
// - Add ...between elements and start end of string
// - Log String to Console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}`);

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
