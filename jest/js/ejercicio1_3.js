/*
Escriba una función que tome una cadena de ADN (por ejemplo, ’CTAGGGTA’) y devuelva
una nueva cadena con cualquier valor base de ADN no canónico eliminado. Los valores base
canónicos son caracteres únicos: ’C’, ’T’, ’A’ y ’G’ únicamente. Haga que la función distinga
entre mayúsculas y minúsculas, lo que significa que ’c’ (minúsculas) debe eliminarse de la cadena, pero ’C’ (mayúsculas) es correcto y debe permanecer. Si la cadena de ADN está vacía,
simplemente devuelva una cadena vacía.

*/

function ejercicio1_3(cadena) {
    if (cadena.length == 0) {
        return "";
    }
    let cadena2 = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "C" || cadena[i] == "T" || cadena[i] == "A" || cadena[i] == "G") {
            cadena2 += cadena[i];
        }
    }
    return cadena2;
}

module.exports = ejercicio1_3;