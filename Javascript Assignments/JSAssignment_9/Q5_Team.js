$(document).ready(function () {
    // Highlight direct reports when a manager is clicked.
    $(".manager").click(function () {
        $(this).siblings(".report").toggleClass("highlight");
    });

    // Show contact information when an employee is hovered.
    $(".report").hover(
        function () { $(this).find(".contact").show(); },
        function () { $(this).find(".contact").hide(); }
    );

    // Change the background of all members in a department.
    $(".departmentName").click(function () {
        $(this).parent().children(".member").css("background", "#dcecff");
    });

    // Select a random employee and highlight their siblings.
    $("#randomEmployee").click(function () {
        var employees = $(".member");
        var number = Math.floor(Math.random() * employees.length);
        var selected = employees.eq(number);

        $(".member").removeClass("highlight");
        selected.siblings(".member").addClass("highlight");
    });

    // Use parent() and find() to collapse or expand team members.
    $("#collapseTeam").click(function () {
        $("#team").parent().find(".member").toggle();
    });
});