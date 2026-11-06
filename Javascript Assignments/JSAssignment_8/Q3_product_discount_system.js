"use strict";
function Product(name, price) {
    if (!name || !Number.isFinite(price) || price < 0) {
        throw new Error("Provide a product name and a valid non-negative price.");
    }
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }
    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Keyboard", 1500),
    new Product("Headphones", 2400),
    new Product("Monitor", 12000)
];
[10, 15, 20].forEach((discount, index) => {
    const product = products[index];
    console.log(`${product.name}: ₹${product.price} - ${discount}% = ₹${product.applyDiscount(discount).toFixed(2)}`);
});

// Abstraction: callers use applyDiscount(percent) without handling its formula.
