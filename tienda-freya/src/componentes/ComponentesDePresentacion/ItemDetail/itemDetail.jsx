import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../ItemDetail/detalle.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...producto, quantity });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='contenedorr'>
      <div className='caja caja-imagen'>
        <h1 className='titulo'>{producto.Nombre}</h1>
        <img className='imagen' src={producto.Imagen} alt={producto.Nombre} />
      </div>
      <div className='caja caja-descripcion'>
        <h2 className='descripcion'>{producto.Descripcion}</h2>
        <h2 className='descripcion'>{producto.Sabor}</h2>
        <h2 className='descripcion'>{producto.Peso}</h2>
        <h2 className='descripcion'>{producto.Precio}</h2>
        <div className='contenedor-carrito'>
          <button onClick={handleDecrement}>-</button>
          <h4 className='cantidad'>{quantity}</h4>
          <button onClick={handleIncrement}>+</button>
          <Button variant="secondary" onClick={handleAddToCart}>Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;