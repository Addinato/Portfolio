const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
const lines = menuBtn?.querySelectorAll('span');

if (menuBtn && mobileMenu && lines && lines.length === 3) {
  menuBtn.addEventListener('click', () => {

    // visa mobilmeny
    mobileMenu.classList.toggle('opacity-100');
    mobileMenu.classList.toggle('pointer-events-auto');

    // hamburger -> X
    lines[0].classList.toggle('rotate-45');
    lines[0].classList.toggle('translate-y-2');

    lines[1].classList.toggle('opacity-0');

    lines[2].classList.toggle('-rotate-45');
    lines[2].classList.toggle('-translate-y-2');

  });
}