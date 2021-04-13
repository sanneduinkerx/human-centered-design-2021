const bewerk = document.querySelector('header section > p a');
const bewerkMenu = document.getElementsByClassName('menu');

bewerk.addEventListener('click', (e) => {
    e.preventDefault
    bewerkMenu[0].classList.toggle('show')
    console.log('hello');
})