//Cálculo de la media aritmética.

//definicón de un array
var listaEj = 
[
    100,
    200,
    300,
    400,
    500,
    600
];

function mediaAritmetica(lista)
{
    //El metodo reduce ejecuta una función que resulta 
    //en un solo valor de salida de los elementos del array.
    let sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    //for (var i = 0; i < lista.length; i++)
    //{
    //    sumaLista = sumaLista + lista[i];
    //}

    var promedio = sumaLista/lista.length;
    return promedio
}

//Cálculo de la mediana.

//definicón de un array
var listaEj1 = 
[
    100,
    200,
    300,
    400,
    500,
    500,
    900,
    1,
    2
];

var med;
var valorM;
var elementos = [];
var v1;
var v2;

function esPar(lista)
{
    if (lista.length % 2 == 0)
    {
    return true
    }
    else
    {
    return false
    }  
}

function mediana (lista)
{ 
    var listaOrdenada = lista.sort ((a,b) => a - b);
    console.log(listaOrdenada);
    v1 = (listaOrdenada.length/2);
    v2 = (listaOrdenada.length/2) + 1;
    valorM = parseInt(listaOrdenada.length/2);

    if (esPar(lista) == false)
        {
        med = listaOrdenada[valorM];
        return med;
        }
        else
        {   
        var valor1 = listaOrdenada[v1 - 1];
        var valor2 = listaOrdenada[v2 - 1];
        med = (valor1 + valor2)/2
        return med;
        } 
}

//Cálculo de la moda

var listaEj2 = 
[
    100,
    200,
    300,
    400,
    500,
    500,
    900,
    100,
    500,
    100,
    100
];

var elementos = [];
var cuenta = {};
var mod;

function moda(lista)
{
    lista.map
    (
        function (lista)
        {
            if (cuenta[lista])
            {
                cuenta[lista] +=  1;
            }
            else
            {
                cuenta[lista] = 1;
            }    
        }
    );
    //Objetct.entries permite convertir un objeto en un array
    var cuentaF = Object.entries(cuenta).sort
    (
        function (a,b)
        {
            return b[1] - a[1];
        }
    );
    console.log (cuentaF);
    mod = cuentaF[0];
    return mod[0];
}
