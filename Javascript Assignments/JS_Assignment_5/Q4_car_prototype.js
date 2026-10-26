"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();

// Both objects share the same method through Car.prototype.
console.log(
    "Shared prototype method:",
    firstCar.getDetails === secondCar.getDetails
);
