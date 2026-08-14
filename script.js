/* ---------- LOAD MORE ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const galleryExtra = document.getElementById('galleryExtra');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  if (loadMoreBtn && galleryExtra) {
    loadMoreBtn.addEventListener('click', () => {
      galleryExtra.style.maxHeight = galleryExtra.scrollHeight + 'px';
      galleryExtra.classList.add('expanded');

      galleryExtra.addEventListener(
        'transitionend',
        () => {
          galleryExtra.style.maxHeight = 'none';
          revealOnScroll();
        },
        { once: true }
      );
      galleryExtra.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ---------- SCROLL FADE-IN REVEAL ---------- */

  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const revealedSet = new Set();

  const revealInView = () => {
    const viewportBottom = window.innerHeight;
    revealEls.forEach((el) => {
      if (revealedSet.has(el)) return;
      const rect = el.getBoundingClientRect();

      if (rect.top < viewportBottom * 0.88) {
        el.classList.add('is-visible');
        revealedSet.add(el);
      }
    });
  };

  function revealOnScroll() {
    revealInView();
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealInView();
    window.addEventListener('scroll', revealInView, { passive: true });
    window.addEventListener('resize', revealInView, { passive: true });
  }

  /* ---------- HOME LINK---------- */

  document.querySelectorAll('a[data-reload="true"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.reload();
    });
  });

  /* ---------- EXPLORE BUTTON ---------- */

  const exploreBtn = document.querySelector('.button-1');
  const insightsSection = document.querySelector('.insights');

  if (exploreBtn && insightsSection) {
    exploreBtn.addEventListener('click', () => {
      insightsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
