"use strict";
const steps = [...document.querySelectorAll(".form-step")];
const nextButtons = [...document.querySelectorAll("[data-next]")];
const backButtons = [...document.querySelectorAll("[data-back]")];
const form = document.getElementById("multiStepForm");
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== index; });
    currentStep = index;
}
function isCurrentStepValid() {
    const inputs = [...steps[currentStep].querySelectorAll("input")];
    return inputs.every(input => input.checkValidity() && input.value.trim() !== "");
}
nextButtons.forEach(button => button.addEventListener("click", () => {
    const error = steps[currentStep].querySelector(".step-error");
    if (!isCurrentStepValid()) {
        error.textContent = "Please enter a valid value before continuing.";
        return;
    }
    error.textContent = "";
    showStep(currentStep + 1);
}));
backButtons.forEach(button => button.addEventListener("click", () => showStep(currentStep - 1)));
form.addEventListener("submit", event => {
    event.preventDefault();
    if (!isCurrentStepValid()) {
        steps[currentStep].querySelector(".step-error").textContent = "Please enter a valid password.";
        return;
    }
    document.getElementById("summary").textContent =
        `Name: ${document.getElementById("studentName").value}\nEmail: ${document.getElementById("studentEmail").value}\nPassword: ${"*".repeat(document.getElementById("studentPassword").value.length)}`;
    document.getElementById("summarySection").hidden = false;
    form.hidden = true;
});
showStep(0);
