document.addEventListener('DOMContentLoaded', function () {
    // Setting current year
    var currentYear = new Date().getFullYear();
    var currentYearElement = document.getElementById('currentYear');

    if (currentYearElement) {
        currentYearElement.innerText = currentYear;
    } else {
        console.error("Element with ID 'currentYear' not found.");
    }
});
