"use strict";
console.log("Start");
setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise callback (microtask)"));
console.log("Synchronous log");
console.log("End");

// Expected order: Start, Synchronous log, End, Promise callback, setTimeout callback.
// Synchronous code runs first. After it finishes, JavaScript drains the microtask queue before processing the queued setTimeout macrotask.
