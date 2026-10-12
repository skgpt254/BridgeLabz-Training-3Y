const marks = [88, 91, 76, 84, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = totalMarks / (marks.length * 100) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

let result;
if (hasFailedSubject) {
    result = "Detained";
}
else if (percentage >= 85) {
    result = "Promoted with Distinction";
}
else if (percentage >= 50) {
    result = "Promoted";
}
else {
    result = "Detained";
}

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
