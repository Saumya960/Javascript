'use strict';

const numbers = [];

while (true) {
    const input = parseFloat(prompt("Enter a number:"));

    if (numbers.includes(input)) {
        alert(`The number ${input} has already been given. Stopping the program.`);
        break;
    }
    numbers.push(input);
}

numbers.sort((a, b) => a - b);


console.log("All entered numbers in ascending order:");
for (let number of numbers) {
    console.log(number);
}