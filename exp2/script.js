

const toggle = document.getElementById('theme-toggle');
const dashboard = document.querySelector('.dashboard');

// Toggle between dark and light theme
toggle.addEventListener('click', () => {
  const newTheme = dashboard.dataset.theme === 'light' ? 'dark' : 'light';
  dashboard.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

// Load saved theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    dashboard.dataset.theme = savedTheme;
  }
});
