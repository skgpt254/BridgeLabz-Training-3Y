"use strict";
const form = document.getElementById("studentForm");
const fields = Object.fromEntries(["name", "email", "phone", "password"].map(id => [id, document.getElementById(id)]));
const patterns = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};
const errors = {
    name: "Use alphabets only.",
    email: "Enter a valid email address.",
    phone: "Enter exactly 10 digits.",
    password: "Include an uppercase letter, a number, and a special character."
};
function validate(id) {
    const valid = patterns[id].test(fields[id].value.trim());
    fields[id].style.borderColor = valid ? "green" : "red";
    document.getElementById(id + "Error").textContent = valid ? "" : errors[id];
    return valid;
}
form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = Object.keys(fields).map(validate).every(Boolean);
    document.getElementById("formResult").textContent = valid ? "Registration form is valid." : "Please correct the highlighted fields.";
    if (valid) console.log("Student:", Object.fromEntries(Object.keys(fields).map(id => [id, fields[id].value.trim()])));
});
Object.keys(fields).forEach(id => fields[id].addEventListener("input", () => validate(id)));
