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
            listaCriaturas.innerHTML += `<div class="criaturas"><label for="${monstros[numeroDoMonstro].inpId[i]}"><img src="${monstros[numeroDoMonstro].img[i]}"><img/></label><div class="name">${monstros[numeroDoMonstro].todosMonstros[i]}</div><input type="checkbox" id="${monstros[numeroDoMonstro].inpId[i]}" class="mostrarInfo"></input></div>`
        }
    }

    // function carregarIframes(numeroDoMonstro) {
    //     listaIframes.innerHTML = monstros[numeroDoMonstro].todosMonstros
    //     listaIframes.innerHTML = ""
    //     for (let i = 0; i < monstros[numeroDoMonstro].todosMonstros.length; i++) {
    //         listaIframes.innerHTML += `<div class="${monstros[numeroDoMonstro].iframe[i]}"><div><label for="${monstros[numeroDoMonstro].inpId[i]}" class="voltar"><img src="img/voltarVermelho.png"></img></label></div><iframe src="${monstros[numeroDoMonstro].htmlCopy[i]}" frameborder="0" class="infoCriaturas"></iframe></div>`
    //     }
    // }

    carregarCriaturas(0)
    //carregarIframes(0)
}

mostrarMonstros()

