"use strict";

function applyOperation(numbers, operation) {
    const results = [];

    for (const number of numbers) {
        results.push(operation(number));
    }

    return results;
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number * number);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);
