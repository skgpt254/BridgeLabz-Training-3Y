"use strict";
const searchInput = document.getElementById("studentSearch");
const studentRows = [...document.querySelectorAll("#studentTable tbody tr")];
const noResults = document.getElementById("noResults");
function filterStudents() {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    studentRows.forEach(row => {
        const matches = row.textContent.toLowerCase().includes(searchText);
        row.hidden = !matches;
        if (matches) visibleCount++;
    });
    noResults.hidden = visibleCount !== 0;
}
searchInput.addEventListener("input", filterStudents);
filterStudents();
