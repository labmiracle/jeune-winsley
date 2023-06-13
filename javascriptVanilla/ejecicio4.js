function palabraMasLarga(str) {
    //convert my string into an arry of words
    const palabras = str.split(' ');    
     //console.log(palabras);
    let palabraMasLarga = '';
    //iterte over the array
    for (let i = 0; i < palabras.length; i++) {
    //check if the current word is longer than palabraMasLarga, update palabraMasLarga
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }  
    return palabraMasLarga;
  }  
//console.log(palabraMasLarga('Erase una vez que se era'));
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');