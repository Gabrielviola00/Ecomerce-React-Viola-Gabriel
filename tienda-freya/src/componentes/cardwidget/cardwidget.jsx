import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import carrito from '../img/carrito.png'
import './cardwidget.css'


const Cardwidget = () => {
  return (
    <div>
      <Button variant="primary" className="contenedor-carrito" >
        <img src={carrito} alt="" className="imagen-carrito" />
        <Badge bg="secondary" >1</Badge>
        <span className="visually-hidden"></span>
      </Button>
    </div>
  );
};

export default Cardwidget;
    