/*
Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
y devuelva un solo arreglo que combine ambos (usando el operador ...)
*/

let combineTwoArrays = (arr1, arr2) => {
    return arr3 =[...arr1, ...arr2];
}

console.log(combineTwoArrays([1,2,3], [4,5,6]));