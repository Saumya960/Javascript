"use strict";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateButton = document.getElementById("start");
const resultParagraph = document.getElementById("result");

function calculate() {

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = "Please enter valid numbers.";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "div":
      if (num2 === 0) {
        result = "Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operation";
  }

  resultParagraph.textContent = `Result: ${result}`;
}

calculateButton.addEventListener("click", calculate);