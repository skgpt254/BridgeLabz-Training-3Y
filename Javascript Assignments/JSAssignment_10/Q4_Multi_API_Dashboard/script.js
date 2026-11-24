Promise.all([
    fetch("http://localhost:3004/users"),
    fetch("http://localhost:3004/orders"),
    fetch("http://localhost:3004/products")
])
.then(function (responses) {
    responses.forEach(function (response) {
        if (!response.ok) throw new Error("Request failed");
    });
    return Promise.all(responses.map(function (response) { return response.json(); }));
})
.then(function (data) {
    document.getElementById("users").textContent = data[0].length;
    document.getElementById("orders").textContent = data[1].length;
    document.getElementById("products").textContent = data[2].length;
})
.catch(function () {
    document.getElementById("warning").textContent = "Some data could not be loaded.";
});