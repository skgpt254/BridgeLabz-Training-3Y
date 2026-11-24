$(document).ready(function () {
    loadTasks();
    $("#filter").change(loadTasks);
    function loadTasks() {
        var choice = $("#filter").val();
        var url = "http://localhost:3003/tasks";
        if (choice === "true") url += "?completed=true";
        else if (choice !== "all") url += "?priority=" + choice;
        $.ajax({
            url: url,
            success: function (tasks) {
                $("#tasks").empty();
                tasks.forEach(function (task) {
                    var box = $("<input type='checkbox'>").prop("checked", task.completed);
                    box.change(function () { updateTask(task.id, box.prop("checked")); });
                    $("#tasks").append($("<li>").append(box).append(" " + task.title + " (" + task.priority + ")"));
                });
            },
            error: function () { $("#message").text("Could not load tasks."); }
        });
    }
    function updateTask(id, completed) {
        $.ajax({
            url: "http://localhost:3003/tasks/" + id,
            type: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: completed }),
            success: function () { $("#message").text("Task updated."); },
            error: function () { $("#message").text("Update failed."); loadTasks(); }
        });
    }
});