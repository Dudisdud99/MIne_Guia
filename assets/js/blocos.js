const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const fundo = document.querySelector('.fundo')

if(screenWidth<768){
    fundo.src = "assets/img/blocosCelular.webp"
}