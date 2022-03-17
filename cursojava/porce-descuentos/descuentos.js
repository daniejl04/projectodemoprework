
// const precioOriginal = 120;

// const descuento = 18;
function calcularpreciocondescuento(precio, descuento) {

    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    
    return precioConDescuento;
}


function onclickButtonPriceDiscount(){
    const inputPrice =  document.getElementById ("inputPrice")
    const pricevalue = inputPrice.value;

    const inputDiscount =  document.getElementById ("inputDiscount")
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularpreciocondescuento (pricevalue, DiscountValue)

    const resultp = document.getElementById ("resultp");
    resultp.innerText = "este es tu precio con descuento" + precioConDescuento;
}


// const porcentajePrecioDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,

// })

