import './NavBar.css'
import  Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cardwidget from '../cardwidget/cardwidget'
import { useState } from 'react'




const NavBar = () => {
  return (
    <nav>
        <h1>Freya Fitness</h1>
        <ul>
          <li> <Button variant="dark">Proteinas</Button></li>
          <li> <Button variant="dark">Multivitamínicos</Button></li>
          <li> <Button variant="dark">Creatinas</Button></li>
        </ul>
        <Cardwidget/>
        
    </nav>
  )
}

export default NavBar




/*const Menu = () => { 

    const [profe, setProfe] = useState('Luciano')


     const cambiarNombre = () => {
        setProfe('lauty')
     } 

  return (
    <div className='contenedor'>
      <h2>Hola desde menu</h2>
      <p>{profe}</p>
      <button className='boton' onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  )
}

export default Menu*/
