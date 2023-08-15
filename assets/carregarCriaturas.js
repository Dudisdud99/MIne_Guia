const listaCriaturas = document.querySelector(".lista")
const listaIframes = document.querySelector(".iframes")

async function mostrarMonstros() {
    const request = await fetch("monstros.json")
    const monstros = await request.json()

    numeroDoMonstro = 0

    function carregarCriaturas(numeroDoMonstro) {
        listaCriaturas.innerHTML = monstros[numeroDoMonstro].todosMonstros
        listaCriaturas.innerHTML = ""
        for (let i = 0; i < monstros[numeroDoMonstro].todosMonstros.length; i++) {
            listaCriaturas.innerHTML += 
            `<button class="criaturas open" id="btId${i}">
                <img src="${monstros[numeroDoMonstro].img[i]}"><img/>
                <div class="name">${monstros[numeroDoMonstro].todosMonstros[i]}</div>
            </button>`
        }
    }

    carregarCriaturas(0)
}

mostrarMonstros()

