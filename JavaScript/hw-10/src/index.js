import menuData from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './changeTheme.js';
import './styles.css';

let menuPage = document.querySelector('.js-menu');

function buildMenu(arr) {
  const markup = arr.map(el => menuTemplate(el)).join('');
  menuPage.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuData);
