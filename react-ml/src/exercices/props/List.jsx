import React from 'react';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <ListItem key={index} text={item} />;
      })}
    </ul>
  );
};

export default List;
