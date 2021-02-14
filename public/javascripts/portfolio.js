// adds styles to current page in header

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

// mobile burger menu controls

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});

// reset form fields

document.querySelector('.subscription-form').addEventListener('submit', e => {
  e.preventDefault();

  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`),
  );

  e.currentTarget.reset();
});

// filter buttons

document.querySelectorAll('[data-control]').forEach(item =>
  item.addEventListener('click', e => {
    filterContent(e.target.dataset.control);
  }),
);

function filterContent(datasetValue) {
  const allPortfolioItems = document.querySelectorAll(
    '.portfolio-content__item',
  );

  allPortfolioItems.forEach(item => {
    if (datasetValue === 'all') {
      item.classList.remove('visuallyhidden');
      return;
    }

    if (datasetValue !== item.dataset.type) {
      item.classList.add('visuallyhidden');
    } else {
      item.classList.remove('visuallyhidden');
    }
  });
}
