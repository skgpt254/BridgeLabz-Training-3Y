$(document).ready(function () {
    // Add a discount style using an attribute selector.
    $('[data-discount="yes"]').addClass("discount");

    // Highlight a product when it is clicked.
    $(".product").click(function () {
        $(".product").removeClass("chosen");
        $(this).addClass("chosen");

        // Check the stock data attribute.
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry, this product is out of stock.");
        }
    });

    // Show extra details when the mouse enters the product.
    $(".product").mouseenter(function () {
        $(this).find(".details").show();
    });

    $(".product").mouseleave(function () {
        $(this).find(".details").hide();
    });

    // Toggle the favorite selected class.
    $(".favorite").click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
    });
});