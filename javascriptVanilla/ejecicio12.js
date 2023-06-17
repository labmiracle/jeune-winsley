/*
Vamos a armar el juedo de ”Adivinar el número”. El juego consiste de los siguiente: La
computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el
número. Si el número que ingresamos es menor que el que genero la maquina nos muestra
el mensaje ”El número es mayor”. Si el número que ingresamos es mayor nos muestra el
mensaje ”El número es menor”. Cuando hayamos acertado el valor nos informa del fin del
juego

*/

let randomNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = prompt("Adivina el número entre 1 y 10");

while (userNumber !== randomNumber) {
    if (userNumber < randomNumber) {
        console.log("El número es mayor");
    } else {
        console.log("El número es menor");
    }
    userNumber = parseInt(prompt("Adivina el número entre 1 y 10")); 
}

console.log("Adivinaste el número");

