"use strict";
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errors = [];
    if (!/^.{5,}$/.test(username)) errors.push("Username must contain at least 5 characters.");
    if (!/^.{8,}$/.test(password)) errors.push("Password must contain at least 8 characters.");
    if (!/\d/.test(password)) errors.push("Password must include a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");
    const result = document.getElementById("loginResult");
    result.textContent = errors.length ? errors.join(" ") : "Validation successful.";
    result.style.color = errors.length ? "red" : "green";
});
