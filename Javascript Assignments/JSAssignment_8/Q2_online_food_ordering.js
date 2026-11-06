"use strict";
const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Sandwich", price: 90 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems, availableMenu) {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new Error("Order must contain at least one item.");
    }
    const priceList = orderItems.map(name => {
        const item = availableMenu.find(product =>
            product.name.toLowerCase() === name.toLowerCase());
        if (!item) throw new Error(`"${name}" is not available on the menu.`);
        return item.price;
    });
    const total = priceList.reduce((sum, price) => sum + price, 0);
    return { priceList, total };
}

try {
    const bill = calculateBill(["Burger", "Pizza", "Pasta"], menu);
    console.log("Prices:", bill.priceList);
    console.log("Total bill: ₹" + bill.total);
} catch (error) {
    console.log("Order error:", error.message);
}

try {
    calculateBill(["Burger", "Sushi"], menu);
} catch (error) {
    console.log("Invalid order:", error.message);
}
