// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const text = feedback.toLowerCase();

const hasNegativeWords = text.includes("bad") || text.includes("poor");

console.log(`Word count: ${words.length}`);
console.log(hasNegativeWords ? "Needs Improvement" : "Positive Feedback");
