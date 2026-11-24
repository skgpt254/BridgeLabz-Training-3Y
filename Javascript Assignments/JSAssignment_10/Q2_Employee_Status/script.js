var api = "http://localhost:3002/employees";
function loadEmployees() {
    var request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = function () {
        if (request.status === 200) {
            showEmployees(JSON.parse(request.responseText));
        } else {
            document.getElementById("message").textContent = "Could not load employees.";
        }
    };
    request.send();
}
function showEmployees(list) {
    var area = document.getElementById("employees");
    area.innerHTML = "";
    list.forEach(function (employee) {
        var row = document.createElement("p");
        row.textContent = employee.name + " - " + employee.status + " ";
        var button = document.createElement("button");
        button.textContent = "Change Status";
        button.onclick = function () { changeStatus(employee); };
        row.appendChild(button);
        area.appendChild(row);
    });
}
function changeStatus(employee) {
    var oldStatus = employee.status;
    var newStatus = oldStatus === "active" ? "inactive" : "active";
    // Update the screen immediately before sending PATCH.
    employee.status = newStatus;
    showEmployees(getCurrentEmployees());
    var request = new XMLHttpRequest();
    request.open("PATCH", api + "/" + employee.id);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            loadEmployees();
            document.getElementById("message").textContent = "Status updated.";
        } else {
            loadEmployees();
            document.getElementById("message").textContent = "Update failed. Old status restored.";
        }
    };
    request.onerror = function () {
        loadEmployees();
        document.getElementById("message").textContent = "Network error. Old status restored.";
    };
    request.send(JSON.stringify({ status: newStatus }));
}
var currentEmployees = [];
function getCurrentEmployees() { return currentEmployees; }
var originalShowEmployees = showEmployees;
showEmployees = function (list) { currentEmployees = list; originalShowEmployees(list); };
loadEmployees();