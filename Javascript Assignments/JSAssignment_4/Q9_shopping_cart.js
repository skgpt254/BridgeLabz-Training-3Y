"use strict";
class Cart {
    constructor() { this.items = []; }
    addItem(name, price, quantity) {
        if (!name.trim() || !Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity < 1)
            throw new Error("Enter a name, non-negative price, and positive whole-number quantity.");
        this.items.push({ name, price, quantity });
    }
    getTotal() { return this.items.reduce((total, item) => total + item.price * item.quantity, 0); }
    applyCoupon(code) {
        if (!/^(SAVE20|DISC10)$/.test(code)) throw new Error("Use a valid coupon: SAVE20 or DISC10.");
        const discountPercent = code === "SAVE20" ? 20 : 10;
        const subtotal = this.getTotal();
        const discount = subtotal * discountPercent / 100;
        return { subtotal, coupon: code, discountPercent, discount, finalTotal: subtotal - discount };
    }
}
const cart = new Cart();
cart.addItem("T-shirt", 599, 2);
cart.addItem("Bottle", 250, 1);
cart.addItem("Notebook", 80, 3);
console.log("Cart items:", cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);
try {
    const result = cart.applyCoupon("SAVE20");
    console.log(`Coupon: ${result.coupon} (${result.discountPercent}% off)`);
    console.log(`Discount: ₹${result.discount.toFixed(2)}`);
    console.log(`Final total: ₹${result.finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(`Coupon error: ${error.message}`);
}
