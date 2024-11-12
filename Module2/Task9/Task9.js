'use strict';
function even(arr) {
  const evenNumbers = [];
  for (const number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const numbers = [ 2, 17, 34, 3, 49, 36, 67, 89, 3];
console.log(numbers);
console.log(even(numbers));