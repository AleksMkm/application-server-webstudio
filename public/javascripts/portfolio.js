function setActivePageStyles() {
  const mainPageLink = document.querySelector('[data-page-main]');
  const portfolioPageLink = document.querySelector('[data-page-portfolio]');

  if (window.location.pathname === '/') {
    mainPageLink.classList.add('nav-menu__link--current-page');
    mainPageLink
      .closest('.nav-menu__item')
      .classList.add('nav-menu__item--current-page');
  }

  if (window.location.pathname === '/portfolio') {
    portfolioPageLink.classList.add('nav-menu__link--current-page');
    portfolioPageLink
      .closest('.nav-menu__item')
      .classList.add('nav-menu__item--current-page');
  }
}

setActivePageStyles();

function openBurgerMenu() {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
}

openBurgerMenu();
