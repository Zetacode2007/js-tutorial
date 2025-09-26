//Funcion del año bisiesto

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

let año = parseInt(prompt("Ingrese un año:"), 10);

if (esBisiesto(año)) {
    alert(año + " es un año bisiesto.");
} else {
    alert(año + " no es un año bisiesto.");
}