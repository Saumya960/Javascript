'use strict'
function even(arr) {
  const evenNumbers = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const numbers = [ 2,347,364,3, 7899, 3536, 67, 89, 3];
console.log(numbers);
console.log(even(numbers));