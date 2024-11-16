"use strict";

const form = document.getElementById("source");
const target = document.getElementById("target");

function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.querySelector('[name="firstname"]').value;
    const lastName = document.querySelector('[name="lastname"]').value;

    target.textContent = `Your name is ${firstName} ${lastName}`;
}

form.addEventListener("submit", handleFormSubmit);