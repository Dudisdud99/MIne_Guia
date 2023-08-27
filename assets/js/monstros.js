const listaCriaturas = document.querySelector(".lista");
const modal = document.querySelector('.modal');
const infoMobs = modal.querySelector('.info');
const close = modal.querySelector('.close');
const h1Modal = modal.querySelector('.nameMobModal');
const divImgMobModal = modal.querySelector('.divImgMobModal');
const statusMobModal = modal.querySelector('.statusMobModal > p');
const dropMobModal = modal.querySelector('.dropMobModal');

async function carregarBt() {
  try {
    const response = await fetch("assets/json/monstros.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaCriaturas.innerHTML = "";
      monstros.forEach(monstro => {
        listaCriaturas.innerHTML +=
          `<button class="criaturas" id="${monstro.inpId}">
              <img src="${monstro.img}"></img>
              <div class="nameMobLista">${monstro.nome}</div>
          </button>`;
      });
    }

    carregarCriaturas();

    const listaBt = monstros.map(monstro => document.getElementById(monstro.inpId));

    listaBt.forEach((bt, index) => {
      bt.addEventListener('click', () => {
        modal.classList.add("opened");
        h1Modal.innerHTML = monstros[index].nome;
        divImgMobModal.innerHTML = `<img src="${monstros[index].img}" class="imgMobModal"></img>`;
        infoMobs.innerHTML = monstros[index].info;
        statusMobModal.innerHTML = monstros[index].status;
        dropMobModal.innerHTML = "";

        monstros[index].drop.forEach(drop => {
          const dropElement = document.createElement("div");
          dropElement.className = "dropsMobModal";
          dropElement.innerHTML = `
            ${drop.nome} <img src="${drop.img}" alt="${drop.nome} drop">
          `;
          dropMobModal.appendChild(dropElement);
        });
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
  } catch (error) {
    console.error('Erro ao carregar elementos do JSON:', error);
  }
}

carregarBt();

window.onload = carregarBt();