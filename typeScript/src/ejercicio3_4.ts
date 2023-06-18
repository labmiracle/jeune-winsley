/*
Dado el siguiente codigo:
 function greet(greeting) {
 return greeting.toUpperCase();
 }

 const defaultGreeting = greet();
 const portugueseGreeting = greet('Oi como vai!');

 console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);

 Añadir tipos explícitos a los parámetros y tipo de retorno
 Añadir un saludo predeterminado: ”hola”
*/

function greet(greeting: string = 'hola') {
    return greeting.toUpperCase();
    }
   
    const defaultGreeting = greet();
    const portugueseGreeting = greet('Oi como vai!');
   
    console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);