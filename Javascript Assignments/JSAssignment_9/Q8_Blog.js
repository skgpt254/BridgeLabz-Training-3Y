$(document).ready(function () {
    // Add a new post at the end.
    $("#addPost").click(function () {
        var title = $("#postTitle").val().trim();

        if (title !== "") {
            var post = $("<article>").addClass("post").text(title);
            $("#posts").append(post);
            $("#postTitle").val("");
            highlightPosts();
        }
    });

    // Add a featured post at the beginning.
    $("#featuredPost").click(function () {
        $("#posts").prepend('<article class="post">Featured: Welcome to our blog</article>');
        highlightPosts();
    });

    // Remove the last post.
    $("#removePost").click(function () {
        $("#posts .post").last().remove();
    });

    // Add tags before and after the first post.
    $("#posts .post").first().before('<p class="tag">Latest Posts</p>');
    $("#posts .post").first().after('<p class="tag">Read more below.</p>');

    // Highlight posts containing selected keywords.
    function highlightPosts() {
        $(".post").each(function () {
            var title = $(this).text().toLowerCase();

            if (title.indexOf("javascript") !== -1 || title.indexOf("ajax") !== -1) {
                $(this).css("background", "#fff2a8");
            }
        });
    }

    highlightPosts();
});