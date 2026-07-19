// ==========================================================================
// Oliveira Auto Brilho - Scripts
// ==========================================================================

// Substitui imagens quebradas (ainda não adicionadas na pasta img) por um placeholder visual
function handleImgError(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = 'true';

  const placeholder = document.createElement('div');
  placeholder.className = img.className + ' img-placeholder';
  placeholder.setAttribute('data-label', img.dataset.placeholder || img.alt || 'Foto em breve');
  img.replaceWith(placeholder);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ano atual no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header muda de estilo ao rolar a página
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
