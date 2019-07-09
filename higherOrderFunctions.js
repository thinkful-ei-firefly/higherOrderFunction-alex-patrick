'use strict';

//Function as arguments

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

function repeat(fn, n) {
  for (let i = 0; i <= n; i++) {
    fn();
  }
}

repeat(hello,5);

repeat(goodbye, 5);

//Function as arguments (2)

function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
}); 

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//Function as return values
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
    return function(location) {
      warningCounter++;

      if (warningCounter === 1) {
       console.log(`warningCounter has triggered ${warningCounter} time(s)`);
      }

      if (warningCounter === 0 || warningCounter >= 2) {
        console.log("warningCounter has triggered abc time(s)");
      }

      console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado sighting');
const thunderstormWarning = hazardWarningCreator('Strong winds');

rocksWarning('Main St');
tornadoWarning('Pacific Ave');
thunderstormWarning('Centinela Ave');