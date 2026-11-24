$(document).ready(function () {
    $("#search").keyup(function () {
        var value = $(this).val();
        $("#loading").show();
        $.ajax({
            url: "http://localhost:3001/products",
            data: { q: value },
            success: function (products) {
                $("#loading").hide();
                $("#results").empty();
                if (products.length === 0) {
                    $("#results").text("No products found");
                } else {
                    products.forEach(function (product) {
                        $("#results").append("<p><img width='60' src='" + product.image + "'> " +
                            product.name + " - Rs. " + product.price + "</p>");
                    });
                }
            },
            error: function () {
                $("#loading").hide();
                $("#results").text("Could not load products.");
            }
        });
    });
});