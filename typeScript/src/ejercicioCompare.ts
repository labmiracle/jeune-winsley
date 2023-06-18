/*
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.
console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);

*/

function countJewels(jewels: string, stones: string): number {
    
    const jewelSet = new Set(jewels);
    let count = 0;
  
    for (const stone of stones) {
      if (jewelSet.has(stone)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.assert(countJewels("aA", "aAAbbbb") === 3);
  console.assert(countJewels("z", "ZZ") === 0);
  