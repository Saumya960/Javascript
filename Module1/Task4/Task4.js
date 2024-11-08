'use strict';

window.onload = function sortStudent() {
    // Prompt the user to enter their name
    const name = prompt("Please enter your name:");

    // Check if name is not empty or null
    if (!name) {
        document.getElementById("result").innerText = "You didn't enter a name!";
        return;
    }

    // Generate a random number between 1 and 4
    const randomNum = Math.floor(Math.random() * 4) + 1;

    let house; // Variable to store the house name

    // Assign the house based on the random number
    switch (randomNum) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
        default:
            house = "Unknown House"; // This should never happen
    }

    // Display the result
    document.getElementById("result").innerText = `${name}, you are ${house}!`;
}