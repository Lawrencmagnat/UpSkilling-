// Get the toggle button and the menu
const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the "active" class on the menu to show/hide it
  menu.classList.toggle('active');
});
