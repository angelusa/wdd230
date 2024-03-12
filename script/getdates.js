var currentYear = new Date().getFullYear();
document.getElementById('curretYear').innerText = currentYear;

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
    });
});
