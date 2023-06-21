/*
Escriba una función que tome una arreglo y devuelva la suma de todos los números positivos
del arreglo. Los valores que se pueden convertir en números deben convertirse e incluirse en la
suma si son positivos. Si la matriz está vacía, devuelve cero.
*/


function ejercicio1_4(arreglo) {
    let suma = 0;
    if (arreglo.length === 0) {
        return 0;
    } 
    for (let i = 0; i < arreglo.length; i++) {
        if (typeof Number(arreglo[i]) === "number" && Number(arreglo[i]) > 0) {
           suma += Number(arreglo[i]);
        }
    }
    return suma;
}

module.exports = ejercicio1_4;