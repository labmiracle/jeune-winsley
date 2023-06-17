/*
función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos 
y devuelva un arreglo de solo los argumentos únicos

*/

let onlyUniques = (...args) => {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if (!arr.includes(args[i])) {
            arr.push(args[i]);
        }
    }
    return arr;
}

console.log(onlyUniques( "Miracle","Miracle","Lab", "Miracle","Tyrion", "Lannister", "Miracle", "Lab", "Tyrion", "Lannister"));