$(document).ready(function () {
    // Hide one banner.
    $(".hide").click(function () {
        $(this).closest(".banner").hide();
    });

    // Show all banners.
    $("#showAll").click(function () {
        $(".banner").show();
    });

    $("#slideUp").click(function () {
        $(".banner:visible").slideUp();
    });

    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    $("#fadeOut").click(function () {
        $(".banner:visible").fadeOut();
    });

    $("#fadeIn").click(function () {
        $(".banner").fadeIn();
    });

    // Rotate banners every five seconds.
    var current = 0;
    $(".banner").hide().eq(current).fadeIn();

    setInterval(function () {
        $(".banner").eq(current).fadeOut(400, function () {
            current++;

            if (current >= $(".banner").length) {
                current = 0;
            }

            $(".banner").eq(current).fadeIn();
        });
    }, 5000);
});