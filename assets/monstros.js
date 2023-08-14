
const divIframes = document.querySelector('.iframes')

const mostrarAfogado = document.getElementById('mostrarInfoAfogado')
const iframeAfogado = document.querySelector('.iframeAfogado')

const mostrarZumbi = document.getElementById('mostrarInfoZumbi')
const iframeZumbi = document.querySelector('.iframeZumbi')

const mostrarCreeper = document.getElementById('mostrarInfoCreeper')
const iframeCreeper = document.querySelector('.iframeCreeper')

const mostrarEsqueleto = document.getElementById('mostrarInfoEsqueleto')
const iframeEsqueleto = document.querySelector('.iframeEsqueleto')

divIframes.classList.add('escondido');

iframeAfogado.setAttribute('class','escondido');
iframeZumbi.setAttribute('class','escondido');
iframeCreeper.classList.add('escondido');
iframeEsqueleto.classList.add('escondido');

mostrarAfogado.addEventListener('change', function() {
    if (mostrarAfogado.checked) {
        divIframes.classList.remove('escondido'); 
        iframeAfogado.classList.remove('escondido');
    } else {
        divIframes.classList.add('escondido'); 
        iframeAfogado.classList.add('escondido');
    }
});
mostrarZumbi.addEventListener('change', function() {
    if (mostrarZumbi.checked) {
        divIframes.classList.remove('escondido'); 
        iframeZumbi.classList.remove('escondido');
    } else {
        divIframes.classList.add('escondido'); 
        iframeZumbi.classList.add('escondido');
    }
});
mostrarCreeper.addEventListener('change', function() {
    if (mostrarCreeper.checked) {
        divIframes.classList.remove('escondido'); 
        iframeCreeper.classList.remove('escondido');
    } else {
        divIframes.classList.add('escondido'); 
        iframeCreeper.classList.add('escondido');
    }
});
mostrarEsqueleto.addEventListener('change', function() {
    if (mostrarEsqueleto.checked) {
        divIframes.classList.remove('escondido'); 
        iframeEsqueleto.classList.remove('escondido');
    } else {
        divIframes.classList.add('escondido'); 
        iframeEsqueleto.classList.add('escondido');
    }
});
