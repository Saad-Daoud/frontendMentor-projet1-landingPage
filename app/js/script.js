const btnHamb= document.querySelector('#btnHamb');
const header = document.querySelector('.header')

btnHamb.addEventListener('click', (e) => (
    
    header.classList.toggle('open')
    
    ))  