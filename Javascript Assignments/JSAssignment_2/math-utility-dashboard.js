// Q3. Math Utility Dashboard
const x = 16.75;
const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Number: ${x}
Rounded: ${rounded}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${power.toFixed(2)}
Random (10–50): ${randomNumber}`);
