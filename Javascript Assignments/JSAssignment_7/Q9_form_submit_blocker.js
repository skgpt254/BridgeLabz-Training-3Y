"use strict";
const form = document.getElementById("registrationForm");
const nameField = document.getElementById("fullName");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const result = document.getElementById("formResult");
const fields = [
    { input: nameField, errorId: "nameError", validate: value => value.trim() !== "", message: "Name is required." },
    { input: emailField, errorId: "emailError", validate: value => value.trim().includes("@"), message: "Enter an email containing @." },
    { input: passwordField, errorId: "passwordError", validate: value => value.length >= 6, message: "Password must be at least 6 characters." }
];
function validateField(field) {
    const valid = field.validate(field.input.value);
    document.getElementById(field.errorId).textContent = valid ? "" : field.message;
    field.input.setAttribute("aria-invalid", String(!valid));
    return valid;
}
fields.forEach(field => field.input.addEventListener("input", () => {
    validateField(field);
    result.textContent = "";
}));
form.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
        result.textContent = "";
        return;
    }
    result.textContent = "Form Submitted Successfully";
    console.log("Form submitted:", {
        name: nameField.value.trim(),
        email: emailField.value.trim()
    });
});
