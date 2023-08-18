const listaCriaturas = document.querySelector(".lista");
const listaIframes = document.querySelector(".iframes");
const modal = document.querySelector('.modal');
const p = modal.querySelector('.info');
const close = modal.querySelector('.close');

async function carregarBt() {
    const request = await fetch("monstros.json");
    const monstros = await request.json();

    tipoCriatura = 0;//monstro

    function carregarCriaturas(tipoCriatura) {
        listaCriaturas.innerHTML = monstros[tipoCriatura].todosMonstros;
        listaCriaturas.innerHTML = "";
        for (var i = 0; i < monstros[tipoCriatura].todosMonstros.length; i++) {
            listaCriaturas.innerHTML +=
                `<button class="criaturas" id="${monstros[tipoCriatura].inpId[i]}">
                    <img src="${monstros[tipoCriatura].img[i]}"><img/>
                    <div class="name">${monstros[tipoCriatura].todosMonstros[i]}</div>
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
            p.textContent = monstros[0].info[index];
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
