"use strict";
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log("----- MOVIE TICKET -----");
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket price: ₹${this.price.toFixed(2)}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket = new OnlineTicket("The Great Adventure", "B12", 250, 30);
ticket.printTicket();
console.log(`Convenience fee: ₹${ticket.convenienceFee}`);
console.log(`Total amount: ₹${ticket.getTotalAmount()}`);
console.log("Prototype method inherited:",
    MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype) &&
    typeof ticket.printTicket === "function");
