"use strict";
// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
// Synchronous statements run first. Promise callbacks are microtasks and are
// drained after the current script; setTimeout callbacks are macrotasks.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
