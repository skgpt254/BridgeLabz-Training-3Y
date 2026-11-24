var api = "http://localhost:3006/users";
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    // Check email first. Only send POST if it is new.
    axios.get(api, { params: { email: email } })
    .then(function (response) {
        if (response.data.length > 0) {
            document.getElementById("message").textContent = "Email already registered.";
        } else {
            return axios.post(api, { name: name, email: email });
        }
    })
    .then(function (response) {
        if (response) {
            document.getElementById("message").textContent = "Registration successful!";
            document.getElementById("form").reset();
        }
    })
    .catch(function () {
        document.getElementById("message").textContent = "Could not register. Check JSON Server.";
    });
});