// Q1. Scope Conflict Resolver
let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus: ₹${bonus}`);
