import React, { useState } from 'react';

const EmptyString = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const lettersLength = letters.length;
  const [newString, setNewString] = useState([]);
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
      <button onClick={sumString}>Suma Letra</button>
      <button onClick={subtractString}>Resta Letra</button>
    </section>
  );
}

export default EmptyString;
