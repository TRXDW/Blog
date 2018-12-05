const btn = document.getElementById('hamburgerMenu');
btn.addEventListener('click', hamMenu)
const menu = document.getElementById('menu');
const mobileViewport = window.matchMedia("(max-width: 840px)");


function hamMenu() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        btn.classList.remove('hamburgerCurrent');
    } else {
        menu.style.display = 'block';
        btn.classList.add('hamburgerCurrent');
    }

}

mobileViewport.addListener(showMenu);

function showMenu() {
    if (mobileViewport.matches) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        btn.classList.remove('hamburgerCurrent');
    }
}