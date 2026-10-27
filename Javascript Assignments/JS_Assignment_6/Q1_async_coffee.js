"use strict";
function runCoffeeStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            console.log(`${stepName}...`);
            if (Math.random() < 0.2) reject(new Error(`${stepName} failed.`));
            else resolve();
        }, delay);
    });
}
runCoffeeStep("Boiling water")
    .then(() => runCoffeeStep("Brewing coffee"))
    .then(() => runCoffeeStep("Pouring coffee into a cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log(`Coffee process failed: ${error.message}`));
