import React from 'react';
import Item from '../ComponentesDePresentacion/Item/item';

const ItemList = ({ productos }) => {
  return (
    <div className='contenedor'>
      <div className='item-list'>
        {productos.map((producto, index) => (
          <Item key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;







  
  
