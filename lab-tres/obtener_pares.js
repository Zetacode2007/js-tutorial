let entrada = prompt("Ingrese números separados por comas (ej: 10,15,20,25):");
let arreglo = entrada.split(",").map(Number);

let pares = [];
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
    }
}

console.log("Arreglo original:", arreglo);
console.log("Números pares encontrados:", pares);