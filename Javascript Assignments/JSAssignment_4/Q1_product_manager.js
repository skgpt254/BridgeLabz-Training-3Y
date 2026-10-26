"use strict";
class Product {
    constructor(id, name, price, category) {
        Object.assign(this, { id, name, price, category });
    }
    applyDiscount(percent) {
        if (percent < 0 || percent > 100) throw new Error("Discount must be 0–100.");
        this.price -= this.price * percent / 100;
    }
    getDetails() {
        return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
    }
}
const products = [
    new Product(1, "Keyboard", 850, "Accessories"),
    new Product(2, "Monitor", 6500, "Electronics"),
    new Product(3, "Headphones", 1450, "Accessories"),
    new Product(4, "USB Cable", 250, "Accessories")
];
products[1].applyDiscount(10);
console.log("All products:");
products.forEach(product => console.log(product.getDetails()));
console.log("\nProducts priced above ₹1000:");
products.filter(product => product.price > 1000)
    .forEach(product => console.log(product.getDetails()));
