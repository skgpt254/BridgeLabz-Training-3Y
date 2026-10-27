"use strict";
const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

gallery.addEventListener("click", event => {
    const image = event.target.closest("img");
    if (!image) return;
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.hidden = false;
});
modal.addEventListener("click", () => { modal.hidden = true; });
document.querySelector(".modal-content").addEventListener("click", event => {
    event.stopPropagation();
});
modalClose.addEventListener("click", () => { modal.hidden = true; });
document.addEventListener("keydown", event => {
    if (event.key === "Escape") modal.hidden = true;
});
