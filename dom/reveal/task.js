document.addEventListener('DOMContentLoaded', function() {
  const revealElements = document.querySelectorAll('.reveal');

  function checkVisibility() {
    revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible = rect.top < windowHeight && rect.bottom >= 500;

      if (isVisible) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  }

  checkVisibility();

  window.addEventListener('scroll', checkVisibility);

  window.addEventListener('resize', checkVisibility);
});