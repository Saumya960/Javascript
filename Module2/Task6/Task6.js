"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
    const rolls = [];
    let result;

    do {
        result = rollDice();
        rolls.push(result);
    } while (result !== 6);

    const ul = document.getElementById("dice-rolls");
    for (let roll of rolls) {
        const li = document.createElement("li");
        li.textContent = roll;
        ul.appendChild(li);
    }
}

rollUntilSix();
