// Q10. Departmental Employee Evaluator
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (const [name, score] of departments) {
    let result;

    if (score >= 90) {
        result = "Excellent";
    } else if (score >= 75) {
        result = "Good";
    } else if (score >= 60) {
        result = "Average";
    } else {
        result = "Needs Improvement";
    }

    console.log(`${name}: ${score} - ${result}`);
}
