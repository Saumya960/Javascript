"use strict";

const numbers = [];

while (true) {

    const input = parseFloat(prompt("Enter a number (0 to stop):"));

    if (input === 0) {
        break;
    }
    numbers.push(input);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
for (let number of numbers) {
    console.log(number);
}