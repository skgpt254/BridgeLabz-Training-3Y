"use strict";
class FormBuilder {
    constructor(fields, containerId) { this.fields = fields; this.container = document.getElementById(containerId); }
    buildForm() {
        this.container.innerHTML = `<form id="generatedForm">${this.fields.map((field, i) =>
            `<label for="field${i}">${field.label}</label><input id="field${i}" name="${field.name}" type="${["text","email","number","password"].includes(field.type) ? field.type : "text"}">`
        ).join("")}<button type="submit">Submit</button></form><pre id="formOutput"></pre>`;
        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            const data = this.getFormData();
            document.getElementById("formOutput").textContent = JSON.stringify(data, null, 2);
            console.log("Form data:", data);
        });
    }
    getFormData() {
        const data = {};
        this.fields.forEach((field, i) => data[field.name] = document.getElementById(`field${i}`).value);
        return data;
    }
}
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];
new FormBuilder(fields, "formContainer").buildForm();
