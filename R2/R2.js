function calcVolume(width, height, depth) {
  return width * height * depth;
}

// basic
console.log(calcVolume(12, 30, 14));

// Passing arguments to the function from a variable:
const cube = [12, 30, 14];
calcVolume.apply(null, cube); // using "apply"
// using "spread operator"
console.log(calcVolume(...cube));
