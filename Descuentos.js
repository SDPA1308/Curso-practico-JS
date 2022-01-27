
function sale(pInicial, descuento)
{
    var descontado = 100 - descuento;
    var precioF = (pInicial * descontado)/100;
    return precioF;
}

function clickSale()
{
    var priceI = document.getElementById("inputPrecio");
    var precioI = priceI.value;

    var discount = document.getElementById("inputDescuento");
    var pDescuento = discount.value;

    var total = sale(precioI,pDescuento);
    var resultadoP = document.getElementById("Resultado");
    resultadoP.innerText = "El precio a pagar es: $" + total;
}

