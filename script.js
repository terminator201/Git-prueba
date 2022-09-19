/*
El numero 2520 es el numero mas pequeno que es dividido exactamente por los numeros del 1 - 10 encontrar
el numero mas pequeno que pueda ser divido por los numeros de 1 - 20 ?

Ejercicio de projecteuler.net

var variable se puede usar por fuera del scope, llaves de function
let variable2 solo funciona en el scope
cons variable3


*/

function divisible(div) {

    let contador = 0, numeros = 1;

    while (contador < div) {
        for (let i = 1; i <= div; i++) {
            if (numeros % i == 0) {
                contador++;
            } else {
                contador = 0;
                break;
            }
        }
        if (contador == div) {
            console.log(numeros);
            break;
        } else {
            numeros++;
        }
    }
}
divisible(20)