(() => {
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
})();
