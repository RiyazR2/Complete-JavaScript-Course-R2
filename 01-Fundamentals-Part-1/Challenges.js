/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 
*/

// test data 1
// let Mark_Mass = 78;
// let Mark_Height = 1.69;
// let John_Mass = 92;
// let John_Height = 1.95;

// test data 2
let Mark_Mass = 95;
let Mark_Height = 1.88;
let John_Mass = 85;
let John_Height = 1.76;

let Mark_BMI = Mark_Mass / Mark_Height ** 2;
let John_BMI = John_Mass / (John_Height * John_Height);

console.log(Mark_BMI);
console.log(John_BMI);

let markHigherBMI = Mark_BMI > John_BMI;
console.log(markHigherBMI);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

if (Mark_BMI > John_BMI) {
  console.log(`Mark's BMI (${Mark_BMI}) is Higher than John's (${John_BMI})`);
} else {
  console.log(
    `John's BMI (${John_BMI}) is Higher tha Mark's BMI (${Mark_BMI})`
  );
}
