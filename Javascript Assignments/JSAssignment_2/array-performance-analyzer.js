// Q4. Array Performance Analyzer
const scores = [];

// Generate 8 scores from 30 to 100.
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;
const passed = scores.filter(score => score >= 50);
const report = scores.map((score, index) => ({
    student: index + 1,
    score,
    result: score >= 50 ? "Passed" : "Failed"
}));

console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest: ${highest} | Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)} | Passed: ${passed.length}`);
console.table(report);
