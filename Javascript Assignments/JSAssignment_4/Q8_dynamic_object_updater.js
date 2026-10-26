"use strict";
const user = { name: "John", email: "john@mail.com", age: 21 };
const form = document.getElementById("userForm");
const nameInput = document.getElementById("userName");
const emailInput = document.getElementById("userEmail");
const ageInput = document.getElementById("userAge");
const output = document.getElementById("userOutput");
function displayUser() { output.textContent = JSON.stringify(user, null, 2); }
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;
displayUser();
form.addEventListener("submit", event => {
    event.preventDefault();
    const age = Number(ageInput.value);
    if (!nameInput.value.trim() || !emailInput.value.trim() || !Number.isInteger(age) || age < 0) {
        output.textContent = "Enter a name, email, and valid non-negative whole-number age.";
        return;
    }
    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = age;
    displayUser();
    console.log("Updated user object:", user);
});
