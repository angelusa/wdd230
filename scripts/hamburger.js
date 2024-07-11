document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function() {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      hamburger.innerHTML = '&#9776;'; // Hamburger icon
    } else {
      navMenu.classList.add('show');
      hamburger.innerHTML = '&times;'; // Close icon
    }
  });
});
