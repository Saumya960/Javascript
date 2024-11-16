"use strict";

const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener("mouseover", () => {
  target.src = "img/picB.jpg"; // Change to picB.jpg
});

trigger.addEventListener("mouseout", () => {
  target.src = "img/picA.jpg"; // Change back to picA.jpg
});