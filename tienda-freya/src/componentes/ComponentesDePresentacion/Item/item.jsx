import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
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
    <div className='contenedor'>
      <div className='contenedor-imagen'>
        <img className='imagenn' src={producto.Imagen} alt="" />
      </div>
      <div>
        <div className='contenedor-indice'>
          <button className='boton' onClick={handleDecrement}>-</button>
          <h4 className='cantidad'>{quantity}</h4>
          <button className='boton' onClick={handleIncrement}>+</button>
          <button className='boton' onClick={handleAddToCart}>Agregar al carrito</button>
          <Link to={`/item/${producto.id}`}><button className='boton'>Ver más</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Item;








