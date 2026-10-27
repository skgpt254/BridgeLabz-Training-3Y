"use strict";
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
const addProductButton = document.getElementById("addProductButton");
let nextProductId = 1;
let editingItem = null;

function saveEditedItem(item) {
    if (!item) return;
    const input = item.querySelector(".edit-input");
    const label = item.querySelector(".product-name");
    if (input && label) {
        const newName = input.value.trim();
        if (newName) label.textContent = newName;
        item.classList.remove("editing");
        input.remove();
        label.hidden = false;
    }
    if (editingItem === item) editingItem = null;
}
function startEditing(item) {
    if (editingItem && editingItem !== item) saveEditedItem(editingItem);
    const label = item.querySelector(".product-name");
    if (!label || item.classList.contains("editing")) return;
    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = label.textContent;
    label.hidden = true;
    label.after(input);
    item.classList.add("editing");
    editingItem = item;
    input.focus();
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") saveEditedItem(item);
        if (event.key === "Escape") {
            input.value = label.textContent;
            saveEditedItem(item);
        }
    });
}
function addProduct(name) {
    const cleanName = name.trim();
    if (!cleanName) return;
    const item = document.createElement("li");
    item.dataset.productId = String(nextProductId++);
    const label = document.createElement("span");
    label.className = "product-name";
    label.textContent = cleanName;
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";
    item.append(label, editButton, deleteButton);
    productList.append(item);
}
addProductButton.addEventListener("click", () => {
    addProduct(productInput.value);
    productInput.value = "";
    productInput.focus();
});
productInput.addEventListener("keydown", event => {
    if (event.key === "Enter") addProductButton.click();
});

// One parent listener handles all current and future Edit/Delete buttons.
productList.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const item = button.closest("li");
    if (button.dataset.action === "edit") startEditing(item);
    if (button.dataset.action === "delete") {
        if (editingItem === item) editingItem = null;
        item.remove();
    }
});
document.addEventListener("click", event => {
    if (editingItem && !editingItem.contains(event.target)) saveEditedItem(editingItem);
});
