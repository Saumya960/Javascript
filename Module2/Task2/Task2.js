'use strict';
const numParticipants = parseInt(prompt("Enter the number of participants:"));


let participants = [];

for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}


participants.sort();

let listHTML = "<ol>";
for (let name of participants) {
    listHTML += `<li>${name}</li>`;
}
listHTML += "</ol>";


document.getElementById("participants-list").innerHTML = listHTML