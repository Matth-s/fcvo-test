const button = document.querySelector('.icone-menu-deroulant');
const icone = document.querySelector('#menu');

button.addEventListener('click', function() {
    icone.classList.toggle('icone-menu-deroulant-js');
    console.log("hamburger")
});