/*
en el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio degolpes que se espera que haga un 
golfista para meter la bola en un hoyo y así completarel juego. Dependiendo de qué tan por encima o por debajo del par 
estén tus golpes, existeun apodo diferente.Escribe una función que reciba los argumentosparystrokesy devuelve la cadena 
correcta deacuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba (más alto)a abajo 
(más bajo)
*/

let golfGame=(par,strokes)=>{
    if(strokes==1){
        return "Hole-in-one!";
    }else if(strokes <= par-2 ){
        return "Eagle";
    }else if(strokes==par-1){
        return "Birdie";
    }else if(strokes==par){
        return "Par";
    }else if(strokes==par+1){
        return "Bogey";
    }else if(strokes==par+2){
        return "Double Bogey";
    }else{
        return "Go Home!";
    }
}

console.log(golfGame(0,0))