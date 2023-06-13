/*
Crea una función que reciba una cadena y la devuelva encamelCasefunction camelize(str) 
{}console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');

*/

function camelize(str) {
    //Convert the parameter to an array
    let cadena= str.split(' ');
    if (cadena.length >=1) {
            for (let i = 0; i < cadena.length; i++) {
            cadena[i]=cadena[i].charAt(0).toUpperCase() + cadena[i].slice(1);
        }
        return cadena.join('');
    }else{
        return 'please enter a string with words separated by spaces like this: " A for Banana B for Apple ! you get the idea"';
    }
    
}

console.log(camelize(''));