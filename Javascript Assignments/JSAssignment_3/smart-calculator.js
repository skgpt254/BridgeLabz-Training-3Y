// Q7. Smart Calculator
"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 2;
const operation = "divide"; // Try another operation from the array

try {
    let result;
    switch (operation) {
        case "add": result = num1 + num2; break;
        case "divide":
            if (num2 === 0) throw new Error("Cannot divide by zero");
            result = num1 / num2;
            break;
        case "power": result = Math.pow(num1, num2); break;
        case "root":
            if (num1 < 0) throw new Error("Cannot find a real root of a negative number");
            result = Math.sqrt(num1);
            break;
        case "subtract": result = num1 - num2; break;
        default: throw new Error("InvalidOperationError: unknown operation");
    }
    console.log(`${num1} ${operation} ${num2} = ${result}`);
} catch (error) {
    console.log(`Calculator error: ${error.message}`);
}
