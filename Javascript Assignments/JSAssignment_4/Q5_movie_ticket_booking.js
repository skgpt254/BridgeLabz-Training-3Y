"use strict";
const form = document.getElementById("bookingForm");
form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seats = Number(document.getElementById("seats").value);
    const errors = [];
    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) errors.push("Name must contain alphabets only.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email.");
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push("Seats must be a whole number from 1 to 10.");
    const output = document.getElementById("bookingResult");
    if (errors.length) { output.textContent = errors.join(" "); return; }
    const booking = { name, email, seats };
    output.textContent = `Booking confirmed!\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log("Booking object:", booking);
});
