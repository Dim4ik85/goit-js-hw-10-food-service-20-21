import menuElements from './menu.json';
import cardTemplates from './templates/templates.hbs';
console.log(cardTemplates);

const menuList = document.querySelector('.js-menu');
//Разметка карточек в меню
function cardMarkUp(){
    return cardTemplates(menuElements);
}
console.dir(cardMarkUp());
console.log(cardMarkUp);
//Рендер разметки меню
function renderMenu() {
    const creatMarkUpMenu = cardMarkUp(); 
    menuList.insertAdjacentHTML('beforeend', creatMarkUpMenu)
}
renderMenu();

// const renderMenu = (element) => {
//     const creatMarkUpMenu = element.map(cardTemplates).join(''); // cardTemplates - функция уже изначально (elem => cardTemplates(elem))
//     menuList.insertAdjacentHTML('beforeend', creatMarkUpMenu)
// }
// renderMenu(menuElements)

console.log(menuElements);

//Цвет темы
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const STORAGE_THEME_KEY = 'theme';

const checkbox = document.querySelector('#theme-switch-toggle');

checkbox.addEventListener('change', changeThemeColor);
console.dir(checkbox);
const body = document.querySelector('body');

//тема
function changeThemeColor({ target }) {
    const { checked } = target;
    console.log(target);
    checked ? body.classList.replace(Theme.LIGHT, Theme.DARK)
            : body.classList.replace(Theme.DARK, Theme.LIGHT);

    const theme = checked ? Theme.DARK : Theme.LIGHT; 
    localStorage.setItem(STORAGE_THEME_KEY, theme);                            
}

function getCurrentTheme() {
    const selectedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (selectedTheme) {
        checkbox.checked = selectedTheme === Theme.DARK;
    }
    return selectedTheme ? selectedTheme : Theme.LIGHT;
}

function initTheme() {
    const theme = getCurrentTheme();
    body.classList.add(theme);
}
initTheme();


// function changeThemeColor() {
//     if (checkbox.checked) {
//         body.classList.add(Theme.DARK)
//         body.classList.remove(Theme.LIGHT)
//         localStorage.setItem('Theme', 'dark-theme')
//     }
//     else {
//         body.classList.remove(Theme.DARK)
//         body.classList.add(Theme.LIGHT)
//         localStorage.setItem('Theme', 'light-theme')
//     }
// }

// const saveToLocalStorage = localStorage.getItem('Theme')

// if(saveToLocalStorage === Theme.DARK ) {
//     body.classList.add('dark-theme');
//     checkbox.checked = true;
// }
// else {
//     body.classList.add('light-theme')
// }