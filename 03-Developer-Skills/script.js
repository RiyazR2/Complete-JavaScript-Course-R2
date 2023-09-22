'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2023 - birthYear;
/*
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temprature amplitude. Keep in mind that sometimes there might be a sensor error."

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp
// - How to compute max and min temprature?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

// PROBLEM 2
//Function should now receive 2 arrays of temp

// 1) Understand the problem
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// - Merge Two Arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

*/

//Debuging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degree celsius'),
    // C) FIX BUG
    // value: Number(prompt('Degree celsius')),
    value: 10,
  };

  console.log(measurement);

  // B) FIND BUG
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(measureKelvin());

//
