//Dia de la semana

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Número inválido. Debe ser del 1 al 7.";
    }
}

console.log(diaDeLaSemana(1)); 
console.log(diaDeLaSemana(5)); 
console.log(diaDeLaSemana(8)); 