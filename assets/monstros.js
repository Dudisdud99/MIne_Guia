
const divIframes = document.querySelector('.iframes')

const mostrarAfogado = document.getElementById('mostrarInfoAfogado')
const iframeAfogado = document.querySelector('.iframeAfogado')

const mostrarZumbi = document.getElementById('mostrarInfoZumbi')
const iframeZumbi = document.querySelector('.iframeZumbi')

const mostrarCreeper = document.getElementById('mostrarInfoCreeper')
const iframeCreeper = document.querySelector('.iframeCreeper')

const mostrarEsqueleto = document.getElementById('mostrarInfoEsqueleto')
const iframeEsqueleto = document.querySelector('.iframeEsqueleto')

divIframes.classList.add('iframeEscondido');

iframeAfogado.setAttribute('class','iframeEscondido');
iframeZumbi.setAttribute('class','iframeEscondido');
iframeCreeper.classList.add('iframeEscondido');
iframeEsqueleto.classList.add('iframeEscondido');

mostrarAfogado.addEventListener('change', function() {
    if (mostrarAfogado.checked) {
        divIframes.classList.remove('iframeEscondido'); 
        iframeAfogado.classList.remove('iframeEscondido');
    } else {
        divIframes.classList.add('iframeEscondido'); 
        iframeAfogado.classList.add('iframeEscondido');
    }
});
mostrarZumbi.addEventListener('change', function() {
    if (mostrarZumbi.checked) {
        divIframes.classList.remove('iframeEscondido'); 
        iframeZumbi.classList.remove('iframeEscondido');
    } else {
        divIframes.classList.add('iframeEscondido'); 
        iframeZumbi.classList.add('iframeEscondido');
    }
});
mostrarCreeper.addEventListener('change', function() {
    if (mostrarCreeper.checked) {
        divIframes.classList.remove('iframeEscondido'); 
        iframeCreeper.classList.remove('iframeEscondido');
    } else {
        divIframes.classList.add('iframeEscondido'); 
        iframeCreeper.classList.add('iframeEscondido');
    }
});
mostrarEsqueleto.addEventListener('change', function() {
    if (mostrarEsqueleto.checked) {
        divIframes.classList.remove('iframeEscondido'); 
        iframeEsqueleto.classList.remove('iframeEscondido');
    } else {
        divIframes.classList.add('iframeEscondido'); 
        iframeEsqueleto.classList.add('iframeEscondido');
    }
});
