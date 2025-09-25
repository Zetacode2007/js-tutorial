/**
    Se solicite un numero al usuario para adivinar el numero secreto
    que sera generado aleatoriamente entre el rando de 1 a 10
 */

const numeroSecreto = Math.floor(Math.random() * 11 - 1 )
const numeroJugador = parseInt(prompt("Adivina el numero entre 1 - 10"))

console.log(`El numero que ingrese fue: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("!Felicidades Ganaste, adivinaste el numero")
}  else if (numeroJugador < numeroSecreto) {
    console.log("El numero secreto es mas grande")
} else {
    console.log("El numero secrente es menor al ingresado")
}

console.log(`El numero secreto era: ${numeroSecreto}`)
