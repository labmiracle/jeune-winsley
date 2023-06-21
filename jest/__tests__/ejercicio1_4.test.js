const ejercicio1_4 = require('../js/ejercicio1_4');

describe("Suma de numeros positivos ", () => {
    
        test("Arreglo vacío", () => {
            expect(ejercicio1_4([])).toBe(0);
        });
        test("Arreglo con numeros positivos", () => {
            expect(ejercicio1_4([1,2,3,4,5])).toBe(15);
        }
        );
        test("Arreglo con numeros negativos", () => {
            expect(ejercicio1_4([-1,-2,-3,-4,-5])).toBe(0);
        });
        test("Arreglo con numeros positivos y negativos", () => {
            expect(ejercicio1_4([-1,-2,3,4,5])).toBe(12);
        });
        test("Arreglo con numeros positivos y negativos y letras", () => {
            expect(ejercicio1_4([-1,-2,"a",4,5])).toBe(9);
        });
    });