// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    discountedTotal += product.price * (1 - discount);
}

// Apply the extra discount when the original cart total is over ₹50,000.
if (cartTotal > 50000) {
    discountedTotal *= 0.95;
}

console.log(`Cart total: ₹${cartTotal.toFixed(2)}`);
console.log(`Final total: ₹${discountedTotal.toFixed(2)}`);
