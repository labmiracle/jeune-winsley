import React, { useState } from 'react';
import Button from "./Botton"
import CounterL from "./CounterL"



const EmptyString = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const initialString = [];
  
  return <CounterL letters={letters} initialString={initialString} />;
};

export default EmptyString;
