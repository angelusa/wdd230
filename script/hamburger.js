// JavaScript for hamburger menu functionality

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the visibility of the menu items when hamburger icon is clicked
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Change the hamburger icon to a close symbol ('X') when the menu is open
        hamburger.classList.toggle('active');
    });
});
