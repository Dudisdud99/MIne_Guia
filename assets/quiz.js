
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
let contErros = 0
let contAcertos = 0

errou.classList.add('mensagem')
acertou.classList.add('mensagem')

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
      final.style.visibility="visible"
      final.style.opacity="1"

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
      return
    }

    alert("EROooooOOOoOOooWWWWW");
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

