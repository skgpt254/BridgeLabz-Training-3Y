"use strict";
class BankAccount {
    #balance;
    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be non-negative.");
        }
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit must be greater than zero.");
        }
        this.#balance += amount;
        return this.#balance;
    }
    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal declined.");
        }
        this.#balance -= amount;
        return this.#balance;
    }
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);
console.log("Opening balance: ₹" + account.getBalance());
try {
    account.deposit(2000);
    console.log("After deposit: ₹" + account.getBalance());
    account.withdraw(1500);
    console.log("After withdrawal: ₹" + account.getBalance());
} catch (error) {
    console.log("Transaction error:", error.message);
}
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Invalid withdrawal:", error.message);
}
console.log("Final balance: ₹" + account.getBalance());
// #balance is private and is accessed through the class methods only.
