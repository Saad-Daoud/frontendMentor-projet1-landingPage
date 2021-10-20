const btnHamb= document.querySelector('#btnHamb');
const header = document.querySelector('.header');
const body = document.querySelector('body');

btnHamb.addEventListener('click', function (e) {
    header.classList.toggle('open')
    body.classList.toggle('hiddenScroll')
})

