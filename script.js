// Intersection Observer for fade-in
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Lightbox full image preview
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImage = document.getElementById('lightboxImage');

  function openLightbox(src, alt) {
    if (!lightboxOverlay || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(event) {
    if (event.target === lightboxOverlay || event.target.classList.contains('lightbox-close')) {
      lightboxOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  document.querySelectorAll('.image-preview').forEach(button => {
    button.addEventListener('click', () => {
      openLightbox(button.dataset.src, button.querySelector('img').alt || 'Gambar besar');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightboxOverlay && lightboxOverlay.classList.contains('active')) {
      lightboxOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });