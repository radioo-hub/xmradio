document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  console.log('📻 SiriusXM - Loaded!');
});

// Contact Form
function handleContact(e) {
  e.preventDefault();
  alert('✅ Thank you! Our team will contact you shortly.');
  e.target.reset();
}