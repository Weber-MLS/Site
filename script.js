// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
