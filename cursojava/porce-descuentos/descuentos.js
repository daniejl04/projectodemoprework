
// const precioOriginal = 120;

// const descuento = 18;
function calcularpreciocondescuento(precio, descuento) {

    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    
    return precioConDescuento;
}
// const porcentajePrecioDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,

// })

