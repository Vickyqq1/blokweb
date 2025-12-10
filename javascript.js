var openBtn = document.getElementById('openMenu');
var closeBtn = document.getElementById('closeMenu');
var menu = document.querySelector('header nav ul');

openBtn.onclick = function() {
    menu.classList.add('active');
}

closeBtn.onclick = function() {
    menu.classList.remove('active');
}
