const ejercicio1_3 = require('../js/ejercicio1_3');

describe("Extrae valor base de ADN ", () => {

    test("Cadena vacía", () => {
        expect(ejercicio1_3("")).toBe("");
    });
    test("Cadena con valores base canónicos", () => {
        expect(ejercicio1_3("CTAGGGTA")).toBe("CTAGGGTA");
    }
    );
    test("debe eliminar valores base no canónicos ", () => {
        expect(ejercicio1_3("sCTAGGGTAC")).toBe("CTAGGGTAC");
    });
    test("Si ningun valor en base canonica debe devolver una cadena vacia", () => {
        expect(ejercicio1_3("xzcvlkq")).toBe("");
    });
});