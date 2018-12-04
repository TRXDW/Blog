const btn = document.getElementById('hamburgerMenu');
btn.addEventListener('click', hamMenu)
btn.addEventListener('focusout', hamMenu)



function hamMenu(){
    const menu = document.getElementById('menu');

    if(document.activeElement === btn )
    {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
