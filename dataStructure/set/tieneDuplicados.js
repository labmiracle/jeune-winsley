function tieneDuplicados(arr) {

    let conjunto = new Set();
    for (let elemento of arr) {
        if (conjunto.has(elemento)) {
            return true;
        }
        conjunto.add(elemento);
    }
    return false;
}


let arreglo1 = [1, 2, 2, 4, 5];
let arreglo2 = [5, 6, 7, 8, 9];

console.log(tieneDuplicados(arreglo1)); 
console.log(tieneDuplicados(arreglo2));  
