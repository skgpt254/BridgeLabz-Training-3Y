"use strict";
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return `${this.name} is working in ${this.department}.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    work() {
        return `${this.name} is managing ${this.teamSize} people in ${this.department}.`;
    }
}

const employees = [
    new Employee("Rohan", "Development"),
    new Manager("Ananya", "Engineering", 8),
    new Employee("Ishita", "Human Resources"),
    new Manager("Vikram", "Sales", 5)
];

// Same method call; the implementation depends on each object's runtime class.
employees.forEach(employee => console.log(employee.work()));
