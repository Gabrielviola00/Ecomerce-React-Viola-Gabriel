import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"


const Cardwidget = () => {
  return (
    <div>
      <Button variant="primary">
        <Badge bg="secondary">1</Badge>Carrito
        <span className="visually-hidden"></span>
      </Button>
    </div>
  );
};

export default Cardwidget;
