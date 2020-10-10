import menuItemsTpl from '../templates/menu-items.hbs';

import menu from '../menu.json';

const menuListEl = document.querySelector('.js-menu');

menuListEl.insertAdjacentHTML('beforeend', menuItemsTpl(menu));
