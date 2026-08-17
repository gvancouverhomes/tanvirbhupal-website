const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenu) {
  document.addEventListener('click', (event) => {
    if (mobileMenu.open && !mobileMenu.contains(event.target)) {
      mobileMenu.removeAttribute('open');
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.removeAttribute('open');
    });
  });
}
