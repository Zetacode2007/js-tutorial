/**
 * 
 * 
 * 
 *      ESTRUCTURA SWITCH
 */

let comprar = 'Manzanas';

switch (comprar) {
    case "Narajas":
        console.log("Las naranjas estan a Q10 la mano")
        break;
    case "Manzanas":
        console.log("LAs manzanas estan a Q5 la unidad")
        break; 
    case "Platanos":
        console.log("Los platanos estan a Q12 la docena")
        break; 
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas valen Q10 cada una")    
    default:
        console.log(`Lo sentimos, no contamos con ${comprar}`)
        break;
}