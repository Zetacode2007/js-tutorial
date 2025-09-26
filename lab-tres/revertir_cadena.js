let cadena = prompt("Ingrese una cadena de texto:");
let invertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
}

console.log("Texto original:", cadena);
console.log("Texto invertido:", invertida);