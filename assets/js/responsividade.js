const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight
const fundo = document.querySelector('.fundo')

if(viewportWidth<768){
    fundo.src = "assets/img/mobsCelular.jpg"
}