"use strict";
const products = [
    { id: 1, name: "Keyboard", category: "Electronics", price: 1500, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 18 },
    { id: 3, name: "Notebook", category: "Stationery", price: 80, stock: 4 },
    { id: 4, name: "Pen Pack", category: "Stationery", price: 120, stock: 25 },
    { id: 5, name: "Office Chair", category: "Furniture", price: 4500, stock: 7 },
    { id: 6, name: "Desk", category: "Furniture", price: 6200, stock: 12 }
];

const LOW_STOCK_LIMIT = 10; 

function getLowStockProducts(list) {
    return list.filter(product => product.stock < LOW_STOCK_LIMIT);
}
function sortProductsByPrice(list) {
    return [...list].sort((a, b) => a.price - b.price);
}
function calculateTotalInventoryValue(list) {
    return list.reduce((total, product) => total + product.price * product.stock, 0);
}
function groupByCategory(list) {
    return list.reduce((groups, product) => {
        if (!groups[product.category]) groups[product.category] = [];
        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("LOW STOCK PRODUCTS");
console.table(getLowStockProducts(products));
console.log("SORTED BY PRICE");
console.table(sortProductsByPrice(products));
console.log("TOTAL INVENTORY VALUE: ₹" + calculateTotalInventoryValue(products).toFixed(2));
console.log("GROUPED BY CATEGORY");
Object.entries(groupByCategory(products)).forEach(([category, items]) => {
    console.log(category);
    console.table(items);
});
