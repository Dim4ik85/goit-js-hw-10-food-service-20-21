import menuElements from './menu.json';
import cardTemplates from './templates/templates.hbs';

const menuList = document.querySelector('.js-menu');

const renderMenu = (element) => {
    const creatMarkUpMenu = element.map(elem => cardTemplates(elem)).join('');
    menuList.insertAdjacentHTML('beforeend', creatMarkUpMenu)
}

renderMenu(menuElements)
console.log(menuElements);