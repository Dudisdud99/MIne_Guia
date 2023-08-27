const modal = document.querySelector('.modal');
const infoMobs = modal.querySelector('.info');
const close = modal.querySelector('.close');
const h1Modal = modal.querySelector('.nameMobModal');
const divImgMobModal = modal.querySelector('.divImgMobModal');
const statusMobModal = modal.querySelector('.statusMobModal > p');
const dropMobModal = modal.querySelector('.dropMobModal');
const listaTodos = document.querySelector(".todos");
const listaHostis = document.querySelector(".hostis");
const listaNeutros = document.querySelector(".neutros");
const listaNether = document.querySelector(".nether");
const listaChefoes = document.querySelector(".chefoes");

//--TODOS--

async function carregarBtTodos() {
  try {
    const response = await fetch("assets/json/monstrosTodos.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaTodos.innerHTML = "";
      monstros.forEach(monstro => {
        listaTodos.innerHTML +=
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


//--HOSTIS--

async function carregarBtHostis() {
  try {
    const response = await fetch("assets/json/monstrosHostis.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaHostis.innerHTML = "";
      monstros.forEach(monstro => {
        listaHostis.innerHTML +=
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

//--NEUTROS--

async function carregarBtNeutros() {
  try {
    const response = await fetch("assets/json/monstrosNeutros.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaNeutros.innerHTML = "";
      monstros.forEach(monstro => {
        listaNeutros.innerHTML +=
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

//--NETHER--

async function carregarBtNether() {
  try {
    const response = await fetch("assets/json/monstrosNether.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaNether.innerHTML = "";
      monstros.forEach(monstro => {
        listaNether.innerHTML +=
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

//--CHEFOES--

async function carregarBtChefoes() {
  try {
    const response = await fetch("assets/json/monstrosChefoes.json");
    const monstros = await response.json();

    function carregarCriaturas() {
      listaChefoes.innerHTML = "";
      monstros.forEach(monstro => {
        listaChefoes.innerHTML +=
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

carregarBtTodos();
carregarBtHostis();
carregarBtNeutros();
carregarBtNether();
carregarBtChefoes();

window.onload = carregarBtTodos();
window.onload = carregarBtHostis();
window.onload = carregarBtNeutros();
window.onload = carregarBtNether();
window.onload = carregarBtChefoes();