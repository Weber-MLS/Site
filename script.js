// Mobile Navigation
const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
if (toggle && navList) {
  toggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// FAQ Akkordeon
document.querySelectorAll('.faq .item .q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', String(open));
  });
});

// Kontaktformular – einfache Client-Validierung
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const required = ['name', 'phone', 'date', 'time', 'from', 'to'];
    const missing = required.filter(k => !String(data[k] || '').trim());
    if (missing.length) {
      alert('Bitte füllen Sie alle Pflichtfelder aus: ' + missing.join(', '));
      return;
    }
    alert('Danke! Ihre Anfrage wurde lokal erfasst. (Für Live-Betrieb Mail-Backend anbinden.)');
    form.reset();
  });
}
