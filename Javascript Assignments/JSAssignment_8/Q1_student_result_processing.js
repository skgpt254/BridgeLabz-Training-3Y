"use strict";
const GRADE = { A: 80, B: 70, C: 60 };

class Student {
    constructor(name, marks) {
        if (!Array.isArray(marks) || marks.length === 0 ||
            !marks.every(mark => Number.isFinite(mark) && mark >= 0 && mark <= 100)) {
            throw new Error("Marks must be a non-empty array of numbers from 0 to 100.");
        }
        this.name = name;
        this.marks = [...marks];
    }
    calculateAverage() {
        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }
    getGrade() {
        const average = this.calculateAverage();
        if (average >= GRADE.A) return "A";
        if (average >= GRADE.B) return "B";
        if (average >= GRADE.C) return "C";
        return "F";
    }
}

const students = [
    new Student("Aarav", [92, 85, 88, 95]),
    new Student("Meera", [74, 78, 72, 80]),
    new Student("Kabir", [45, 55, 50, 48])
];

console.log("STUDENT RESULT REPORT");
students.forEach(student => console.log({
    name: student.name,
    marks: student.marks,
    average: student.calculateAverage().toFixed(2),
    grade: student.getGrade()
}));
