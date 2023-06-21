/*

Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si
hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser
valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.

 */


function encontrarMaximoUnosConsecutivos(matriz) {
    let maximoUnosConsecutivos = 0;
    let unosConsecutivosActuales = 0;
  
      for (let elemento of matriz) {
        // Verificar si el elemento es distinto de 0 y 1
        if (elemento !== 0 && elemento !== 1) {
          return -1; // Error: valor no válido en la matriz
        }
  
        // Convertir el elemento a número si es una cadena
        const num = typeof elemento === 'string' ? Number(elemento) : elemento;
  
        if (num === 1) {
          unosConsecutivosActuales++;
          maximoUnosConsecutivos = Math.max(maximoUnosConsecutivos, unosConsecutivosActuales);
        } else {
          unosConsecutivosActuales = 0;
        }
      }
    
  
    return maximoUnosConsecutivos;
  }
  
  module.exports = encontrarMaximoUnosConsecutivos;
  