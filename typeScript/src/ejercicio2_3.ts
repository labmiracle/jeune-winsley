/*
Dado el siguiente codigo:
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array) {
const flattened = [];
for (const element of array) {
if (Array.isArray(element)) {
element; // any[]
flattened.push(...element);
 } else {
 element; // any
 flattened.push(element);
 }
 }

 return flattened;
 }

 const flattenedNumbers = flatten(numbers);

 console.log('[Ejercicio 4.3]', flattenedNumbers); 
 Añadir anotaciones de tipo (‘any‘ excluido) 
 Inspeccione el tipo de ‘element‘ en diferentes ramas de código 
 Bonificación: convertir ‘flatten‘ en una función genérica

*/

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array:any) {
const flattened = [];
for (const element of array) {
if (Array.isArray(element)) {
element; // any[]
flattened.push(...element);
 } else {
 element; // any
 flattened.push(element);
 }
 }

 return flattened;
 }

 const flattenedNumbers = flatten(numbers);

 console.log('[Ejercicio 4.3]', flattenedNumbers);



 //a generic function is a function that can operate on a variety of types.

//  const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

//  function flatten<T>(array: (T | T[])[]): T[] {
//    const flattened: T[] = [];
//    for (const element of array) {
//      if (Array.isArray(element)) {
//        element; // T[]
//        flattened.push(...element);
//      } else {
//        element; // T
//        flattened.push(element);
//      }
//    }
 
//    return flattened;
//  }
 
//  const flattenedNumbers = flatten(numbers);
 
//  console.log('[Ejercicio 4.3]', flattenedNumbers);
 