'use strict';


function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollUntilMax() {
    const sides = parseInt(prompt("Enter the number of sides on the dice:"));

    if (isNaN(sides) || sides <= 1) {
        alert("Please enter a valid number of sides (greater than 1).");
        return;
    }

    const rolls = [];
    let result;
    do {
        result = rollDice(sides);
        rolls.push(result);
    } while (result !== sides);

    const ul = document.getElementById("dice-rolls");
    for (let roll of rolls) {
        const li = document.createElement("li");
        li.textContent = roll;
        ul.appendChild(li);
    }
}

rollUntilMax();