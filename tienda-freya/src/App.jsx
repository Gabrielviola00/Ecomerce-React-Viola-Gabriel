import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './containers/itemListContainer/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import { creatinas } from './componentes/productos/creatinas';
import { proteinas } from './componentes/productos/proteinas';
import { multivitaminicos } from './componentes/productos/multivitaminicos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idcategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer creatinas={creatinas} multivitaminicos={multivitaminicos} proteinas={proteinas} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;