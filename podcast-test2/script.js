const content = document.querySelector('.content p')
const section = document.querySelector('.content')

if(content){
    content.addEventListener('click', function showContent(){
        section.classList.toggle('show');
    })
}


const tune = document.querySelector('.interaction .tune');
const interaction = document.querySelector('.interaction');


if(tune){
    tune.addEventListener('click', function disco(){

        interaction.classList.add('DISCO');

        setTimeout(function(){ 
            interaction.classList.remove('DISCO');
        }, 2000);

        
    })
}