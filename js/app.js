const campo = document.querySelector("#campo")
const spanNumero = document.querySelector(".numero-palabras")
const boton = document.querySelector(".btn")

boton.addEventListener("click", ()=>{
    if(campo.value === "") return alert("El campo esta vacio")
    let palabras = campo.value.trim().split(" ")
    let nCaracteres = campo.value.length
    let numeroP = palabras.length
    if( numeroP >= 100) {
        spanNumero.classList.add("error")
        spanNumero.innerHTML = `Se excedió mas de 100 palabras`
        return 
    }
    spanNumero.classList.remove("error")
    spanNumero.innerHTML = `Número de palabras # ${numeroP} y carácteres # ${nCaracteres}`
})

const botonReiniciar = document.querySelector(".btn-reiniciar")

botonReiniciar.addEventListener("click", ()=>{
    campo.value = ""
    spanNumero.innerHTML = ""
})