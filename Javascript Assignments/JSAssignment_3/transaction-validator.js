// Q3. Transaction Validator
"use strict";
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];
const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) throw new Error("Null transaction");
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing id or amount");
        }
        if (transaction.amount < 0) throw new Error("Negative amount");
        valid.push(transaction);
    } catch (error) {
        invalid.push({ transaction, reason: error.message });
    }
}
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length}`);
// Debug: set a breakpoint at the first if and watch transaction, valid, and invalid.
