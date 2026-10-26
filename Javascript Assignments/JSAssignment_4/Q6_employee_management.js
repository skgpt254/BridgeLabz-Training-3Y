"use strict";
class Employee {
    constructor(id, name, department, salary) { Object.assign(this, { id, name, department, salary }); }
    getAnnualSalary() { return this.salary * 12; }
    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
    getDetails() { return `${this.id} | ${this.name} | ${this.department} | Monthly ₹${this.salary.toFixed(2)} | Annual ₹${this.getAnnualSalary().toFixed(2)}`; }
}
const employees = [
    new Employee(1, "Amit", "IT", 45000), new Employee(2, "Sara", "HR", 40000),
    new Employee(3, "Kiran", "Finance", 48000), new Employee(4, "Neha", "IT", 52000),
    new Employee(5, "Ravi", "Sales", 38000)
];
employees[0].applyBonus(10); // Example: apply a 10% bonus to one employee.
console.log("Employee annual salaries:");
employees.forEach(employee => console.log(employee.getDetails()));
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`\nTotal annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
