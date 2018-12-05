const btn = document.getElementById('hamburgerMenu');
btn.addEventListener('click', hamMenu)
const menu = document.getElementById('menu');
const mobileViewport = window.matchMedia("(max-width: 840px)");


function hamMenu() {
    console.log(menu.className);
    if (menu.style.visibility === 'visible') {
        btn.classList.remove('hamburgerCurrent');
        menu.classList.remove('slideIn');
        menu.classList.add('slideOut');
        menu.style.visibility = 'hidden';
    } else {
        menu.style.visibility = 'visible';
        btn.classList.add('hamburgerCurrent');
        menu.classList.add('slideIn');
        menu.classList.remove('slideOut');
    }

}

mobileViewport.addListener(showMenu);

function showMenu() {
    if (mobileViewport.matches) {
        menu.style.visibility = 'hidden';
    } else {
        menu.style.visibility = 'visible';
        btn.classList.remove('hamburgerCurrent');
        menu.classList.remove('slideOut');
        menu.classList.remove('slideIn');
    }
}