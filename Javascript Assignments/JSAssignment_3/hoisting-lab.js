// Q5. Hoisting Lab
"use strict";
console.log(score); // undefined: var is hoisted and starts as undefined
announce();
var score = 50;
function announce() {
    console.log("Game started");
}

// let is unavailable before its declaration, so initialize it before calling startGame()
let status = "ready";
function startGame() {
    console.log(status);
}
startGame();

// Arrow functions are stored in a variable and cannot be called before initialization
const announceArrow = () => console.log("Game started with arrow function");
announceArrow();
