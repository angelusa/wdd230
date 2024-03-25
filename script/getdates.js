document.addEventListener('DOMContentLoaded', function () {
    // Setting current year
    var currentYear = new Date().getFullYear();
    var currentYearElement = document.getElementById('currentYear');

    if (currentYearElement) {
        currentYearElement.innerText = currentYear;
    } else {
        console.error("Element with ID 'currentYear' not found.");
    }

    // Hamburger menu functionality
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function () {
            hamburgerButton.classList.toggle("active");
            navMenu.classList.toggle('show-menu');
        });
    } else {
        console.error("Hamburger button or nav menu not found.");
    }
});
