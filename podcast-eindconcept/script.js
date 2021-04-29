const content = document.querySelector('.content p')
const section = document.querySelector('.content')
const tune = document.querySelector('body .tune');
const body = document.querySelector('body');
const fontSize = document.getElementById('fontSize');
const interlinie = document.getElementById('interlinie');
const valueFont = document.getElementById('value1');
const valueLine = document.getElementById('value2');
const transcriptText = document.querySelectorAll('main section:nth-of-type(2) ul li p');
const buttonOption = document.getElementsByClassName('option')
const header = document.querySelector('header');
const darkMode = document.getElementsByClassName('darkMode');


buttonOption[0].addEventListener('click', () => {
    console.log('clicked')
    header.classList.toggle('optionsOn')
})

fontSize.addEventListener('input', () => {
    console.log(fontSize.value)
    valueFont.textContent = fontSize.value;
    transcriptText.forEach(text => {
        text.style.fontSize = `${fontSize.value}px`;
    })
})

interlinie.addEventListener('input', () => {
    valueLine.textContent = interlinie.value;
    transcriptText.forEach(text => {
        text.style.lineHeight = `${interlinie.value}px`;
    })
})

darkMode[0].addEventListener('click', () => {
    body.classList.toggle('darkModeActivated')
})



if(content){
    content.addEventListener('click', function showContent(){
        section.classList.toggle('show');
    })
}

if(tune){
    tune.addEventListener('click', function disco(){

        body.classList.add('DISCO');

        setTimeout(function(){ 
            body.classList.remove('DISCO');
        }, 2000);
    })
}


// darkmode

const today = new Date();
const hourNow = today.getHours();

console.log(hourNow);

if (hourNow >= 21) {
    body.classList.add('darkModeActivated')
} else if(hourNow >= 8) {
    body.classList.remove('darkModeActivated')
} else if(hourNow >= 1) {
    body.classList.add('darkModeActivated')
}