const content = document.querySelector('.content p')
const section = document.querySelector('.content')

content.addEventListener('click', function showContent(){
    section.classList.toggle('show');
})