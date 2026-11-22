$(document).ready(function () {
    // Show greeting based on the current time.
    var hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    } else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    } else {
        $("#greeting").text("Good Evening!");
    }

    // Change greeting to a motivational quote.
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and keep learning!");
    });

    // Show or hide the welcome message.
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Show an alert when the greeting is clicked.
    $("#greeting").click(function () {
        alert("Welcome to our website!");
    });
});