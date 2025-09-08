// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// AGB Modal
const openAgb = document.getElementById('openAgb');
const footerAgbLink = document.getElementById('footerAgbLink');
const agbModal = document.getElementById('agbModal');
const closeAgb = document.getElementById('closeAgb');

function showAgb() {
  agbModal.classList.add('show');
  agbModal.setAttribute('aria-hidden', 'false');
}
function hideAgb() {
  agbModal.classList.remove('show');
  agbModal.setAttribute('aria-hidden', 'true');
}

openAgb?.addEventListener('click', showAgb);
footerAgbLink?.addEventListener('click', (e) => { e.preventDefault(); showAgb(); });
closeAgb?.addEventListener('click', hideAgb);
agbModal?.addEventListener('click', (e) => { if (e.target?.hasAttribute?.('data-close')) hideAgb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideAgb(); });
