function elementosUnicos(arreglo1, arreglo2) {
    let conjunto = new Set([...arreglo1, ...arreglo2]);
    return Array.from(conjunto);
}


let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [4, 5, 6, 7, 8];

let resultado = elementosUnicos(arreglo1, arreglo2);
console.log(resultado); 
