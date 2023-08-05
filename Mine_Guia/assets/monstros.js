document.addEventListener('DOMContentLoaded', function() {
    const lista = document.querySelector(".lista")

    async function main() {
        const request = await fetch("monstros.json")
        const monstros = await request.json()

        var nMonstros

        function carregarMonstros() {
            nMonstros = 0

            if(nMonstros<monstros.length)[
                monstros[nMonstros].monstro.forEach(alt => lista.innerHTML += `<div>${alt}</div>`)
            ]
        }
    }
});
