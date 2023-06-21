const adivinaBisiesto = require('../js/ejercicio1_2.js');


describe('Check si un año es Bisiesto y devueve un boolean', () => {

    test("Deberia  devolver num menor a 0 no es un año", () => {
        expect(adivinaBisiesto(-1)).toBe("num menor a 0 no es un año");
    });
    test("Deberia  devolver No hubo un año cero en el calendario gregoriano", () => {
        expect(adivinaBisiesto(0)).toBe("No hubo un año cero en el calendario gregoriano");
    });

    test("Deberia  devolver si is  num es divisible por  4 y no  por 100", () => {
        expect(adivinaBisiesto(12)).toBe(true);
    });
// test("Deberia  devolver si is  num es divisible por400", () => {
//     expect(adivinaBisiesto(0)).toBe(true);

// })
test("Deberia  devolver falso si   num es una cadena", () => {
    expect(adivinaBisiesto("100")).toBe(false);

})
});
