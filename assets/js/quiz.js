//declaração de variaveis 

const Quiz = document.querySelector(".quiz")
const pergunta = Quiz.querySelector('.pergunta')
const alternativas = Quiz.querySelector(".alternativas")
const questaoAtual = Quiz.querySelector(".questao")
const totalErros = Quiz.querySelector(".erros")
const totalAcertos = Quiz.querySelector(".acertos")

const modal = document.querySelector('.modal')
const errou = document.querySelector('.errou')
const acertou = document.querySelector('.acertou')

const final = document.querySelector('.final')
const totalErrosFinal = document.querySelector(".errosFinal")
const totalAcertosFinal = document.querySelector(".acertosFinal")
const reiniciar = document.querySelector(".reiniciar")

var contErros 
var contAcertos 
var atraso = 1000

//funcionalidade

function mensagemAcertou(){
  modal.classList.add("opened")
  acertou.classList.add("opened")
  modal.classList.add("modalAcertou")
  //.innerHTML = "Acertou"

  setTimeout(function() {
    modal.classList.remove("opened")
    acertou.classList.remove("opened")
    modal.classList.remove("modalAcertou")
  }, atraso)
}

function mensagemErrou(){
  modal.classList.add("opened")
  errou.classList.add("opened")
  modal.classList.add("modalErrou")
  //.innerHTML = "Errou"

  setTimeout(function() {
    modal.classList.remove("opened")
    errou.classList.remove("opened")
    modal.classList.remove("modalErrou")
  }, atraso)
}


async function iniciarJogo() {
  const request = await fetch('assets/json/quiz.json');
  const quiz = await request.json();

  contErros = 0;
  contAcertos = 0;
  numeroDaPergunta = 0;

  totalErros.textContent = contErros;
  totalAcertos.textContent = contAcertos;

  function carregarPergunta(nPergunta) {
    if (numeroDaPergunta >= quiz.length) {
      return;
    }
    pergunta.innerHTML = quiz[nPergunta].pergunta;
    alternativas.innerHTML = "";
    quiz[nPergunta].alternativas.forEach(alt => alternativas.innerHTML += `<button>${alt}</button>`);
  }

  alternativas.addEventListener("click", ev => {
    const alternativaClicada = ev.target;
  
    if (!alternativaClicada || !alternativaClicada.closest("button"))
        return
  
    const arrayAlternativas = [...alternativas.children]
    const numeroDaAlternativaClicada = arrayAlternativas.indexOf(alternativaClicada)
    
    if (numeroDaAlternativaClicada == quiz[numeroDaPergunta].resposta) {
      if (numeroDaPergunta >= quiz.length - 1) {
        final.classList.add('opened')
        totalErrosFinal.textContent = contErros++
        totalAcertosFinal.textContent = contAcertos+1
        return
      }
      carregarPergunta(++numeroDaPergunta)
      questaoAtual.textContent = numeroDaPergunta + 1
      contAcertos++
      totalAcertos.textContent = contAcertos
      mensagemAcertou()
    } 
    else {
      mensagemErrou()
      contErros++
      totalErros.textContent = contErros
    }
  })
  
  

  questaoAtual.textContent = numeroDaPergunta+1

  carregarPergunta(0)
}


document.addEventListener('DOMContentLoaded', iniciarJogo);

reiniciar.addEventListener('click', iniciarJogo);