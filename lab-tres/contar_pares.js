let entrada = prompt("Ingrese números separados por comas (ej: 1,2,3,4,5):");
let arreglo = entrada.split(",").map(Number);

let contador = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        contador++;
    }
}

console.log("Cantidad de números pares:", contador);