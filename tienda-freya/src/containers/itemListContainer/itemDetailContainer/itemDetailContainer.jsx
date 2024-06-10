import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../../componentes/ComponentesDePresentacion/ItemDetail/itemDetail';


const ItemDetailContainer = ({ creatinas, multivitaminicos, proteinas }) => {
  const { idItem } = useParams();
  const allProducts = [...creatinas, ...multivitaminicos, ...proteinas];
  const product = allProducts.find(prod => prod.id.toString() === idItem);

  return (
    <div className='contenedor'>
      {product ? <ItemDetail producto={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;
