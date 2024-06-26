// Create a new file named darkMode.js in your scripts directory
document.addEventListener('DOMContentLoaded', function() {
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