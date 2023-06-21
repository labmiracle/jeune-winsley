const { sum,subtract, multiply, divide }= require('jest/js/math.js');

describe('juego de operaciones aritmeticas', () => {
    test('suma de numeros', () => {
    expect(sum(1, 1)).toBe(2);
    });
    test('resta de numeros', () => {
    expect(subtract(1, 1)).toBe(0);
    });
    test('multiplicacion de numeros', () => {
    expect(multiply(1, 1)).toBe(1);
    });
    test('division de numeros', () => {
    expect(divide(1, 1)).toBe(1);
    });
    });