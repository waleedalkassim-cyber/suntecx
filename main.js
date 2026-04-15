
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
