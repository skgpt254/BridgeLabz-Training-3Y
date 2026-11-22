$(document).ready(function () {
    // Filter courses whenever a key is released.
    $("#search").keyup(function () {
        var value = $(this).val().toLowerCase();
        var count = 0;

        $(".course").each(function () {
            var name = $(this).text().toLowerCase();

            if (name.indexOf(value) !== -1) {
                $(this).show();
                $(this).css("background", "#fff2a8");
                count++;
            } else {
                $(this).hide();
                $(this).css("background", "");
            }
        });

        $("#count").text("Matched courses: " + count);
    });

    // Clear search and show all courses.
    $("#clearSearch").click(function () {
        $("#search").val("");
        $(".course").show().css("background", "");
        $("#count").text("Showing " + $(".course").length + " courses");
    });
});