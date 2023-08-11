
const Quiz = document.querySelector(".quiz")
const elPergunta = Quiz.querySelector(".pergunta")
const elAlternativas = Quiz.querySelector(".alternativas")
const questaoAtual = Quiz.querySelector(".questao")
const totalErros = Quiz.querySelector(".erros")
const totalAcertos = Quiz.querySelector(".acertos")
const totalErrosFinal = Quiz.querySelector(".errosFinal")
const totalAcertosFinal = Quiz.querySelector(".acertosFinal")
const errou = document.querySelector(".errou")
const acertou = document.querySelector(".acertou")
const conteudo = document.querySelector('.conteudo')
const fundo = document.querySelector('.fundo')
const final = document.querySelector('.final')
let contErros = 0
let contAcertos = 0
var atraso = 1000

errou.classList.add('escondido')
acertou.classList.add('escondido')
final.classList.add('escondido')



function mensagemAcertou(){
  acertou.classList.remove('escondido')
  conteudo.classList.add('escondido')
  fundo.classList.add('escondido')

  setTimeout(function() {
    acertou.classList.add('escondido')
    conteudo.classList.remove('escondido')
    fundo.classList.remove('escondido')
  }, atraso)
}

function mensagemErrou(){
  errou.classList.remove('escondido')
  conteudo.classList.add('escondido')
  fundo.classList.add('escondido')

  setTimeout(function() {
    errou.classList.add('escondido')
    conteudo.classList.remove('escondido')
    fundo.classList.remove('escondido')
  }, atraso)
}

function info(){
  let erros = Quiz.querySelector(".totalErros>h1")
  let acertos = Quiz.querySelector(".totalAcertos>h1")
  let questao = Quiz.querySelector(".questaoAtual>h1")
  erros.textContent = "Erros:"
  acertos.textContent = "Acertos:"
  questao.textContent = "Questão:"
  erros.classList.add('titulo')
  acertos.classList.add('titulo')
  questao.classList.add('titulo')
  totalErros.classList.add('titulo')
  totalAcertos.classList.add('titulo')
  questaoAtual.classList.add('titulo')
  elPergunta.classList.add('titulo')
}


async function main() {
  const request = await fetch("quiz.json")
  const quiz = await request.json()

  numeroDaPergunta = 0
  totalErros.textContent = contErros
  totalAcertos.textContent = contAcertos

  function carregarPergunta(nPergunta) {
    if (numeroDaPergunta > quiz.length){
      return
    }
    elPergunta.innerHTML = quiz[nPergunta].pergunta
    elAlternativas.innerHTML = ""
    // for (let i = 0; i < 9; i++) {
    //   elRespostas.innerHTML += `<button>${quiz[nPergunta].alternativas[i]}</button>`
    // }
    quiz[nPergunta].alternativas.forEach(alt => elAlternativas.innerHTML += `<button>${alt}</button>`)
  }

  elAlternativas.addEventListener("click", ev => {
    const alternativaClicada = ev.target;
    
    if (!alternativaClicada || !alternativaClicada.closest("button"))
        return


    const arrayAlternativas = [...elAlternativas.children]
    const numeroDaAlternativaClicada = arrayAlternativas.indexOf(alternativaClicada)
    if (numeroDaAlternativaClicada == quiz[numeroDaPergunta].resposta) {
      carregarPergunta(++numeroDaPergunta)
      questaoAtual.textContent = numeroDaPergunta+1
      totalAcertos.textContent++
      mensagemAcertou()
      return
    }
    mensagemErrou()
    totalErros.innerText++
  })

  questaoAtual.textContent = numeroDaPergunta+1

  carregarPergunta(0)
}

function comecar(){
  let bt = document.querySelector(".comecar")
  bt.style.display = 'none'
  main()
  info()
}

