import React, { useState } from 'react';
import Button from "./Botton"
const CounterL = ({ letters, initialString }) => {
    const lettersLength = letters.length;
    const [newString, setNewString] = useState(initialString);
    const [indexRemove, setIndexRemove] = useState(0);
  
    const sumString = () => {
      const randomInteger = Math.floor(Math.random() * lettersLength);
      setNewString(previousString => [...previousString, letters[randomInteger]]);
    };
  
    const subtractString = () => {
      if (indexRemove < newString.length) {
        setIndexRemove(prevIndex => prevIndex + 1);
      }
    };
  
    const currentString = newString.slice(0, newString.length - indexRemove).join('');
  
    return (
      <section>
        <p>{currentString}</p>
        <Button label="Suma Letra" onClick={sumString} />
        <Button label="Resta Letra" onClick={subtractString} />
      </section>
    );
  };

  export default CounterL;