"use strict";
const dropdown = document.getElementById("customDropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionsList = document.getElementById("dropdownOptions");
dropdownButton.addEventListener("click", () => {
    optionsList.hidden = !optionsList.hidden;
    dropdownButton.setAttribute("aria-expanded", String(!optionsList.hidden));
});
optionsList.addEventListener("click", event => {
    const option = event.target.closest("button[data-value]");
    if (!option) return;
    dropdownButton.textContent = option.textContent;
    optionsList.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
});
// Capturing phase: close before the click reaches the target when clicking outside.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        optionsList.hidden = true;
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
