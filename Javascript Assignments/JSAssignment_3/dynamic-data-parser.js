// Q1. Dynamic Data Parser
"use strict";
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const number = Number(value);
    const text = String(value);
    const boolean = Boolean(value);
    const isBlank = typeof value === "string" && value.trim() === "";
    const isValid = Number.isFinite(number) && !isBlank && value !== null && value !== undefined;

    console.log(`Value: ${text} | Number: ${number} | Boolean: ${boolean}`);
    if (isValid) {
        validNumbers.push(number);
    } else {
        invalidNumbers.push(value);
        console.log(`Invalid number: ${text}`);
    }
}
console.log(`Valid numbers: ${validNumbers.join(", ")}`);
console.log(`Invalid values: ${invalidNumbers.map(String).join(", ")}`);
