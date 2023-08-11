const divIframes = document.querySelector('.iframes');

const elementosInfo = [
    { checkbox: document.getElementById('mostrarInfoAfogado'), iframe: document.querySelector('.iframeAfogado') },
    { checkbox: document.getElementById('mostrarInfoZumbi'), iframe: document.querySelector('.iframeZumbi') },
    { checkbox: document.getElementById('mostrarInfoCreeper'), iframe: document.querySelector('.iframeCreeper') },
    { checkbox: document.getElementById('mostrarInfoEsqueleto'), iframe: document.querySelector('.iframeEsqueleto') }
];

divIframes.classList.add('iframeEscondido');
elementosInfo.forEach(elemento => elemento.iframe.classList.add('iframeEscondido'));

elementosInfo.forEach(elemento => {
    elemento.checkbox.addEventListener('change', function() {
        if (elemento.checkbox.checked) {
            divIframes.classList.remove('iframeEscondido');
            elemento.iframe.classList.remove('iframeEscondido');
        } else {
            if (elementosInfo.every(item => !item.checkbox.checked)) {
                divIframes.classList.add('iframeEscondido');
            }
            elemento.iframe.classList.add('iframeEscondido');
        }
    });
});
