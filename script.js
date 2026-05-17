// 1. Menú hamburguesa (móvil)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// 2. Tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// 3. Modal interactivo para tarjetas
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-modal');
const btnsCard = document.querySelectorAll('.btn-card');

btnsCard.forEach(btn => {
  btn.addEventListener('click', () => {
    const destino = btn.getAttribute('data-destino');
    modalTitle.textContent = destino;
    modalDesc.textContent = `Descubre actividades, gastronomía local y consejos de viaje para ${destino}. ¡Prepárate para una experiencia inolvidable en El Salvador!`;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});