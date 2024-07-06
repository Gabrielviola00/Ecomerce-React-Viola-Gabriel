import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './checkout.css';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.Precio.replace('Precio: $', ''));
    return total + (priceNumber * item.quantity);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setEmailError('Los correos electrónicos no coinciden');
    } else {
      setEmailError('');
      alert('Orden confirmada', { name, surname, phone, email });
    }
  };

  return (
    <div className="checkout-container">
      <h1>Confirmación de compra</h1>
      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.Imagen} alt={item.Nombre} className="checkout-item-image" />
            <div className="checkout-item-info">
              <h2>{item.Nombre}</h2>
              <p>{item.Precio}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Confirmar Email:</label>
          <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
        </div>
        {emailError && <p className="error">{emailError}</p>}
        <Button type="submit" variant="primary">Confirmar Compra</Button>
      </form>
    </div>
  );
};

export default Checkout;