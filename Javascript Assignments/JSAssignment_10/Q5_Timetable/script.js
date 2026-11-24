var day = document.getElementById("day");
day.addEventListener("change", loadTimetable);
loadTimetable();
function loadTimetable() {
    fetch("http://localhost:3005/timetable?day=" + day.value)
    .then(function (response) { return response.json(); })
    .then(function (classes) {
        var area = document.getElementById("classes");
        area.innerHTML = "";
        if (classes.length === 0) {
            area.textContent = "No classes today.";
        } else {
            classes.forEach(function (lesson) {
                var p = document.createElement("p");
                p.textContent = lesson.subject + " - " + lesson.faculty + " - " + lesson.time;
                area.appendChild(p);
            });
        }
    })
    .catch(function () { document.getElementById("classes").textContent = "Could not load timetable."; });
}