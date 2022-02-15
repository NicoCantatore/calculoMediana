// calcular mediana
/*Mediana Es el número intermedio de un grupo de números; 
es decir, la mitad de los números son superiores a la mediana y
 la mitad de los números tienen valores menores que la mediana. 
 Por ejemplo, la mediana de 2, 3, 3, 5, 7 y 10 es 4.*/


function calcularMediaAritmetica(lista) { // reutilizamos funcion de promedio


    const sumaLista = lista.reduce(

        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumaLista / lista.length;
    return promediolista;
};


const lista1 = [

    500,
    200,
    1000000,
    100,
];
lista1.sort(function(a, b) { return a - b; }); // agrupa la lista en orden


let mitadLista1 = parseInt(lista1.length / 2);

function par(numero) {

    if (numero % 2 === 0) {
        return true;

    } else {
        return false;
    }
};

let mediana;

if (par(lista1.length)) {

    let elemento1 = lista1[mitadLista1 - 1];
    let elemento2 = lista1[mitadLista1];

    const promedioElem1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElem1y2;

} else {
    mediana = lista1[mitadLista1];
};