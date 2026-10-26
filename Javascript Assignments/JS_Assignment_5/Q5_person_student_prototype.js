"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Riya", "Computer Science");
student.showName();
student.showBranch();

console.log("Student inherits Person methods:", student instanceof Person);
console.log("Student prototype links to Person.prototype:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype);
