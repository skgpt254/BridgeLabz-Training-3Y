"use strict";
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const body = document.body;

function setTheme(themeName) {
    // setAttribute stores the active theme on the body as requested.
    body.setAttribute("data-theme", themeName);
    body.setAttribute("data-current-theme", themeName);
    body.classList.remove("theme-light", "theme-dark", "theme-blue");
    body.classList.add(`theme-${themeName}`);
}
themeButtons.forEach(button => button.addEventListener("click", () => {
    setTheme(button.dataset.themeChoice);
}));
setTheme("light");
