import menuElements from './menu.json';
import cardTemplates from './templates/templates.hbs';
console.log(cardTemplates);

const menuList = document.querySelector('.js-menu');

const renderMenu = (element) => {
    const creatMarkUpMenu = element.map(cardTemplates).join(''); // cardTemplates - функция уже изначально (elem => cardTemplates(elem))
    menuList.insertAdjacentHTML('beforeend', creatMarkUpMenu)
}
renderMenu(menuElements)
console.log(menuElements);

//Цвет темы
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', changeThemeColor);
console.dir(checkbox);
const body = document.querySelector('body');


function changeThemeColor() {
    if (checkbox.checked) {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.setItem('Theme', 'dark-theme')
    }
    else {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('Theme', 'light-theme')
    }
}

const saveToLocalStorage = localStorage.getItem('Theme')

if(saveToLocalStorage === Theme.DARK ) {
    body.classList.add('dark-theme');
    checkbox.checked = true;
}
else {
    body.classList.add('light-theme')
}