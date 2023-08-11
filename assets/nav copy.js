const divIframes = document.querySelector('.iframes');
const checkboxes = [
    { checkbox: document.getElementById('mostrarInfoAfogado'), iframe: document.querySelector('.iframeAfogado') },
    { checkbox: document.getElementById('mostrarInfoZumbi'), iframe: document.querySelector('.iframeZumbi') },
    { checkbox: document.getElementById('mostrarInfoCreeper'), iframe: document.querySelector('.iframeCreeper') },
    { checkbox: document.getElementById('mostrarInfoEsqueleto'), iframe: document.querySelector('.iframeEsqueleto') }
];

function atualizarVisibilidade() {
    let algumCheckboxSelecionado = false;

    checkboxes.forEach(({ checkbox, iframe }) => {
        if (checkbox.checked) {
            divIframes.classList.remove('iframeEscondido');
            iframe.classList.remove('iframeEscondido');
            algumCheckboxSelecionado = true;
        } else {
            iframe.classList.add('iframeEscondido');
        }
    });

    if (!algumCheckboxSelecionado) {
        divIframes.classList.add('iframeEscondido');
    }
}

divIframes.classList.add('iframeEscondido');
checkboxes.forEach(({ iframe }) => iframe.classList.add('iframeEscondido'));

checkboxes.forEach(({ checkbox }) => {
    checkbox.addEventListener('change', atualizarVisibilidade);
});
