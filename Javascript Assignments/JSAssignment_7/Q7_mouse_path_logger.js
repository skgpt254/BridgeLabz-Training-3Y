"use strict";
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
trackingBox.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
trackingBox.addEventListener("dblclick", event => {
    const bounds = trackingBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "red-dot";
    dot.style.left = `${event.clientX - bounds.left}px`;
    dot.style.top = `${event.clientY - bounds.top}px`;
    trackingBox.append(dot);
});
