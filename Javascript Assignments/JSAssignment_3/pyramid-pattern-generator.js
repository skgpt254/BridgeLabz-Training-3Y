// Q6. Pyramid Pattern Generator
"use strict";
const rowLimit = 5; // Change to choose the number of rows

for (let row = 1; row <= rowLimit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trim());
}
// Replacing let with var still prints the same pattern, but var is not block-scoped
