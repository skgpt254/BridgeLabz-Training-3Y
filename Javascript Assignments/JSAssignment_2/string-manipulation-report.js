// Q2. String Manipulation Report
const productName = " wireless headphones PRO ";

const words = productName.trim().toLowerCase().split(" ");
const title = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log(`Product: ${title}`);
console.log(`Length: ${title.length}`);
