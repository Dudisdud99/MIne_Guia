const divIframes = document.querySelector('.iframes');

const elementosInfo = [
    { checkbox: document.getElementById('mostrarInfoAfogado'), iframe: document.querySelector('.iframeAfogado') },
    { checkbox: document.getElementById('mostrarInfoZumbi'), iframe: document.querySelector('.iframeZumbi') },
    { checkbox: document.getElementById('mostrarInfoCreeper'), iframe: document.querySelector('.iframeCreeper') },
    { checkbox: document.getElementById('mostrarInfoEsqueleto'), iframe: document.querySelector('.iframeEsqueleto') }
];

divIframes.classList.add('escondido');
elementosInfo.forEach(elemento => elemento.iframe.classList.add('escondido'));

elementosInfo.forEach(elemento => {
    
    try {
        elemento.checkbox.addEventListener('change', function() {
        if (elemento.checkbox.checked) {
            divIframes.classList.remove('escondido');
            elemento.iframe.classList.remove('escondido');
        } else {
            if (elementosInfo.every(item => !item.checkbox.checked)) {
                divIframes.classList.add('escondido');
            }
            elemento.iframe.classList.add('escondido');
        }
    });
    } catch (error) {
        console.log(error)
    }
});
