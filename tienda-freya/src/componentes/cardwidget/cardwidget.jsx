import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "bootstrap/dist/css/bootstrap.min.css"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import carrito from '../img/carrito.png'
import '../cardwidget/cardwidget.css'

const Cardwidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Button variant="primary" className="contenedor-carrito">
        <img src={carrito} alt="" className="imagen-carrito" />
        <Badge bg="secondary">{totalItems}</Badge>
        <span className="visually-hidden"></span>
      </Button>
    </div>
  );
};

export default Cardwidget;   