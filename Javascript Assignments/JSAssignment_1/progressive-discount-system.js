const totalPurchaseAmount = 6500;
let discountPercentage;

if (totalPurchaseAmount >= 10000) {
    discountPercentage = 25;
}
else if (totalPurchaseAmount >= 5000) {
    discountPercentage = 15;
}
else if (totalPurchaseAmount >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

const discountAmount = totalPurchaseAmount * discountPercentage / 100;
const finalPrice = Math.round(totalPurchaseAmount - discountAmount);
console.log(`Original total: ₹${Math.round(totalPurchaseAmount)}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Discount amount: ₹${Math.round(discountAmount)}`);
console.log(`Final price after discount: ₹${finalPrice}`);
