const modal = document.querySelector('.modal')

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