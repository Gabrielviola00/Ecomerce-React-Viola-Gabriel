import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../cardwidget/cart.css'   
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Cart = () => {
  const { cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (itemid) => {
    removeFromCart(itemid);
  };
 
  const handleClearCart = () => {
    clearCart();
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.Precio.replace('Precio: $', ''));
    return total + (priceNumber * item.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.Imagen} alt={item.Nombre} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.Nombre}</h2>
                  <p>{item.Descripcion}</p>
                  <p>{item.Precio}</p>
                  <div className='contenedor-carrito'>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <h4 className='cantidad'>{item.quantity}</h4>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <Button variant="secondary" onClick={handleClearCart}>Vaciar Carrito</Button>
            <Link to={'/checkout'}>  <Button variant="primary">Finalizar Compra</Button></Link>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;