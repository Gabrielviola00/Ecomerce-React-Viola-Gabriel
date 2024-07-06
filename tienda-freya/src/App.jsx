import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './containers/itemDetailContainer';
import ItemListContainer from './containers/itemListContainer';
import Cart from './componentes/cardwidget/cart';
import Checkout from './componentes/cardwidget/checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idcategory' element={<ItemListContainer/>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

