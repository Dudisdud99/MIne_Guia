const modal = document.querySelector('.modal')
const close = modal.querySelector('.close')
const open = document.querySelector('.abrir')

open.addEventListener('click', () => {
    modal.classList.add("opened")
})

close.addEventListener( 'click', () => {
    modal.classList.remove("opened")
})

modal.addEventListener('click', (e) =>{

    if (e.target.classList.contains("modal")) {
        modal.classList.remove("opened")
    }
})