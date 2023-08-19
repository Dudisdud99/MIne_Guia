
  const btMostrarAbas = document.getElementById('mostrarAbas')
  const abas = document.querySelector('.abas');
  const iconMostrarAbas = document.querySelector('.mostrarAbas>img')
  const labelMostrarAbas = document.querySelector('.mostrarAbas')
  
  const btMostrarPesquisa = document.getElementById('mostrarPesquisa')
  const input = document.getElementById('pesquisa')
  const iconMostrarPesquisa = document.querySelector('.mostrarPesquisa>img') 
  const labelMostrarPesquisa = document.querySelector('.mostrarPesquisa')

  const btMostrarUsuario = document.getElementById('mostrarUsuario')
  /*const ? = document.getElementById('?')*/
  const iconMostrarUsuario = document.querySelector('.mostrarUsuario>img') 
  const labelMostrarUsuario = document.querySelector('.mostrarUsuario')
  
  abas.classList.add('escondido');
  input.classList.add('escondido');
  /*?.classList.add('escondido');*/

  btMostrarAbas.addEventListener('change', function() {
    if (btMostrarAbas.checked) {
      abas.classList.remove('escondido'); 
      iconMostrarAbas.src = 'img/3linhasBranco.png'
      labelMostrarAbas.classList.add('selecionadoAbas')
      labelMostrarAbas.style.background = 'red'
    } else {
      abas.classList.add('escondido');
      iconMostrarAbas.src = 'img/3linhasVermelho.png'
      labelMostrarAbas.classList.remove('selecionadoAbas')
      labelMostrarAbas.style.background = 'white'
    }
  });

  btMostrarPesquisa.addEventListener('change', function() {
    if (btMostrarPesquisa.checked) {
      input.classList.remove('escondido'); 
      iconMostrarPesquisa.src = 'img/lupa-branca-removebg-preview.png'
      labelMostrarPesquisa.classList.add('selecionado')
      labelMostrarPesquisa.style.background = 'red'
    } else {
      input.classList.add('escondido');
      iconMostrarPesquisa.src = 'img/lupa-vermelha.png'
      labelMostrarPesquisa.classList.remove('selecionado')
      labelMostrarPesquisa.style.background = 'white'
    }
  });

  btMostrarUsuario.addEventListener('change', function() {
    if (btMostrarUsuario.checked) {
      /*?.classList.remove('escondido'); */
      iconMostrarUsuario.src = 'img/usuarioBranco.png'
      labelMostrarUsuario.classList.add('selecionado')
      labelMostrarUsuario.style.background = 'red'
    } else {
      /*?.classList.add('escondido');*/
      iconMostrarUsuario.src = 'img/usuarioVermelho.png'
      labelMostrarUsuario.classList.remove('selecionado')
      labelMostrarUsuario.style.background = 'white'
    }
  });