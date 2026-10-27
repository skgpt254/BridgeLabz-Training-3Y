"use strict";
const textArea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maxCharacters = 100;

function updateCounter() {
    const remaining = maxCharacters - textArea.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    counter.classList.toggle("limit", remaining === 0);
}
textArea.addEventListener("input", updateCounter);
textArea.addEventListener("beforeinput", event => {
    if (textArea.value.length >= maxCharacters && event.inputType.startsWith("insert")) {
        event.preventDefault();
    }
});
resetButton.addEventListener("click", () => {
    textArea.value = "";
    updateCounter();
    textArea.focus();
});
updateCounter();
