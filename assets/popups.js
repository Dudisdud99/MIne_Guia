const modal = document.querySelector('.modal')
const close = modal.querySelector('.close')

async function btIdClick() {
    const request = await fetch("monstros.json")
    const monstros = await request.json()

    //for (let i = 0; i < monstros[numeroDoMonstro].todosMonstros.length; i++) {
    //    const = document.getElementById('btId${i}')
    //}

    const listaBt = document.querySelector('.open')

    listaBt.addEventListener( 'click', () => {
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
}

btIdClick()
