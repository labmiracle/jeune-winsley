const encontrarMaximoUnosConsecutivos = require('../js/ejercicio1_5');

test('Encontrar máximo de unos consecutivos en matriz válida', () => {
    const matriz = [1, 1, 0, 1, 1, 1]

    expect(encontrarMaximoUnosConsecutivos(matriz)).toBe(3);
  });
  
  test('Manejar matriz con valor no válido', () => {
    const matriz =[1, 1, 0, 1];
    expect(encontrarMaximoUnosConsecutivos(matriz)).toBe(-1);
  });