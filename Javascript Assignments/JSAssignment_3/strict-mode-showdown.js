// Q8. Strict Mode Showdown
"use strict";

// Strict mode rejects duplicate parameter names, undeclared variables, and deleting variables.
// This corrected version uses unique parameters and a declared variable.
function demo(first, second) {
    let total = 10;
    console.log(`Parameters: ${first}, ${second}`);
    console.log(`Total: ${total}`);
}
demo(5, 10);

// To observe the original errors, test the original snippet separately with and without
// "use strict". Keep this file valid so it can run in strict mode.
