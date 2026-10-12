const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1800 },
    { category: "Rent", amount: 9000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1200 }
];
let total = 0;
for (const expense of expenses) {
    total += expense.amount;
}
const average = total / expenses.length;
const tax = total * 0.10;
const finalAmount = total + tax;

console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
