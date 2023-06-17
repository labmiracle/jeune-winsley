/*
Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
de todos los argumentos
*/

let funcioncualquiernumeroargumentos = (...args) => {
    let suma =0;
    args.forEach(element => {
        suma +=element;
        //console.log(suma);
    });
    return suma;
}
console.log(funcioncualquiernumeroargumentos("1,2,3,4,5,6,7,8,9,10"));
//console.log(funcioncualquiernumeroargumentos("Scoobydoo","Shaggy","Velma","Daphne","Fred"));