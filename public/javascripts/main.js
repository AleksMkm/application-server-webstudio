(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop---is-hidden');
  }
})();

(() => {
  document.querySelector('.subscription-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.currentTarget.reset();
  });
})();

(() => {
  document.querySelector('.callback-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.currentTarget.reset();
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

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
