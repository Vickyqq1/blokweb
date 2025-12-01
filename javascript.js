var btn = document.querySelector('button');
var nav = document.querySelector('nav');
var closeButton = document.querySelector('nav button');

btn.onclick = doeIets;
closeButton.onclick = sluit;


function doeIets() {
    nav.classList.add('toonMenu');
}

function sluit() {
    console.log('hallo');
    nav.classList.remove('toonMenu')
}

