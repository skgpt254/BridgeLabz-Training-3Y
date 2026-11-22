// Version 1 controls the carousel and active widget.
jq1(document).ready(function () {
    var slide = 1;

    jq1("#nextSlide").click(function () {
        slide++;

        if (slide > 3) {
            slide = 1;
        }

        jq1("#carousel").text("Carousel slide " + slide);
    });

    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });
});

// Version 2 controls the notification and hover tooltips.
jq2(document).ready(function () {
    jq2("#showNotice").click(function () {
        jq2("#notice").fadeIn();
    });

    jq2("#closeNotice").click(function () {
        jq2("#notice").fadeOut();
    });

    jq2(".widget").hover(
        function () {
            var message = jq2(this).attr("title");
            jq2(this).append('<span class="tip"> - ' + message + '</span>');
        },
        function () {
            jq2(this).find(".tip").remove();
        }
    );
});