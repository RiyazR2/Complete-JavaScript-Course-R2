'use strict'
/*JavaScript Fundamentals – Part 2

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
*/
/* WRONG CODE xxxxxxxxxxxx
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;


const checkWinner = function (avgDolhins, avgKoalas) {
    avgDolhins = calcAverage(44, 23, 71)
    avgKoalas = calcAverage(65, 54, 49)

    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    }
}

console.log(checkWinner(avgDolhins, avgKoalas))
*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

//Test Data 1
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

console.log('Score of Dolphins', scoreDolphins, 'Score of Koalas', scoreKoalas)
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log('No Teams win .....')
    }
}

checkWinner(scoreDolphins, scoreKoalas)

//Test Data 2

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
console.log('Score of Dolphins', scoreDolphins, 'Score of Koalas', scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/

let calcTip = function (bill) {
    let tip = (bill >= 50 && bill <= 300) ? (bill / 100) * 15 : (bill / 100) * 20;
    // let calcTipDesc = (`“The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}”`)
    return tip;
}

let billsArray = [125, 555, 44]
let tipsArray = [calcTip(billsArray[0]), calcTip(billsArray[1]), calcTip(billsArray[2])];

console.log(billsArray)
console.log(tipsArray)

let totalArray = [billsArray[0] + tipsArray[0], billsArray[1] + tipsArray[1], billsArray[2] + tipsArray[2]];
console.log(totalArray)


/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �
*/

const markObject = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

const johnObject = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

markObject.calcBMI()
johnObject.calcBMI()
console.log(markObject.BMI, johnObject.BMI)

if (johnObject.BMI > markObject.BMI) {
    console.log(`${johnObject.fullName}'s BMI (${johnObject.BMI}) is higher than ${markObject.fullName}'s (${markObject.BMI}) BMI !`)
} else if (johnObject.BMI < markObject.BMI) {
    console.log(`${markObject.fullName}'s BMI (${markObject.BMI}) is higher than ${johnObject.fullName}'s (${johnObject.BMI}) BMI !`)
} else { console.log("Both having same BMI !!!!") }


/*

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �

*/


const arrayBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const arrayTips = [];
const arrayTotals = [];

for (let i = 0; i < arrayBills.length; i++) {
    const tip = calcTip(arrayBills[i])
    arrayTips.push(tip)
    arrayTotals.push(tip + arrayBills[i])
}
console.log(arrayBills, arrayTips, arrayTotals)



const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    let avg = sum / arr.length;
    return avg

}

calcAverage2(arrayTotals)
console.log(calcAverage2(arrayTotals))