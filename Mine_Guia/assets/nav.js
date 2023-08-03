document.addEventListener('DOMContentLoaded', function() {
  const bt = document.getElementById('mostrarNav');
  const abas = document.querySelector('.abas');
  const img = document.querySelector('.mostrarNav>img')
  const label = document.querySelector('.mostrarNav')

  abas.classList.add('escondido'); // Inicia com a classe escondido

  bt.addEventListener('change', function() {
    if (bt.checked) {
      abas.classList.remove('escondido'); 
      img.src = 'img/3linhasBranco.png'
      label.classList.add('selecionado')
    } else {
      abas.classList.add('escondido');
      img.src = 'img/3linhasVermelho.png'
      label.classList.remove('selecionado')
    }
  });
});
