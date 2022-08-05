const button = document.querySelector('.icone-menu-deroulant');
const icone = document.querySelector('#menu');
const menuDeroulant = document.querySelectorAll('.menu-deroulant');
const array = document.querySelectorAll('.sous-menu');

button.addEventListener('click', function() {
    icone.classList.toggle('icone-menu-deroulant-js');
    array.forEach((items) => {
        items.classList.remove('display');
    });
});



menuDeroulant.forEach((itemDeroulant) => {
    itemDeroulant.addEventListener('click', function(e) {
        switch(e.target.id) {
            case "un":
                array[0].classList.toggle('display');
                break;
            case "deux":
                array[1].classList.toggle('display');
                break;
            case "trois":
                array[2].classList.toggle('display');
                break;
            case "quatre":
                array[3].classList.toggle('display');
                break;
            case "cinq":
                array[4].classList.toggle('display');
                break;
        }
        })
});
