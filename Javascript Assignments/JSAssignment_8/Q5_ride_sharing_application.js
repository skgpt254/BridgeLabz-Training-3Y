"use strict";
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
    showProfile() {
        return `${this.name} (rating ${this.rating}/5)`;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
    showDriverDetails() {
        return `${this.showProfile()} | ${this.vehicle} | ${this.vehicleNumber}`;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance, driver) {
        if (distance === undefined || distance === null || distance === "") {
            throw new Error("Trip distance must be provided.");
        }
        const value = Number(distance);
        if (!Number.isFinite(value) || value < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = value;
        this.driver = driver;
    }
    calculateFare() {
        const FARE_PER_KM = 12; 
        return this.distance * FARE_PER_KM;
    }
}

const driver = new Driver("Arjun", 4.8, "Sedan", "UP32 AB 1234");
try {
    const trip = new Trip("Hazratganj", "Gomti Nagar", 8, driver);
    console.log("Driver:", driver.showDriverDetails());
    console.log(`Trip: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log(`Fare: ₹${trip.calculateFare().toFixed(2)}`);
} catch (error) {
    console.log("Trip error:", error.message);
}

[-5, undefined].forEach(distance => {
    try {
        new Trip("A", "B", distance, driver);
    } catch (error) {
        console.log("Invalid trip:", error.message);
    }
});
