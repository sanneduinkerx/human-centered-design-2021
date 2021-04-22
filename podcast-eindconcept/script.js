const content = document.querySelector('.content p')
const section = document.querySelector('.content')

if(content){
    content.addEventListener('click', function showContent(){
        section.classList.toggle('show');
    })
}


const tune = document.querySelector('body .tune');
const body = document.querySelector('body');


if(tune){
    tune.addEventListener('click', function disco(){

        body.classList.add('DISCO');

        setTimeout(function(){ 
            body.classList.remove('DISCO');
        }, 2000);

        
    })
}