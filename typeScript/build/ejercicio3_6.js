"use strict";
/*
Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
funciones.
let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function (value: string): string {
return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

capitalize = function (x: number, y: number): number {
return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
Arreglar los errores
*/
let multiply; //return a number
let capitalize; //return a string
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
