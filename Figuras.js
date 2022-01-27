// Código del cuadrado
var ladoCuadrado;
var inputCuadrado = document.getElementById("valorCuadrado");

function perimetroCuadrado(ladoCuadrado) 
{
    var ladoCuadrado = parseInt(inputCuadrado.value);
    var pCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: " + pCuadrado + "cm");
}

function areaCuadrado (ladoCuadrado)
{
    var ladoCuadrado = parseInt(inputCuadrado.value);
    var aCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El área del cuadrado es: " + aCuadrado + "cmˆ2");
} 

// Código del triángulo
var lado1;
var lado2;
var base;
var alturaT;
var inputL1 = document.getElementById("valorLadoT1");
var inputL2 = document.getElementById("valorLadoT2");
var inputb = document.getElementById("valorBaseT");

function perimetroTriangulo (lado1, lado2, base)
{
    var lado1 = parseInt(inputL1.value);
    var lado2 = parseInt(inputL2.value);
    var base = parseInt(inputb.value); 
    var pTriangulo = lado1 + lado2 + base;
    console.log("El perimetro del triángulo es: " + pTriangulo + "cm");
}

function areaTriangulo (base, alturaT)
{
    var lado1 = parseInt(inputL1.value);
    var lado2 = parseInt(inputL2.value);
    var base = parseInt(inputb.value);


    if (lado1 == lado2 && lado1 == base)
    {
        var alturaT = (Math.sqrt (3 * lado1))/2
    }
    else if (lado1 == lado2 && lado1 != base) 
    {
        var alturaT = Math.sqrt(Math.pow(lado1, 2) - ((Math.pow(base, 2)/4)))
    }
    else
    {
        var alturaT = (lado1 * base)/lado2
    }
 
    var aTriangulo = (base * alturaT)/2;
    console.log("El área del triángulo es: " + aTriangulo + "cmˆ2");
}

// Código del círculo

var inputCirculo = document.getElementById("valorRadio");
var radio = fradio();
var diametro = fdiametro();
const pi = Math.PI;

function fradio()
{
    radio = parseInt(inputCirculo.value);
}

function fdiametro(radio) 
{
    radio = parseInt(inputCirculo.value);
    diametro = radio * 2;
}

function perimetroCirculo()
{
    fdiametro();
    var pCirculo = diametro * pi;
    console.log("El perimetro del círculo es: " + pCirculo + "cm");    
}

function areaCirculo ()
{
    fradio();
    var aCirculo = pi * (Math.pow(radio,2));
    console.log("El área del círculo es: " + aCirculo + "cmˆ2");
}
