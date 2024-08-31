// script.js
document.querySelector('.theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const toggle = this;

    // Toggle the theme class on the body
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Toggle the active class on the switch
    toggle.classList.toggle('active');

    // Update localStorage to save the current theme
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);
});

// Load the theme from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    const body = document.body;
    const toggle = document.querySelector('.theme-toggle');

    // Apply the saved theme
    body.classList.add(savedTheme);

    // Set the switch position based on the saved theme
    if (savedTheme === 'dark-theme') {
        toggle.classList.add('active');
    }
});
