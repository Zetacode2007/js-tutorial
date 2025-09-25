







//Como dueños de una empresa necesitamos calcular el desceunto de productos en oferta

function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) /100;
    const precionConDescuento = precio - descuento;

    return precionConDescuento;

}

const precioOriginal = 1000
const porcentajeDescuento = 15;
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento)

console.log("Precio Original: Q." + precioOriginal)
console.log("Descuento: "+ porcentajeDescuento + "%")
console.log("Precio con descuento: Q."+ precioFinal)