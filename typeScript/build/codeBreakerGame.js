"use strict";
function generateSecretNumber() {
    let secretNumber = '';
    for (let i = 0; i < 4; i++) {
        const digit = Math.floor(Math.random() * 9); // Genera un número aleatorio entre 0 y 8
        console.log('Digit:', digit);
        secretNumber += digit.toString();
    }
    return secretNumber;
}
function playCodeBreaker(secretNumber, guess) {
    let result = '';
    const matchedIndexes = [];
    // Comprobar si hay dígitos que concuerdan en la posición original (X)
    for (let i = 0; i < 4; i++) {
        if (secretNumber[i] === guess[i]) {
            result += 'X';
            matchedIndexes.push(i);
        }
    }
    // Comprobar si hay dígitos que coinciden pero en diferentes posiciones (-)
    for (let i = 0; i < 4; i++) {
        if (secretNumber.includes(guess[i]) && !matchedIndexes.includes(i)) {
            result += '-';
        }
    }
    return result;
}
const secretNumber = generateSecretNumber();
console.log('Número secreto:', secretNumber);
const guess1 = '1334';
const result1 = playCodeBreaker(secretNumber, guess1);
console.log('Primer intento:', result1);
