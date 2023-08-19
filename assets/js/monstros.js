const divIframes = document.querySelector('.iframes');

const elementosInfo = [
    { bt: document.getElementById('mostrarInfoAfogado')},
    { bt: document.getElementById('mostrarInfoZumbi')},
    { bt: document.getElementById('mostrarInfoCreeper')},
    { bt: document.getElementById('mostrarInfoEsqueleto')}
];

divIframes.classList.add('escondido');
elementosInfo.forEach(elemento => elemento.iframe.classList.add('escondido'))

elementosInfo.forEach(elemento => {
    elemento.bt.addEventListener('change', () => {
        if (elemento.bt.checked) {
            divIframes.classList.remove('escondido')
            elemento.iframe.classList.remove('escondido')
        } else {
            if (elementosInfo.every(item => !item.bt.checked)) {
                divIframes.classList.add('escondido')
            }
            elemento.iframe.classList.add('escondido')
        }
    })
})
