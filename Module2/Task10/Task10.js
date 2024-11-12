'use strict';

function voting() {
    const numCandidates = parseInt(prompt("Enter the number of candidates:"));
    const candidates = [];

    for (let i = 1; i <= numCandidates; i++) {
        const name = prompt(`Enter the name for candidate ${i}:`);
        candidates.push({
            name: name,
            votes: 0
        });
    }

    const numVoters = parseInt(prompt("Enter the number of voters:"));

    for (let i = 1; i <= numVoters; i++) {
        const vote = prompt(`Voter ${i}: Who will you vote for? (Enter candidate name)`);
        if (vote !== "") {

            const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes += 1;
            } else {
                console.log(`Invalid candidate: ${vote}`);
            }
        } else {
            console.log(`Voter ${i} did not vote.`);
        }
    }

    candidates.sort((a, b) => b.votes - a.votes);

    const winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    console.log("Results:");
    for (const candidate of candidates) {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    }
}

voting();