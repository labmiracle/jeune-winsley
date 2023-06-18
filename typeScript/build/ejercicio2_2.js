"use strict";
function padLeft(value, padding) {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    if (typeof padding === "number") {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    // si padding es una cadena, return padding + value
    if (typeof padding === "string") {
        return padding + value;
    }
    // si no es ni numero ni cadena, return error
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(`[Ejercicio 4.2] 
    ${padLeft('', 0)} 
    ${padLeft('', '')} 
    ${padLeft('', '')} 
    ${padLeft('', '')} 
    ${padLeft('', '')}
`);
