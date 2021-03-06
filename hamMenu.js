const btn = document.getElementById('hamburgerMenu');
btn.addEventListener('click', hamMenu)
const menu = document.getElementById('menu');
const mobileViewport = window.matchMedia("(max-width: 840px)");


function hamMenu() {
    menu.style.visibility = 'visible';
    if(menu.className ==='mainNav slideIn'){
        menu.classList.remove('slideIn');
        menu.classList.add('slideOut');
        btn.classList.remove('hamburgerCurrent');
    }else if(btn.className === 'hamburger' ){
        menu.classList.add('slideIn');
        menu.classList.remove('slideOut');
        btn.classList.add('hamburgerCurrent');
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