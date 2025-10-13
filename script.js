// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ----- Modals: AGB, Impressum, Kontakt -----
const footerAgbLink = document.getElementById('footerAgbLink');
const agbModal = document.getElementById('agbModal');
const closeAgb = document.getElementById('closeAgb');

const footerImpressumLink = document.getElementById('footerImpressumLink');
const impressumModal = document.getElementById('impressumModal');
const closeImpressum = document.getElementById('closeImpressum');

const footerKontaktLink = document.getElementById('footerKontaktLink');
const kontaktModal = document.getElementById('kontaktModal');
const closeKontakt = document.getElementById('closeKontakt');

function openModal(m){ m?.classList.add('show'); m?.setAttribute('aria-hidden','false'); }
function closeModal(m){ m?.classList.remove('show'); m?.setAttribute('aria-hidden','true'); }

footerAgbLink?.addEventListener('click', e => { e.preventDefault(); openModal(agbModal); });
closeAgb?.addEventListener('click', () => closeModal(agbModal));
agbModal?.addEventListener('click', e => { if (e.target?.hasAttribute?.('data-close')) closeModal(agbModal); });

footerImpressumLink?.addEventListener('click', e => { e.preventDefault(); openModal(impressumModal); });
closeImpressum?.addEventListener('click', () => closeModal(impressumModal));
impressumModal?.addEventListener('click', e => { if (e.target?.hasAttribute?.('data-close')) closeModal(impressumModal); });

footerKontaktLink?.addEventListener('click', e => { e.preventDefault(); openModal(kontaktModal); });
closeKontakt?.addEventListener('click', () => closeModal(kontaktModal));
kontaktModal?.addEventListener('click', e => { if (e.target?.hasAttribute?.('data-close')) closeModal(kontaktModal); });

// Escape schließt die Modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(agbModal); closeModal(impressumModal); closeModal(kontaktModal); }
});

// Feature-Kacheln: Ein-/Ausblenden (ein Plus/Minus)
document.querySelectorAll('.feature').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!open).toString());
  });
});

// ---------- Formular: robuster Fallback via AJAX ----------
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.textContent = 'Sende ...';
    }

    try {
      const formData = new FormData(form);
      const endpoint = 'https://formsubmit.co/ajax/fahrdienst@weber-mls.de';

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (!resp.ok) throw new Error(`Fehler: ${resp.status} ${resp.statusText}`);

      form.reset();
      if (statusEl) {
        statusEl.className = 'form-status success';
        statusEl.textContent = 'Danke! Ihre Nachricht wurde gesendet.';
      }
    } catch (err) {
      if (statusEl) {
        statusEl.className = 'form-status error';
        statusEl.textContent = 'Senden fehlgeschlagen. Bitte später erneut versuchen.';
      }
      console.error(err);
    }
  });
}
