const currentSalary = 50000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary += projectedSalary * annualIncrementRate / 100;
    salaryReport.push({ year: year, salary: Math.round(projectedSalary) });
}
console.table(salaryReport);
