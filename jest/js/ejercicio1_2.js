/*
Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un
año bisiesto.
Tener en cuenta que:
• Los años que son divisibles por 4 son años bisiestos
• Los años que son divisibles por 100 no son años bisiestos
• Los años que son divisibles por 400 son años bisiestos

*/

let adivinaBisiesto = (num) => {   
    if (num < 0) {
        return "num menor a 0 no es un año";
    }
    if (num === 0) {
        return "No hubo un año cero en el calendario gregoriano";
    }
    else if (num % 4 == 0 && num % 100 != 0) {
        return true;
    } else if (num % 400 == 0) {
        return true;
    } else {
        return false;
    }
}


module.exports = adivinaBisiesto;