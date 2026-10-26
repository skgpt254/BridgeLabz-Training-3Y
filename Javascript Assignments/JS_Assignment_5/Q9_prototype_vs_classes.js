"use strict";

// Version 1: constructor functions and prototypes.
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    return `Branch: ${this.branch}`;
};

const prototypeStudent = new Student("Riya", "Computer Science");

// Version 2: ES6 classes using extends and super().
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        return `Name: ${this.name}`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        return `Branch: ${this.branch}`;
    }
}

const classStudent = new StudentClass("Riya", "Computer Science");

console.log("Prototype version:", prototypeStudent.showName(), "|", prototypeStudent.showBranch());
console.log("ES6 class version:", classStudent.showName(), "|", classStudent.showBranch());
console.log("Both versions produce matching details:",
    prototypeStudent.showName() === classStudent.showName() &&
    prototypeStudent.showBranch() === classStudent.showBranch());
