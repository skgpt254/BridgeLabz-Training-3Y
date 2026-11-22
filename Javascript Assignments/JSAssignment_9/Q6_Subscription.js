$(document).ready(function () {
    // on() also works for topic buttons added later.
    $("#topics").on("click", ".topic", function () {
        $(this).toggleClass("subscribed");

        if ($(this).hasClass("subscribed")) {
            $("#status").text("Subscribed to " + $(this).text());
        } else {
            $("#status").text("Unsubscribed from " + $(this).text());
        }
    });

    // Add a new topic button.
    $("#addTopic").click(function () {
        var name = $("#newTopic").val().trim();

        if (name !== "") {
            var newButton = $("<button>").addClass("topic").text(name);
            $("#topics").append(newButton);
            $("#status").text("New topic added.");
            $("#newTopic").val("");
        } else {
            $("#status").text("Please enter a topic.");
        }
    });

    // Detach the event with off() and remove the selected topic.
    $("#removeButton").click(function () {
        var name = $("#removeTopic").val().trim().toLowerCase();

        $("#topics .topic").each(function () {
            if ($(this).text().toLowerCase() === name) {
                $(this).off("click");
                $(this).remove();
            }
        });

        $("#status").text("Topic removed if it was found.");
        $("#removeTopic").val("");
    });
});