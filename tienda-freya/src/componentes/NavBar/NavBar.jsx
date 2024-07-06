import React from 'react';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardwidget from '../cardwidget/cardwidget';
import logo from '../img/freyalogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to="/"><img src={logo} alt="" className='logo-freya'/></Link>
      <div className='contenedor2'>
        <ul className='lista'>
          <li><Link to="/category/proteinas"><Button variant="dark" className='secciones'>Proteinas</Button></Link></li>
          <li><Link to="/category/Multivitaminicos"><Button variant="dark" className='secciones'>Multivitamínicos</Button></Link></li>
          <li><Link to="/category/Creatinas"><Button variant="dark" className='secciones'>Creatinas</Button></Link></li>
        </ul>
        <div className='carrito'>
          <Link to="/cart"><Cardwidget/></Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;