$(document).ready(function () {
    // Sample emails used to demonstrate the uniqueness check.
    var usedEmails = ["test@example.com", "admin@example.com"];

    $("#registrationForm").submit(function (event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var password = $("#password").val();
        var valid = true;

        $("input").removeClass("invalid");
        $("#result").text("");

        // Name must not be empty.
        if (name === "") {
            $("#name").addClass("invalid");
            valid = false;
        }

        // Check the email format.
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#email").addClass("invalid");
            valid = false;
        } else if (usedEmails.indexOf(email.toLowerCase()) !== -1) {
            $("#email").addClass("invalid");
            $("#result").text("This email is already registered.");
            valid = false;
        }

        // Password must have at least 8 characters.
        if (password.length < 8) {
            $("#password").addClass("invalid");
            valid = false;
        }

        if (valid) {
            $("#result").text("Registration successful!");
        } else if ($("#result").text() === "") {
            $("#result").text("Please correct the fields marked in red.");
        }
    });
});