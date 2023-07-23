const darkModeToggle = document.getElementById('dark-mode-checkbox');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
  body.classList.toggle('dark-mode');
});

