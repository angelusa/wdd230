document.addEventListener('DOMContentLoaded', function() {
  console.log('darkMode.js loaded'); // Add this line to verify the script is loaded
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');

  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️ Light Mode';
    } else {
      darkModeToggle.textContent = '🌙 Dark Mode';
    }
  });
});
