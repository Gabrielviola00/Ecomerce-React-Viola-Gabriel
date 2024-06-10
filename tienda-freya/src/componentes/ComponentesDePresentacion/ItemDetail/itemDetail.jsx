import React from 'react';
import '../ItemDetail/detalle.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ producto }) => {
  return (
    <div className='contenedorr'>
      <div className='caja caja-imagen'>
        <h1 className='titulo'>{producto.nombre}</h1>
        <img className='imagen' src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className='caja caja-descripcion'>
        <h2 className='descripcion'>{producto.descripcion}</h2>
        <h2 className='descripcion'>{producto.sabor}</h2>
        <h2 className='descripcion'>{producto.peso}</h2>
        <h2 className='descripcion'>{producto.precio}</h2>
        <div className='contenedor-carrito'>
          <button>-</button>
          <h4 className='cantidad'>1</h4>
          <button>+</button>
          <Button variant="secondary">Agregar a carrito</Button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
