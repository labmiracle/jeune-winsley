/*
function layEggs(quantity, color) {
 console.log(
 `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
 }

 layEggs();
 Añadir anotación de tipo de parámetro
 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito

*/


function layEggs(quantity:number, color:string):void{
    console.log(
    `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
    }
   
layEggs(2,"rojos");