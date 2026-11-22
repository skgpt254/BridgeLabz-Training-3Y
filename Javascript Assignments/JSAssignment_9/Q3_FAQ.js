$(document).ready(function () {
    // Click a question to show or hide its answer.
    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    // Change question color on hover.
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    // Double-click to close every answer.
    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    // Highlight the question when the input gets focus.
    $(".answerInput").focus(function () {
        $(this).closest(".faq").find(".question").css("background", "#fff2a8");
    });

    // Reset the background when focus is lost.
    $(".answerInput").blur(function () {
        $(this).closest(".faq").find(".question").css("background", "");
    });
});