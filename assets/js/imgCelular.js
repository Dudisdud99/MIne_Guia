const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const fundo = document.querySelector('.fundo')

if(screenWidth<768){
    if (window.location.pathname.includes("animais.html")) {
        fundo.src = "assets/img/animaisCelular.jpg";
    }
    if (window.location.pathname.includes("blocos.html")) {
        fundo.src = "assets/img/blocosCelular.jpg"
    }
    if (window.location.pathname.includes("index.html")) {
        fundo.src = "assets/img/indexCelular.webp"
    }
    if (window.location.pathname.includes("monstros.html")) {
        fundo.src = "assets/img/mobsCelular.jpg"
    }    
    if (window.location.pathname.includes("quiz.html")) {
        fundo.src = "assets/img/quizCelular.jpg"
    }    
}

