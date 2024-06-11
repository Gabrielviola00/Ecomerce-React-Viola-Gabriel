import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
  return (
    <div>
      <div className='contenedor'>
      <div className='contenedor-imagen' >
        <img className='imagenn' src={producto.imagen} alt="" />
      </div>
      <div>
        <div className='contenedor-indice'>
         <button className='boton'>-</button>
         <h4 className='cantidad'>1</h4>
         <button className='boton'>+</button>
         <button className='boton'>Agregar a carrito</button> 
         <Link to={`/item/${producto.id}`}><button className='boton'>Ver más</button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Item






