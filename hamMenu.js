const btn = document.getElementById('hamburgerMenu');
btn.addEventListener('click', hamMenu)
btn.addEventListener('focusout', hamMenu)
const menu = document.getElementById('menu');
const mobileViewport = window.matchMedia("(max-width: 840px)");


function hamMenu() {
    if (document.activeElement === btn) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

}

mobileViewport.addListener(showMenu);

function showMenu() {
    if (mobileViewport.matches) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}