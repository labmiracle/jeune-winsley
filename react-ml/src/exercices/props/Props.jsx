import React from 'react'
import Title from './Title';
import Text from  './Text'
import List from  './List'
import {Link} from "react-router-dom"


const Props = () => {

  const items = [
    'Observar el HTML',
    'Pensar en cómo puedo extraer cada parte en componentes',
    'Usarlos, o mejor dicho, reusarlos en React'
  ];

  return (
    <div>
     
        <Title title="Necesito partir en componentes todo esto" />
        <Text text="Para ello puedo usar React que me permitirá reutilizar todos esos componentes. Para ello tengo que:" />
        <List items={items} />
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Read more</a>        
      
    </div>
  );
}

export default Props