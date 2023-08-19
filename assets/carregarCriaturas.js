const listaCriaturas = document.querySelector(".lista");
const listaIframes = document.querySelector(".iframes");
const modal = document.querySelector('.modal');
const p = modal.querySelector('.info');
const close = modal.querySelector('.close');
const h1Modal = modal.querySelector('.nameMobModal');
const divImgMobModal = modal.querySelector('.divImgMobModal');

async function carregarBt() {
    const request = await fetch("monstros.json");
    const monstros = await request.json();

    let tipoCriatura = 0; // monstro

    function carregarCriaturas(tipoCriatura) {
        listaCriaturas.innerHTML = "";
        for (var i = 0; i < monstros[tipoCriatura].todosMonstros.length; i++) {
            listaCriaturas.innerHTML +=
                `<button class="criaturas" id="${monstros[tipoCriatura].inpId[i]}">
                    <img src="${monstros[tipoCriatura].img[i]}"></img>
                    <div class="nameMobLista">${monstros[tipoCriatura].todosMonstros[i]}</div>
                </button>`;
        }
    }

    carregarCriaturas(0);

    const listaBt = [
        document.getElementById('mostrarInfoAfogado'),
        document.getElementById('mostrarInfoZumbi'),
        document.getElementById('mostrarInfoCreeper'),
        document.getElementById('mostrarInfoEsqueleto')
    ];

    listaBt.forEach((bt, index) => {
        bt.addEventListener('click', () => {
            modal.classList.add("opened");
            h1Modal.innerHTML = monstros[tipoCriatura].todosMonstros[index];
            divImgMobModal.innerHTML = `<img src="${monstros[tipoCriatura].img[index]}" class="imgMobModal"></img>`;
            p.textContent = monstros[tipoCriatura].info[index];
        });
    });

    close.addEventListener('click', () => {
        modal.classList.remove("opened");
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove("opened");
        }
    });
}

carregarBt();
